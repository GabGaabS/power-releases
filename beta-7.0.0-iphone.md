# Mettre à jour Power V6 → 7.0.0-beta.1+71 sur iPhone

Ce guide s’utilise uniquement avec `Power-7.0.0-beta.1+71-ios-unsigned.ipa`
de la préversion publiée par GabGaabS. Cet IPA est **NON SIGNÉ** :
AltStore Classic / AltServer doit le signer avec ton propre compte Apple.
**Garde ta V6 installée.** Les contrôles du fichier compilé ne prouvent pas encore
son installation ni la migration sur un véritable iPhone.
La cible de cette bêta est iOS 15 ou plus récent.

**Ne supprime ni ne décharge Power ou AltStore.** N'installe pas une autre copie
de Power pour essayer de récupérer tes données.

## Avant la mise à jour : conserver tes données et renouveler si nécessaire

Si Power ou AltStore ne s'ouvre plus parce qu'il a expiré, commence par le
renouvellement de l'étape 4, sans suppression, puis reviens à la sauvegarde.

1. Dans ta V6, utilise l'export de sauvegarde **complet**, s'il est disponible,
   plutôt qu'un simple export de programme. Copie le ZIP dans un emplacement
   privé hors de Power, idéalement aussi sur ton ordinateur. Garde tes anciennes
   sauvegardes. Si l'export échoue, conserve l'app et demande de l'aide avant la mise à jour.
2. Note ton programme actif, tes séances récentes, quelques charges/répétitions,
   ton niveau, tes XP et tes trophées. Note les nombres de programmes, séances et
   séries si ta version les affiche : tu compareras **tes propres valeurs** après.
3. Garde **AltStore Classic**, AltServer et le **même compte Apple** que pour
   ta V6. Le fichier Power doit conserver l'identifiant d’origine
   `com.gab.power.power` ; le même compte Apple doit permettre à AltStore de
   reprendre la même identité d’installation et de mettre à jour l’app existante.
4. Avec un compte Apple gratuit, renouvelle les applications avant les **sept
   jours** : ouvre **AltStore → My Apps → Refresh All**, avec AltServer ouvert.
   [FAQ officielle : My Apps et renouvellement](https://faq.altstore.io/altstore-classic/your-altstore).
   L'iPhone doit être en USB, ou sur le même Wi-Fi que l'ordinateur.
   Si AltStore lui-même a expiré, AltServer permet de le réinstaller **sans le
   supprimer auparavant**. [FAQ officielle AltServer](https://faq.altstore.io/altstore-classic/altserver).

Pendant la transition, les données d'entraînement restent locales. Certaines
fonctions sociales de V6 peuvent devenir indisponibles jusqu'à sa mise à jour ;
cela ne justifie pas d'effacer l'app.

## Installer l’IPA de la préversion

1. Dans la release **7.0.0-beta.1+71**, télécharge le fichier exact
   `Power-7.0.0-beta.1+71-ios-unsigned.ipa` et son fichier `.sha256`.
   Compare l’empreinte avec celle indiquée dans la release. Le lien public
   « dernière version » peut encore proposer V6. Un APK Android ne convient pas.
2. Enregistre cet IPA **NON SIGNÉ** dans **Fichiers**. Avec AltServer joignable et
   le même compte Apple, importe-le par le parcours AltStore Classic utilisé pour
   ta V6. Vérifie ensuite dans **My Apps** que Power est mise à jour. Si tu ne
   retrouves pas le parcours d’import, demande de l’aide en conservant l’app.
3. Garde l'app existante pendant l'opération. Si une suppression est demandée,
   si l'identifiant change ou si une deuxième Power apparaît, **arrête et garde
   les copies en place**. Une erreur de signature ou de limite d'applications ne
   se corrige pas en supprimant Power. En cas de problème de connexion, essaie
   d'abord l'USB et consulte le [dépannage officiel](https://faq.altstore.io/altstore-classic/troubleshooting-guide).
4. Au premier lancement, laisse la bêta préparer sa copie locale. Dans
   **Profil → Compte et récupération**, contrôle le bilan et utilise
   **Exporter la copie avant migration**. Conserve ce nouveau ZIP hors de l'app,
   puis compare tes séances, séries, charges, réglages et progression avec V6.
   Si le contrôle de copie manque ou si des données diffèrent, arrête avant de lier un compte.
5. Prépare ensuite **ton propre compte Power**, distinct du compte Apple :
   **Créer et relier mon compte** pour un compte anonyme sans connexion existante ;
   **Récupérer mon compte historique** si tu possèdes déjà sa connexion ;
   **Actualiser un compte déjà lié** si ce compte est toujours présent.
   La récupération doit vérifier la même identité Power, sans fusion automatique.
   En cas de conflit, garde l'app et les sauvegardes ; ne crée pas un autre compte pour contourner l'erreur.
6. Saisis toi-même tes identifiants, vérifie ton e-mail si demandé, puis contrôle
   l'historique avant de reprendre tes vraies séances. Choisis séparément tes
   partages et Analytics. **La publicité éditeur de cette bêta est désactivée sur iPhone.**

L’essai vidéo de ce lot prépare et compresse le fichier localement ; aucun envoi
au coach ou stockage vidéo cloud n’est activé. Une ancienne photo de programme
dont le fichier a disparu devra être rechoisie : elle n’est pas recréée à partir
de la seule base SQLite.

Ne transmets aucun mot de passe Apple/Power, code de connexion ou jeton. Pour
signaler un blocage, donne seulement le message affiché, le modèle d'iPhone et
les versions iOS/Power, sans publier ta sauvegarde.

L’installation et la conservation des données de cette bêta restent à vérifier
sur le premier iPhone testeur. Aucun essai sur un véritable iPhone n’est revendiqué.
