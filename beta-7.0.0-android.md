# Mettre à jour Power vers la bêta V7 sur Android

La **7.0.0-beta.9+79 est disponible** pour les utilisateurs de Power V6 et des bêtas V7 précédentes.
Elle permet de tester la V7 ensemble avant sa version finale. Elle met à jour
Power directement et reprend automatiquement les données du téléphone.
**Ne désinstalle pas Power et n’efface pas ses données.**

Le suivi local reste utilisable sans compte. Les fonctions en ligne sont réservées
aux personnes de **15 ans et plus en France**, avec attestation dans l’app.
Une ancienne date de naissance valide peut être conservée ; aucun nouveau
formulaire ne demande de date de naissance.

Le démarrage ne demande pas de compte. Les fonctions en ligne inaccessibles
sont grisées et expliquent comment créer, connecter ou compléter ton compte ;
tu peux continuer à utiliser les entraînements locaux.

L’APK se télécharge manuellement depuis GitHub. La mise à jour intégrée a été
retirée ; elle ne sert plus à récupérer ni à installer les versions suivantes.

Télécharge [l’APK Android de cette bêta](https://github.com/GabGaabS/power-releases/releases/download/v7.0.0-beta.9%2B79/Power-7.0.0-beta.9%2B79-android.apk)
ou retrouve-le sur [la page de la bêta](https://github.com/GabGaabS/power-releases/releases/tag/v7.0.0-beta.9%2B79).
Le fichier s’appelle `Power-7.0.0-beta.9+79-android.apk` et conserve la signature
habituelle de Power. Son empreinte SHA-256 est :
`3ffddc04408f7d409f32a57919ffdcfcf34cf04112ccc761e332c8906faf8951`.

## 1. Exporter ses données avant la mise à jour

### Si tu es encore sous V6

1. Dans la version de **Power actuellement installée**, ouvre l’onglet **Profil**, puis descends jusqu’à **GESTION**.
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
   le partage de l’app Fichiers vers un stockage privé. Vérifie que ta copie reste
   accessible hors de Power.
5. Note ton programme actif et vérifie quelques séances récentes et anciennes,
   avec leurs séries et charges, ainsi que tes XP et trophées. Cela permettra de
   comparer après la mise à jour.

Choisis bien **Base complète** : l’export JSON d’un programme seul ne sauvegarde
pas ton historique. Cette copie est une précaution supplémentaire ; conserve
surtout l’app et ses données sur le téléphone. Si l’export échoue ou que cette
option manque, garde tout en place et demande de l’aide à GabGaabS avant la mise
à jour. Ne publie aucun ZIP dans GitHub ou une discussion publique.

### Si tu utilises déjà une bêta V7

1. Ouvre **Profil → Compte et récupération**, puis appuie sur **Exporter mon historique local** avec le compte déjà lié à cet historique.
2. Dans l’écran d’enregistrement Android, conserve le nom **Power-historique.sqlite**, choisis un dossier privé et valide l’enregistrement. Annuler cette fenêtre ne crée pas de copie.
3. Vérifie le fichier dans **Fichiers**, puis copie-le hors du téléphone, par exemple sur ton ordinateur personnel par USB. Conserve aussi tes anciennes copies V6 et V7.
4. Note ton programme actif et vérifie quelques séances, séries, charges, XP et trophées pour les comparer après la mise à jour.

Cette copie contient la base d’entraînement ; elle ne sauvegarde pas les photos, les fichiers audio, les réglages de l’app, la connexion ou les clés de messagerie. Si tu n’es plus connecté au compte lié, reconnecte-toi à ce même compte avant l’export. Si tu ne peux pas le faire, conserve l’app et ses données et contacte GabGaabS avant la mise à jour.

## 2. Installer la bêta et exporter la copie V7

Si ton compte a déjà été migré dans une bêta V7, conserve ce compte et
ne recommence pas sa création ou sa liaison. Après les étapes 1 et 2, vérifie
l’historique et passe aux essais de la section 3. Les étapes 3 et 4 concernent
les utilisateurs qui préparent encore leur migration depuis V6.

1. Ouvre `Power-7.0.0-beta.9+79-android.apk` et choisis **Mettre à jour**.
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

La connexion Google est proposée sur Android ; la connexion par e-mail reste disponible. **Si tu as déjà un compte Power par e-mail, garde ce compte connecté** : ouvre **Profil → Compte et récupération → Lier mon compte Google**, confirme ton mot de passe actuel, puis choisis un compte Google qui t’appartient. Google devient un autre moyen d’accéder au même compte Power, même si les adresses e-mail diffèrent ; ton historique et tes réglages sont conservés. Une annulation ne change pas ton compte. Si le Google choisi est déjà utilisé par un autre compte Power, la liaison est refusée : choisis un autre Google, sans recréer de compte ni contourner le message.

Si tu découvres Power sans compte ni historique existant, le suivi local reste accessible sans connexion. Pour créer un compte, ouvre **Créer un compte** et choisis la création par e-mail ou **Créer mon compte avec Google**. Pour retrouver un compte Power déjà lié à Google, utilise **Continuer avec Google** avec ce même Google. Les nouveaux comptes ne sont plus créés anonymement en arrière-plan ; les anciennes identités sont conservées pour leur récupération.

Si tu utilises déjà la bêta V7 avec ton compte migré, conserve cette connexion.
La préparation ci-dessous concerne les comptes qui n’ont pas encore été migrés.

Si ton compte V6 était anonyme, ouvre **Créer un compte** depuis ce téléphone.
Saisis toi-même ton adresse, ton mot de passe et les informations demandées,
puis choisis **Créer et sauvegarder mon historique** ou **Créer sans sauvegarde**.
Cette création relie le compte encore présent sur ce téléphone. Vérifie ensuite
l’e-mail. Si tu avais déjà le compte e-mail associé à cet
historique, choisis **Connexion → Récupérer mon compte historique**.
**Actualiser un compte déjà lié** sert au compte encore présent sur le téléphone.
En cas de conflit, garde l’app et ses copies : ne crée pas un autre compte pour
contourner l’erreur. Confirme toi-même l’attestation d’âge demandée. Lis les
conditions et valide-les si tu les acceptes.
Ne communique aucun mot de passe, code ou lien de récupération.

En cas de difficulté de connexion, le lien **Besoin d’aide ? Contacter le support** ouvre ton application de messagerie. Ne communique aucun mot de passe, code ou lien de récupération.

Choisis ensuite tes autorisations dans le Profil : classements, demandes
d’amis/coach, sauvegarde privée en ligne, Analytics et annonces. Analytics reste
désactivé avant ton accord. Le Tableau ne propose plus de carte Analytics ; ce choix reste dans
**Profil → Paramètres de confidentialité**. Un accord ou un refus enregistré est
conservé après une mise à jour. Le suivi local reste disponible sans compte, publicité ou Analytics.
La bannière est fermable ; une vidéo publicitaire choisie
peut donner 24 heures sans bannière. Google peut ne pas diffuser d’annonce.
Ces choix se règlent dans **Profil → Paramètres de confidentialité**.

À la création par e-mail, **Créer et sauvegarder mon historique** demande une
première sauvegarde privée en ligne. **Créer sans sauvegarde** crée le compte sans
la demander. Pour une création avec Google, un dialogue présente ces deux choix
avant le sélecteur Google. Ce choix est facultatif ; les connexions à des comptes
existants et les refus précédents n’activent jamais cette sauvegarde à ta place.

La première copie attend la vérification de l’adresse e-mail, un compte éligible
et une connexion au service. Si tu reçois un e-mail de vérification, confirme son
lien puis reviens dans Power pour laisser la préparation reprendre. Une panne peut retarder
l’envoi ; les entraînements locaux restent utilisables.

Il s’agit d’**une seule copie initiale**, pas d’une synchronisation continue de
chaque série. Elle peut contenir les programmes, séances, séries, charges, RPE/e1RM,
poids corporels et révisions, envoyés à Google pour une restauration. Mots de
passe, jetons, photos, fichiers audio et clés de messagerie sont exclus. Conserve
tes exports privés V6/V7 : cette copie ne les remplace pas.

Pour ce test avant la V7 finale :

- Sur le Tableau, vérifie la prochaine séance et les actions **Démarrer aujourd’hui**, **Ouvrir le calendrier** et le lien **Voir le programme**. Une séance déjà commencée propose **Reprendre la séance**.

- Ferme puis rouvre Power sans réseau et vérifie ton historique, puis rétablis
  la connexion. Le suivi sportif local reste utilisable sans serveur.
- Teste l’icône d’historique à droite du nom d’un exercice et les fonctions
  sociales avec les autres testeurs, selon vos autorisations.
- Pour le premier message privé, les deux personnes ouvrent une fois cette
  version de Power et connectent leur compte éligible. L’app prépare alors les
  clés sans ouvrir un chat. Le destinataire n’a ensuite pas besoin d’ouvrir la
  conversation avant que l’autre personne lui envoie un message.
- Pour une image personnelle, utilise un programme d’essai, choisis une image,
  puis ferme et rouvre l’app. Une ancienne image perdue du cache doit être
  rechoisie ; un ZIP de base de données ne sauvegarde pas toutes les photos.
- L’envoi de vidéos au coach ou dans le chat reste reporté ; cette bêta n’ajoute
  aucun bouton d’envoi vidéo.

Indique à GabGaabS la version installée, si tes données sont conservées et le
message d’erreur éventuel. Masque les informations personnelles sur les captures
et garde les archives en privé. La migration se fait sur chaque téléphone :
le serveur ne possède pas toutes les séances et séries locales.

## 4. Amis, coaching et confidentialité

Dans **Profil → Mon nom#tag**, affiche ton identifiant court et copie-le. Partage l’identifiant complet avec l’autre testeur, qui doit aussi utiliser cette bêta. Dans **Potes → Découvrir** ou **Coaching → Inviter**, il peut saisir cet identifiant au lieu du long numéro de compte. Les anciens identifiants restent acceptés.

Les demandes de coaching reçues sont visibles dans **Potes → cloche Notifications**,
avec un compteur de demandes non lues. Appuie sur une demande pour l’accepter ou
la refuser. L’écran Coaching distingue aussi les demandes reçues des relations
et des invitations envoyées. Les contacts affichent leur nom#tag lorsqu’il a été
créé ; à défaut, leur pseudo reste affiché.

Pour recevoir une demande, ouvre **Profil → Paramètres de confidentialité → Demandes d’amis et coaching**. Active seulement les demandes que tu souhaites recevoir : amis et coaching se règlent séparément. Le classement reste facultatif. Chacun garde le contrôle sur ses programmes et séances partagés ; connaître son identifiant ne donne aucun accès supplémentaire.

Dans **Coaching → ton athlète → Propositions**, le coach peut choisir
**Retirer l’envoi** tant que la proposition est en attente. Pour un envoi entre
amis, ouvre le partage de programmes puis **Envoyés** et **Retirer l’envoi**.
Confirme le retrait : il ferme l’acceptation de cet envoi, sans supprimer une
copie déjà téléchargée ou acceptée ni modifier les séances.

Un programme réservé peut être partagé en coaching seulement lorsque les deux
comptes possèdent déjà l’accès. Le partage communautaire et l’envoi entre amis
restent fermés pour ces programmes.

En cas de refus, conserve le message affiché et vérifie le compte connecté ainsi que tes choix. Ne recrée pas de compte pour contourner le problème.

## 5. Si tu demandes la suppression du compte

Cette fonction ne sert pas à migrer de V6 à V7. Dans **Profil → Compte et récupération**, la demande de suppression retire le profil public et suspend les accès cloud. L’historique local reste sur le téléphone.

Une nouvelle connexion explicite avec ton mot de passe, ou avec un compte Google déjà lié à ce même compte Power, peut annuler la demande pendant **15 jours** suivant son enregistrement par le service. Si ta session est restée ouverte, utilise **Me reconnecter pour annuler la suppression**. Ouvrir simplement l’app n’annule pas la demande.

La date affichée permet de te repérer ; le temps du service fait foi. Après les 15 jours, l’annulation est fermée et la suppression définitive est traitée ensuite par l’éditeur, sans garantie à la minute près. Tu peux conserver un export privé de ton historique.
Cette mise à jour concerne Android uniquement. La bêta iPhone reste la bêta.1.
