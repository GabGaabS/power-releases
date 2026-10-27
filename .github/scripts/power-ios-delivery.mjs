// Generic public orchestration. No application sources or plaintext logs uploaded.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { access, copyFile, lstat, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';

const aad = Buffer.from('power-iphone-diagnostic-v1');
export function sealDiagnostic(data, publicKey) {
  assert.ok(Buffer.isBuffer(data) && data.length <= 32 * 1024 * 1024);
  const key = crypto.randomBytes(32), iv = crypto.randomBytes(12);
  try {
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    cipher.setAAD(aad);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    const wrapped = crypto.publicEncrypt({ key: publicKey, oaepHash: 'sha256' }, key);
    return Buffer.from(JSON.stringify({ version: 1, wrapped: wrapped.toString('base64'),
      iv: iv.toString('base64'), tag: cipher.getAuthTag().toString('base64'), data: encrypted.toString('base64') }));
  } finally { key.fill(0); }
}
export function openDiagnostic(envelope, privateKey) {
  const e = JSON.parse(envelope);
  assert.equal(e.version, 1);
  const key = crypto.privateDecrypt({ key: privateKey, oaepHash: 'sha256' }, Buffer.from(e.wrapped, 'base64'));
  try {
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(e.iv, 'base64'));
    decipher.setAAD(aad);
    decipher.setAuthTag(Buffer.from(e.tag, 'base64'));
    return Buffer.concat([decipher.update(Buffer.from(e.data, 'base64')), decipher.final()]);
  } finally { key.fill(0); }
}
export function validateContext(env) {
  assert.equal(env.GITHUB_REPOSITORY, 'GabGaabS/power-releases');
  assert.equal(env.GITHUB_EVENT_NAME, 'workflow_dispatch');
  assert.equal(env.GITHUB_REF, 'refs/heads/main');
  assert.equal(env.GITHUB_ACTOR, 'GabGaabS');
  assert.match(env.SOURCE_SHA, /^[0-9a-f]{40}$/);
  assert.match(env.GITHUB_RUN_ID, /^[1-9][0-9]{0,19}$/);
}
async function exists(file) { try { await access(file); return true; } catch { return false; } }
const diagnosticName = env => env.DELIVERY_STAGE === 'build' ? 'iphone-build-diagnostic.enc' : 'iphone-diagnostic.enc';
async function regular(file, maxBytes) {
  const metadata = await lstat(file);
  assert.ok(metadata.isFile() && !metadata.isSymbolicLink());
  assert.ok(metadata.size > 0 && metadata.size <= maxBytes);
}
export async function prepareOutputs(env) {
  validateContext(env);
  assert.ok(env.RUNNER_TEMP && env.DIAGNOSTIC_PUBLIC_KEY);
  const root = env.RUNNER_TEMP, out = path.join(root, 'power-delivery');
  await mkdir(out, { recursive: true });
  const log = path.join(root, 'power-private-build.log');
  const diagnostic = await exists(log) ? await readFile(log) : Buffer.from('Private preparation did not start.');
  const sealed = path.join(out, diagnosticName(env));
  await writeFile(sealed, sealDiagnostic(diagnostic, env.DIAGNOSTIC_PUBLIC_KEY));
  const files = [sealed];
  if (await exists(path.join(root, 'power-ipa-built'))) {
    const folder = path.join(root, 'power-source/build/ios/unsigned');
    const names = (await readdir(folder)).filter(name => /^Power-\d+\.\d+\.\d+\+\d+-ios-unsigned\.ipa$/.test(name));
    assert.equal(names.length, 1);
    const name = names[0], ipa = path.join(folder, name);
    await regular(ipa, 512 * 1024 * 1024);
    const hash = crypto.createHash('sha256').update(await readFile(ipa)).digest('hex');
    const destination = path.join(out, name), sum = `${destination}.sha256`;
    await copyFile(ipa, destination);
    await writeFile(sum, `${hash}  ${name}\n`);
    files.push(destination, sum);
  }
  if (await exists(path.join(root, 'power-screenshots-built'))) {
    const folder = path.join(root, 'power-source/build/ios/screenshots');
    const names = (await readdir(folder)).filter(name => /^iphone-(programmes|exercices|calendrier|couleur-(volt|violet|cyan|green|orange|red))\.png$/.test(name));
    assert.equal(names.length, 9);
    for (const name of names) {
      const file = path.join(folder, name);
      await regular(file, 8 * 1024 * 1024);
      assert.equal((await readFile(file)).subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
      const destination = path.join(out, name);
      await copyFile(file, destination);
      files.push(destination);
    }
  }
  return files;
}
async function main() {
  const env = process.env;
  validateContext(env);
  let files;
  try {
    files = await prepareOutputs(env);
  } catch (_) {
    const sealed = path.join(env.RUNNER_TEMP, 'power-delivery', diagnosticName(env));
    if (!await exists(sealed)) throw new Error('No encrypted diagnostic available.');
    files = [sealed];
    console.log('Build output incomplete; retaining only the encrypted diagnostic.');
  }
  assert.ok(env.GH_TOKEN);
  const repo = 'GabGaabS/power-releases';
  const gh = args => execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  const input = path.join(env.RUNNER_TEMP, 'power-delivery', 'draft.json');
  await writeFile(input, JSON.stringify({ tag_name: `ios-build-${env.GITHUB_RUN_ID}`,
    target_commitish: 'main', name: 'INTERNAL iPhone build — DO NOT PUBLISH',
    draft: true, prerelease: true, make_latest: 'false',
    body: `Unpublished build for local verification. Reviewed source: ${env.SOURCE_SHA}. Unsigned iPhone IPA if compilation succeeded; isolated demo screenshots if capture succeeded. No physical device validation. Diagnostics are encrypted for a locally retained key. No source or plaintext log. This workflow never publishes or changes Latest.` }));
  const existing = JSON.parse(gh(['api', `repos/${repo}/releases?per_page=100`]))
    .find(release => release.tag_name === `ios-build-${env.GITHUB_RUN_ID}`);
  const draft = existing ?? JSON.parse(gh(['api', `repos/${repo}/releases`, '--method', 'POST', '--input', input]));
  assert.ok(Number.isSafeInteger(draft.id) && draft.draft && draft.prerelease);
  for (const file of files) {
    const prior = draft.assets.find(asset => asset.name === path.basename(file));
    if (prior) {
      assert.equal(prior.digest, `sha256:${crypto.createHash('sha256').update(await readFile(file)).digest('hex')}`);
      continue;
    }
    gh(['api', `https://uploads.github.com/repos/${repo}/releases/${draft.id}/assets?name=${encodeURIComponent(path.basename(file))}`,
      '--method', 'POST', '--header', 'Content-Type: application/octet-stream', '--input', file]);
  }
  const verified = JSON.parse(gh(['api', `repos/${repo}/releases/${draft.id}`]));
  assert.equal(verified.draft, true);
  assert.ok(verified.assets.every(asset => /^(iphone(-build)?-diagnostic\.enc|Power-\d+\.\d+\.\d+\+\d+-ios-unsigned\.ipa(\.sha256)?|iphone-(programmes|exercices|calendrier|couleur-(volt|violet|cyan|green|orange|red))\.png)$/.test(asset.name)));
  for (const file of files) {
    const asset = verified.assets.find(a => a.name === path.basename(file));
    const expected = crypto.createHash('sha256').update(await readFile(file)).digest('hex');
    assert.equal(asset.digest, `sha256:${expected}`);
    assert.equal(asset.size, (await lstat(file)).size);
  }
  console.log('Unpublished iPhone build retained; allowed files and hashes verified.');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(() => { console.error('Private build delivery failed. No source or plaintext diagnostic was published.'); process.exitCode = 1; });
}
