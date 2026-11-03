# Passer de Power V6 à la bêta V7 sur Android

La **7.0.0-beta.1+71 est disponible** pour les utilisateurs actuels de Power V6.
Elle permet de tester la V7 ensemble avant sa version finale. Elle met à jour
Power directement et reprend automatiquement les données du téléphone.
**Ne désinstalle pas Power et n’efface pas ses données.**

Télécharge [l’APK Android de cette bêta](https://github.com/GabGaabS/power-releases/releases/download/v7.0.0-beta.1%2B71/Power-7.0.0-beta.1%2B71-android.apk)
ou retrouve-le sur [la page de la bêta](https://github.com/GabGaabS/power-releases/releases/tag/v7.0.0-beta.1%2B71).
Le fichier s’appelle `Power-7.0.0-beta.1+71-android.apk` et conserve la signature
habituelle de Power. Son empreinte SHA-256 est :
`743a855abf823950d243ec029aab5964090fac817313024935ae579f22a261dd`.

## 1. Faire une copie depuis V6, avant la mise à jour

1. Dans **Power V6**, ouvre l’onglet **Profil**, puis descends jusqu’à **GESTION**.
2. Appuie sur **Exporter la base de données**, puis sur **Base complète**
   (« Export avec les performances et l’historique »).
3. Si Android demande une autorisation de stockage pour cet export, autorise
   Power puis reviens dans l’app. Dans le choix de dossier, sélectionne un
   dossier personnel que tu retrouveras dans l’app **Fichiers**, par exemple
   un dossier de sauvegardes dans Documents, puis valide le choix du dossier.
4. Attends le message **Base exportée vers…**. Dans **Fichiers**, ouvre le dossier
   choisi et vérifie la présence de `power_backup_full_<date-et-heure>.zip`.
   Garde ce ZIP et tes anciennes sauvegardes. Fais aussi une copie hors du
   téléphone, par exemple sur ton ordinateur personnel par USB. Tu peux utiliser
   le partage de l’app Fichiers vers un stockage privé ; cet export Power V6
   ne propose pas lui-même de bouton de partage.
5. Note ton programme actif et vérifie quelques séances récentes et anciennes,
   avec leurs séries et charges, ainsi que tes XP et trophées. Cela permettra de
   comparer après la mise à jour.

Choisis bien **Base complète** : l’export JSON d’un programme seul ne sauvegarde
pas ton historique. Cette copie V6 est une précaution supplémentaire ; conserve
surtout l’app et ses données sur le téléphone. Si l’export échoue ou que cette
option manque, garde tout en place et demande de l’aide à GabGaabS avant la mise
à jour. Ne publie aucun ZIP dans GitHub ou une discussion publique.

## 2. Installer la bêta et exporter la copie V7

1. Ouvre `Power-7.0.0-beta.1+71-android.apk` et choisis **Mettre à jour**.
   Si Android demande de désinstaller Power ou signale un conflit, arrête ici
   et contacte GabGaabS. Ne force pas l’installation en supprimant l’app.
2. Ouvre Power et attends la préparation de la copie locale. **Tu n’as pas à
   importer manuellement ton ZIP V6** : la mise à jour conserve les données
   existantes sur place.
3. Avant de créer ou relier un compte, ouvre **Profil → Compte et récupération**.
   Dans **Copie locale avant migration**, vérifie les nombres de programmes,
   séances et séries, puis appuie sur **Exporter la copie avant migration**.
4. Dans l’écran d’enregistrement Android, conserve le nom
   **Power-avant-migration.zip**, choisis un dossier privé et valide
   l’enregistrement. Vérifie ensuite le fichier dans **Fichiers** et copie-le
   aussi hors du téléphone. Annuler le choix d’emplacement n’exporte pas le ZIP.
   Garde cette deuxième copie avec celle de V6. Elle contient l’historique et
   les réglages ; elle ne transfère pas à elle seule le compte, la connexion,
   les fichiers audio ou les clés de messagerie.
5. Compare les mêmes programmes, séances, séries, charges, XP et trophées qu’en
   V6. S’ils semblent manquer ou différer, ne poursuis pas les changements de
   compte : conserve l’app et les deux ZIP et signale le problème à GabGaabS.

## 3. Préparer ton compte, puis tester

Si ton compte V6 était anonyme, choisis **Créer et relier mon compte** depuis
ce téléphone. Saisis toi-même ton adresse, ton mot de passe et les informations
demandées, puis vérifie l’e-mail. Si tu avais déjà le compte e-mail associé à cet
historique, choisis **Connexion → Récupérer mon compte historique**.
**Actualiser un compte déjà lié** sert au compte encore présent sur le téléphone.
En cas de conflit, garde l’app et ses copies : ne crée pas un autre compte pour
contourner l’erreur. Complète toi-même la date et les conditions demandées.
Ne communique aucun mot de passe, code ou lien de récupération.

Choisis ensuite tes autorisations dans le Profil : classements, demandes
d’amis/coach, sauvegarde privée en ligne, Analytics et annonces. Analytics reste
désactivé par défaut. La bannière est fermable ; une vidéo publicitaire choisie
peut donner 24 heures sans bannière. Google peut ne pas diffuser d’annonce.
Ces choix se règlent dans **Profil → Confidentialité et essais**.

Pour ce test avant la V7 finale :

- Ferme puis rouvre Power sans réseau et vérifie ton historique, puis rétablis
  la connexion. Le suivi sportif local reste utilisable sans serveur.
- Teste l’icône d’historique à droite du nom d’un exercice et les fonctions
  sociales avec les autres testeurs, selon vos autorisations.
- Pour une image personnelle, utilise un programme d’essai, choisis une image,
  puis ferme et rouvre l’app. Une ancienne image perdue du cache doit être
  rechoisie ; un ZIP de base de données ne sauvegarde pas toutes les photos.
- L’essai vidéo compresse le fichier **sur le téléphone** : il n’envoie pas encore
  la vidéo à un coach ou dans le cloud.

Indique à GabGaabS la version installée, si tes données sont conservées et le
message d’erreur éventuel. Masque les informations personnelles sur les captures
et garde les archives en privé. La migration se fait sur chaque téléphone :
le serveur ne possède pas toutes les séances et séries locales.
