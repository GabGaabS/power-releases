# Mettre Ã  jour Power vers la bÃªta V7 sur Android

La **7.0.0-beta.14+84 est disponible** pour les utilisateurs de Power V6 et des bÃªtas V7 prÃ©cÃ©dentes.
Elle permet de tester la V7 ensemble avant sa version finale. Elle met Ã  jour
Power directement et reprend automatiquement les donnÃ©es du tÃ©lÃ©phone.
**Ne dÃ©sinstalle pas Power et nâ€™efface pas ses donnÃ©es.**

Le suivi local reste utilisable sans compte. Les fonctions en ligne sont rÃ©servÃ©es
aux personnes de **15 ans et plus en France**, avec attestation dans lâ€™app.
Une ancienne date de naissance valide peut Ãªtre conservÃ©e ; aucun nouveau
formulaire ne demande de date de naissance.

Le dÃ©marrage ne demande pas de compte. Les fonctions en ligne inaccessibles
sont grisÃ©es et expliquent comment crÃ©er, connecter ou complÃ©ter ton compte ;
tu peux continuer Ã  utiliser les entraÃ®nements locaux.

Lâ€™APK se tÃ©lÃ©charge manuellement depuis GitHub. La mise Ã  jour intÃ©grÃ©e a Ã©tÃ©
retirÃ©e ; elle ne sert plus Ã  rÃ©cupÃ©rer ni Ã  installer les versions suivantes.

TÃ©lÃ©charge [lâ€™APK Android de cette bÃªta](https://github.com/GabGaabS/power-releases/releases/download/v7.0.0-beta.14%2B84/Power-7.0.0-beta.14%2B84-android.apk)
ou retrouve-le sur [la page de la bÃªta](https://github.com/GabGaabS/power-releases/releases/tag/v7.0.0-beta.14%2B84).
Le fichier sâ€™appelle `Power-7.0.0-beta.14+84-android.apk` et conserve la signature
habituelle de Power. Son empreinte SHA-256 est :
`262f2e7d8fc78d051b176e0c081f733a52232363e3f5b7f9915f93bf19899df2`.

## NouveautÃ©s de la bÃªta.14

- Conversations plus lisibles : messages du contact Ã  gauche, les tiens Ã  droite,
  avec le nom#tag du contact ou son pseudo et lâ€™heure lorsquâ€™elle est disponible.
- **Voir la sÃ©ance** retrouve sa place sur le Tableau : lâ€™aperÃ§u ne lance pas le
  chrono et ne crÃ©e pas de sÃ©ance.
- Pour terminer une sÃ©ance, fais glisser le curseur depuis sa position de dÃ©part
  jusquâ€™Ã  au moins **70 %**, puis relÃ¢che. Un appui au bout de la barre ne valide
  plus la sÃ©ance. Au clavier ou avec un lecteur dâ€™Ã©cran, une confirmation est demandÃ©e.
- Le coaching sâ€™ouvre sur **Suivi**, avant **Programmes** et **Propositions**.
- Connexion facultative Ã  **Samsung Health / Health Connect** : export des
  nouvelles sÃ©ances et import du poids sur demande, dÃ©sactivÃ©s au dÃ©part.
- Les annonces de maintenance peuvent apparaÃ®tre dans le Tableau. Elles restent
  repliables et nâ€™empÃªchent pas lâ€™entraÃ®nement local.

Cette version conserve les alertes dans lâ€™app et nâ€™ajoute pas de notification
Android lorsque Power est fermÃ©. Lâ€™Ã©change rÃ©el avec Samsung Health nâ€™a pas
encore Ã©tÃ© essayÃ© sur tÃ©lÃ©phone ; voir les essais facultatifs ci-dessous.

## 1. Exporter ses donnÃ©es avant la mise Ã  jour

### Si tu es encore sous V6

1. Dans la version de **Power actuellement installÃ©e**, ouvre lâ€™onglet **Profil**, puis descends jusquâ€™Ã  **GESTION**.
2. Appuie sur **Exporter la base de donnÃ©es**, puis sur **Base complÃ¨te**
   (Â« Export avec les performances et lâ€™historique Â»).
3. Si Android demande une autorisation de stockage pour cet export, autorise
   Power puis reviens dans lâ€™app. Dans le choix de dossier, sÃ©lectionne un
   dossier personnel que tu retrouveras dans lâ€™app **Fichiers**, par exemple
   un dossier de sauvegardes dans Documents, puis valide le choix du dossier.
4. Attends le message **Base exportÃ©e versâ€¦**. Dans **Fichiers**, ouvre le dossier
   choisi et vÃ©rifie la prÃ©sence de `power_backup_full_<date-et-heure>.zip`.
   Garde ce ZIP et tes anciennes sauvegardes. Fais aussi une copie hors du
   tÃ©lÃ©phone, par exemple sur ton ordinateur personnel par USB. Tu peux utiliser
   le partage de lâ€™app Fichiers vers un stockage privÃ©. VÃ©rifie que ta copie reste
   accessible hors de Power.
5. Note ton programme actif et vÃ©rifie quelques sÃ©ances rÃ©centes et anciennes,
   avec leurs sÃ©ries et charges, ainsi que tes XP et trophÃ©es. Cela permettra de
   comparer aprÃ¨s la mise Ã  jour.

Choisis bien **Base complÃ¨te** : lâ€™export JSON dâ€™un programme seul ne sauvegarde
pas ton historique. Cette copie est une prÃ©caution supplÃ©mentaire ; conserve
surtout lâ€™app et ses donnÃ©es sur le tÃ©lÃ©phone. Si lâ€™export Ã©choue ou que cette
option manque, garde tout en place et demande de lâ€™aide Ã  GabGaabS avant la mise
Ã  jour. Ne publie aucun ZIP dans GitHub ou une discussion publique.

### Si tu utilises dÃ©jÃ  une bÃªta V7

1. Ouvre **Profil â†’ DonnÃ©es locales Â· exporter ou importer**, puis appuie sur **Exporter mon historique local**. Lâ€™export fonctionne hors ligne et sans compte pour un historique invitÃ©. Pour un espace dÃ©jÃ  liÃ©, garde le compte propriÃ©taire prÃ©sent sur ce tÃ©lÃ©phone.
2. Dans lâ€™Ã©cran dâ€™enregistrement Android, conserve le nom **Power-historique.sqlite**, choisis un dossier privÃ© et valide lâ€™enregistrement. Annuler cette fenÃªtre ne crÃ©e pas de copie.
3. VÃ©rifie le fichier dans **Fichiers**, puis copie-le hors du tÃ©lÃ©phone, par exemple sur ton ordinateur personnel par USB. Conserve aussi tes anciennes copies V6 et V7.
4. Note ton programme actif et vÃ©rifie quelques sÃ©ances, sÃ©ries, charges, XP et trophÃ©es pour les comparer aprÃ¨s la mise Ã  jour.

Cette copie contient la base dâ€™entraÃ®nement, y compris ses blocs et sÃ©ances ; elle ne sauvegarde pas les photos, les fichiers audio, les rÃ©glages de lâ€™app, la connexion ou les clÃ©s de messagerie. Un export JSON de programme ou CSV/JSON de statistiques ne remplace pas cette copie. Si tu nâ€™es plus connectÃ© au compte liÃ©, reconnecte-toi Ã  ce mÃªme compte avant lâ€™export. Si tu ne peux pas le faire, conserve lâ€™app et ses donnÃ©es et contacte GabGaabS avant la mise Ã  jour.

## 2. Installer la bÃªta et exporter la copie V7

Si ton compte a dÃ©jÃ  Ã©tÃ© migrÃ© dans une bÃªta V7, conserve ce compte et
ne recommence pas sa crÃ©ation ou sa liaison. AprÃ¨s les Ã©tapes 1 et 2, vÃ©rifie
lâ€™historique et passe aux essais de la section 3. Les Ã©tapes 3 et 4 concernent
les utilisateurs qui prÃ©parent encore leur migration depuis V6.

1. Ouvre `Power-7.0.0-beta.14+84-android.apk` et choisis **Mettre Ã  jour**.
   Si Android demande de dÃ©sinstaller Power ou signale un conflit, arrÃªte ici
   et contacte GabGaabS. Ne force pas lâ€™installation en supprimant lâ€™app.
2. Ouvre Power et attends la prÃ©paration de la copie locale. **Tu nâ€™as pas Ã 
   importer manuellement ton ZIP V6** : la mise Ã  jour conserve les donnÃ©es
   existantes sur place.
3. Avant de crÃ©er ou relier un compte, ouvre **Profil â†’ Compte et rÃ©cupÃ©ration**.
   Dans **Copie locale avant migration**, vÃ©rifie les nombres de programmes,
   sÃ©ances et sÃ©ries, puis appuie sur **Exporter la copie avant migration**.
4. Dans lâ€™Ã©cran dâ€™enregistrement Android, conserve le nom
   **Power-avant-migration.zip**, choisis un dossier privÃ© et valide
   lâ€™enregistrement. VÃ©rifie ensuite le fichier dans **Fichiers** et copie-le
   aussi hors du tÃ©lÃ©phone. Annuler le choix dâ€™emplacement nâ€™exporte pas le ZIP.
   Garde cette deuxiÃ¨me copie avec celle de V6. Elle contient lâ€™historique et
   les rÃ©glages ; elle ne transfÃ¨re pas Ã  elle seule le compte, la connexion,
   les fichiers audio ou les clÃ©s de messagerie.
5. Compare les mÃªmes programmes, sÃ©ances, sÃ©ries, charges, XP et trophÃ©es quâ€™en
   V6. Sâ€™ils semblent manquer ou diffÃ©rer, ne poursuis pas les changements de
   compte : conserve lâ€™app et les deux ZIP et signale le problÃ¨me Ã  GabGaabS.

## 3. PrÃ©parer ton compte, puis tester

La connexion Google est proposÃ©e sur Android ; la connexion par e-mail reste disponible. **Si tu as dÃ©jÃ  un compte Power par e-mail, garde ce compte connectÃ©** : ouvre **Profil â†’ Compte et rÃ©cupÃ©ration â†’ Lier mon compte Google**, confirme ton mot de passe actuel, puis choisis un compte Google qui tâ€™appartient. Google devient un autre moyen dâ€™accÃ©der au mÃªme compte Power, mÃªme si les adresses e-mail diffÃ¨rent ; ton historique et tes rÃ©glages sont conservÃ©s. Une annulation ne change pas ton compte. Si le Google choisi est dÃ©jÃ  utilisÃ© par un autre compte Power, la liaison est refusÃ©e : choisis un autre Google, sans recrÃ©er de compte ni contourner le message.

Si tu dÃ©couvres Power sans compte ni historique existant, le suivi local reste accessible sans connexion. Pour crÃ©er un compte, ouvre **CrÃ©er un compte** et choisis la crÃ©ation par e-mail ou **CrÃ©er mon compte avec Google**. Pour retrouver un compte Power dÃ©jÃ  liÃ© Ã  Google, utilise **Continuer avec Google** avec ce mÃªme Google. Les nouveaux comptes ne sont plus crÃ©Ã©s anonymement en arriÃ¨re-plan ; les anciennes identitÃ©s sont conservÃ©es pour leur rÃ©cupÃ©ration.

Si tu utilises dÃ©jÃ  la bÃªta V7 avec ton compte migrÃ©, conserve cette connexion.
La prÃ©paration ci-dessous concerne les comptes qui nâ€™ont pas encore Ã©tÃ© migrÃ©s.

Si ton compte V6 Ã©tait anonyme, ouvre **CrÃ©er un compte** depuis ce tÃ©lÃ©phone.
Saisis toi-mÃªme ton adresse, ton mot de passe et les informations demandÃ©es,
puis choisis **CrÃ©er et sauvegarder mon historique** ou **CrÃ©er sans sauvegarde**.
Cette crÃ©ation relie le compte encore prÃ©sent sur ce tÃ©lÃ©phone. VÃ©rifie ensuite
lâ€™e-mail. Si tu avais dÃ©jÃ  le compte e-mail associÃ© Ã  cet
historique, choisis **Connexion â†’ RÃ©cupÃ©rer mon compte historique**.
**Actualiser un compte dÃ©jÃ  liÃ©** sert au compte encore prÃ©sent sur le tÃ©lÃ©phone.
En cas de conflit, garde lâ€™app et ses copies : ne crÃ©e pas un autre compte pour
contourner lâ€™erreur. Confirme toi-mÃªme lâ€™attestation dâ€™Ã¢ge demandÃ©e. Lis les
conditions et valide-les si tu les acceptes.
Ne communique aucun mot de passe, code ou lien de rÃ©cupÃ©ration.

En cas de difficultÃ© de connexion, le lien **Besoin dâ€™aide ? Contacter le support** ouvre ton application de messagerie. Ne communique aucun mot de passe, code ou lien de rÃ©cupÃ©ration.

Choisis ensuite tes autorisations dans le Profil : classements, demandes
dâ€™amis/coach, sauvegarde privÃ©e en ligne, Analytics et annonces. Analytics reste
dÃ©sactivÃ© avant ton accord. Le Tableau ne propose plus de carte Analytics ; ce choix reste dans
**Profil â†’ ParamÃ¨tres de confidentialitÃ©**. Un accord ou un refus enregistrÃ© est
conservÃ© aprÃ¨s une mise Ã  jour. Le suivi local reste disponible sans compte, publicitÃ© ou Analytics.
La banniÃ¨re est fermable ; une vidÃ©o publicitaire choisie
peut donner 24 heures sans banniÃ¨re. Google peut ne pas diffuser dâ€™annonce.
Ces choix se rÃ¨glent dans **Profil â†’ ParamÃ¨tres de confidentialitÃ©**.

Ã€ la crÃ©ation par e-mail, **CrÃ©er et sauvegarder mon historique** demande une
premiÃ¨re sauvegarde privÃ©e en ligne. **CrÃ©er sans sauvegarde** crÃ©e le compte sans
la demander. Pour une crÃ©ation avec Google, un dialogue prÃ©sente ces deux choix
avant le sÃ©lecteur Google. Ce choix est facultatif ; les connexions Ã  des comptes
existants et les refus prÃ©cÃ©dents nâ€™activent jamais cette sauvegarde Ã  ta place.

La premiÃ¨re copie attend la vÃ©rification de lâ€™adresse e-mail, un compte Ã©ligible
et une connexion au service. Si tu reÃ§ois un e-mail de vÃ©rification, confirme son
lien puis reviens dans Power pour laisser la prÃ©paration reprendre. Une panne peut retarder
lâ€™envoi ; les entraÃ®nements locaux restent utilisables.

Il sâ€™agit dâ€™**une seule copie initiale**, pas dâ€™une synchronisation continue de
chaque sÃ©rie. Elle peut contenir les programmes, sÃ©ances, sÃ©ries, charges, RPE/e1RM,
poids corporels et rÃ©visions, envoyÃ©s Ã  Google pour une restauration. Mots de
passe, jetons, photos, fichiers audio et clÃ©s de messagerie sont exclus. Conserve
tes exports privÃ©s V6/V7 : cette copie ne les remplace pas.

Pour ce test avant la V7 finale :

- Lance une sÃ©ance Ã  rÃ©aliser : le chrono dÃ©marre Ã  son ouverture et continue
  pendant le repos ou lorsque Power passe en arriÃ¨re-plan. Ã€ la validation, la
  durÃ©e est enregistrÃ©e. Dans **Calendrier**, ouvre la journÃ©e terminÃ©e : la carte
  prÃ©sente la durÃ©e, les sÃ©ries et les rÃ©pÃ©titions ; dÃ©plie le rÃ©capitulatif pour
  retrouver les charges et RPE par exercice. Les anciennes sÃ©ances sans chrono
  gardent une durÃ©e inconnue. Revoir ou corriger une sÃ©ance terminÃ©e ne relance
  pas son chrono.

- Sur le Tableau, vÃ©rifie la prochaine sÃ©ance et les actions **DÃ©marrer aujourdâ€™hui**,
  **Voir la sÃ©ance**, **Ouvrir le calendrier** et le lien **Voir le programme**.
  Ouvre **Voir la sÃ©ance** pour lire les exercices sans lancer le chrono, puis
  reviens au Tableau. Une sÃ©ance dÃ©jÃ  commencÃ©e propose **Reprendre la sÃ©ance**.
- Sur une sÃ©ance dâ€™essai que tu souhaites terminer, glisse le curseur depuis le
  dÃ©but jusquâ€™Ã  au moins 70 %, puis relÃ¢che. Un simple appui sur la fin de la
  barre ou un geste trop court doit laisser la sÃ©ance ouverte.

- Ferme puis rouvre Power sans rÃ©seau et vÃ©rifie ton historique, puis rÃ©tablis
  la connexion. Le suivi sportif local reste utilisable sans serveur.
- Teste lâ€™icÃ´ne dâ€™historique Ã  droite du nom dâ€™un exercice et les fonctions
  sociales avec les autres testeurs, selon vos autorisations.
- Pour le premier message privÃ©, les deux personnes ouvrent une fois cette
  version de Power et connectent leur compte Ã©ligible. Lâ€™app prÃ©pare alors les
  clÃ©s sans ouvrir un chat. Le destinataire nâ€™a ensuite pas besoin dâ€™ouvrir la
  conversation avant que lâ€™autre personne lui envoie un message. VÃ©rifie que
  son nom#tag ou son pseudo apparaÃ®t, que ses messages sont Ã  gauche et les tiens
  Ã  droite. Aucun accusÃ© de lecture distant nâ€™est ajoutÃ©.
- Pour une image personnelle, utilise un programme dâ€™essai, choisis une image,
  puis ferme et rouvre lâ€™app. Une ancienne image perdue du cache doit Ãªtre
  rechoisie ; un ZIP de base de donnÃ©es ne sauvegarde pas toutes les photos.
- Lâ€™envoi de vidÃ©os au coach ou dans le chat reste reportÃ© ; cette bÃªta nâ€™ajoute
  aucun bouton dâ€™envoi vidÃ©o.

### Essayer Samsung Health / Health Connect, si tu le souhaites

Dans **Profil â†’ Samsung Health / Health Connect**, les deux choix sont sÃ©parÃ©s
et dÃ©sactivÃ©s au dÃ©part. Aucun compte Power nâ€™est nÃ©cessaire. Lâ€™app prÃ©sente
les donnÃ©es concernÃ©es avant la demande dâ€™autorisation Android. Si Health Connect
est indisponible sur ton appareil, les entraÃ®nements locaux restent utilisables.

1. Dans Samsung Health, autorise aussi les Ã©changes avec Health Connect pour les
   donnÃ©es que tu veux retrouver. Lâ€™emplacement dÃ©pend de ta version de Samsung Health.
2. Pour les sÃ©ances, active **Exporter les nouvelles sÃ©ances**, lis lâ€™explication,
   puis autorise lâ€™Ã©criture des exercices dans le formulaire Android. AprÃ¨s cet
   accord, termine une nouvelle sÃ©ance avec un chrono dans Power. Lâ€™export porte
   sur la date, les vrais horaires, la durÃ©e et la discipline, sous le titre
   **SÃ©ance Power**. Les anciennes sÃ©ances ne sont pas reprises automatiquement ;
   aucun nom de programme, sÃ©rie, charge, RPE, calorie ou mesure cardiaque nâ€™est envoyÃ©.
3. Pour le poids, active sÃ©parÃ©ment **Autoriser lâ€™import du poids**, puis autorise
   sa lecture dans le formulaire Android. Appuie ensuite sur **Importer les poids** :
   ce bouton importe les mesures disponibles des **30 derniers jours**, depuis
   les applications autorisÃ©es dans Health Connect. Lâ€™import ne tourne pas en
   arriÃ¨re-plan ; les saisies dÃ©jÃ  prÃ©sentes au mÃªme instant sont conservÃ©es.
4. VÃ©rifie lâ€™historique du poids dans Power et les sÃ©ances dans Health Connect,
   puis dans Samsung Health. Les poids importÃ©s pourront Ãªtre inclus dans tes
   exports et sauvegardes privÃ©es dÃ©jÃ  activÃ©s. Ils ne sont pas ajoutÃ©s Ã  Analytics
   ou Ã  la publicitÃ© par cette connexion.
5. Tu peux arrÃªter chaque Ã©change dans cet Ã©cran ou retirer ses autorisations
   dans Health Connect. Cela ne supprime pas les copies dÃ©jÃ  importÃ©es ou exportÃ©es.

Le parcours rÃ©el Power â†’ Health Connect â†’ Samsung Health et les formulaires
Android nâ€™ont pas encore Ã©tÃ© essayÃ©s sur tÃ©lÃ©phone. Signale le rÃ©sultat et ta
version dâ€™Android sans publier tes donnÃ©es de santÃ©.

Indique Ã  GabGaabS la version installÃ©e, si tes donnÃ©es sont conservÃ©es et le
message dâ€™erreur Ã©ventuel. Masque les informations personnelles sur les captures
et garde les archives en privÃ©. La migration se fait sur chaque tÃ©lÃ©phone :
le serveur ne possÃ¨de pas toutes les sÃ©ances et sÃ©ries locales.

## 4. Amis, coaching et confidentialitÃ©

### Retrouver les nouveautÃ©s

La cloche **Notifications**, dans le Tableau et dans Potes, regroupe les messages
privÃ©s et les nouveautÃ©s du coaching : programmes proposÃ©s, rÃ©ponses et demandes
dâ€™ajustement, sÃ©ances partagÃ©es et commentaires du coach. Un badge dans Potes
indique les Ã©lÃ©ments non lus. Appuie sur une alerte pour ouvrir lâ€™Ã©change ou la
sÃ©ance correspondante ; **Marquer ces nouveautÃ©s comme lues** concerne les
nouveautÃ©s actuellement affichÃ©es. Le statut lu est conservÃ© sur ce tÃ©lÃ©phone.

Chaque coach et athlÃ¨te doit installer cette mise Ã  jour pour que ses nouveaux
Ã©changes produisent les alertes. Les anciens Ã©changes ne sont pas tous annoncÃ©s
rÃ©troactivement. Les alertes apparaissent pendant lâ€™utilisation de Power avec du
rÃ©seau ou Ã  la prochaine ouverture connectÃ©e. Cette version ne comporte pas de
notification systÃ¨me lorsque lâ€™app est fermÃ©e.

Une sÃ©ance doit Ãªtre partagÃ©e via le suivi autorisÃ© par lâ€™athlÃ¨te pour que le
coach en soit averti. Un entraÃ®nement enregistrÃ© hors ligne sera transmis lors
de la reprise du partage en ligne ; sa sauvegarde locale reste indÃ©pendante.
Lâ€™alerte nâ€™affiche pas le contenu des messages, programmes ou commentaires.

Dans **Profil â†’ Mon nom#tag**, affiche ton identifiant court et copie-le. Partage lâ€™identifiant complet avec lâ€™autre testeur, qui doit aussi utiliser cette bÃªta. Dans **Potes â†’ DÃ©couvrir** ou **Coaching â†’ Inviter**, il peut saisir cet identifiant au lieu du long numÃ©ro de compte. Les anciens identifiants restent acceptÃ©s.

Les demandes de coaching reÃ§ues sont visibles dans **Potes â†’ cloche Notifications**,
avec un compteur de demandes non lues. Appuie sur une demande pour lâ€™accepter ou
la refuser. Lâ€™Ã©cran Coaching distingue aussi les demandes reÃ§ues des relations
et des invitations envoyÃ©es. Les contacts affichent leur nom#tag lorsquâ€™il a Ã©tÃ©
crÃ©Ã© ; Ã  dÃ©faut, leur pseudo reste affichÃ©.

Pour recevoir une demande, ouvre **Profil â†’ ParamÃ¨tres de confidentialitÃ© â†’ Demandes dâ€™amis et coaching**. Active seulement les demandes que tu souhaites recevoir : amis et coaching se rÃ¨glent sÃ©parÃ©ment. Le classement reste facultatif. Chacun garde le contrÃ´le sur ses programmes et sÃ©ances partagÃ©s ; connaÃ®tre son identifiant ne donne aucun accÃ¨s supplÃ©mentaire.

Dans **Coaching â†’ ton athlÃ¨te â†’ Propositions**, le coach peut choisir
**Retirer lâ€™envoi** tant que la proposition est en attente. Pour un envoi entre
amis, ouvre le partage de programmes puis **EnvoyÃ©s** et **Retirer lâ€™envoi**.
Confirme le retrait : il ferme lâ€™acceptation de cet envoi, sans supprimer une
copie dÃ©jÃ  tÃ©lÃ©chargÃ©e ou acceptÃ©e ni modifier les sÃ©ances.

Un programme rÃ©servÃ© peut Ãªtre partagÃ© en coaching seulement lorsque les deux
comptes possÃ¨dent dÃ©jÃ  lâ€™accÃ¨s. Le partage communautaire et lâ€™envoi entre amis
restent fermÃ©s pour ces programmes.

### Activer le suivi des sÃ©ances avec son coach

Les deux personnes doivent installer cette bÃªta. Quand lâ€™athlÃ¨te **accepte son
coach**, depuis Coaching ou la demande ouverte dans la cloche, Power propose
directement **Activer mon suivi** ou **Plus tard** en expliquant les donnÃ©es
partagÃ©es. Accepter le coaching et partager le suivi restent deux choix distincts.
Choisir **Plus tard** ou fermer le dialogue avant dâ€™appuyer sur **Activer mon suivi**
conserve le coaching acceptÃ© sans activer le suivi. AprÃ¨s cet appui, fermer la
fenÃªtre nâ€™annule pas la demande en cours. Si lâ€™activation Ã©choue, le dialogue permet de rÃ©essayer ; le coaching reste
acceptÃ©. Le coach ne peut jamais consentir Ã  la place de lâ€™athlÃ¨te.

Pour une relation dÃ©jÃ  active, ou si le coach a acceptÃ© une demande initiÃ©e par
lâ€™athlÃ¨te, lâ€™activation reste disponible dans la relation. Lâ€™athlÃ¨te ouvre Power sur le
tÃ©lÃ©phone qui contient ses entraÃ®nements, avec son compte habituel et une
connexion au rÃ©seau. Il ouvre **Potes â†’ Coaching** (icÃ´ne en haut), choisit son
coach, puis **Suivi â†’ Activer mon suivi**. Le dialogue prÃ©cise les donnÃ©es
partagÃ©es ; il faut confirmer **Activer mon suivi** pour ce coach. Une ancienne
relation de coaching demande aussi cet accord. Le coach ne peut pas lâ€™activer
Ã  la place de lâ€™athlÃ¨te.

Le suivi inclut les **sÃ©ances terminÃ©es** depuis le dÃ©but du coaching, y compris
celles du dÃ©but du bloc qui Ã©tait en cours Ã  cette date, puis les blocs suivants.
Les blocs ont leurs propres dates et restent distincts lorsquâ€™un mÃªme programme
est recommencÃ©. Les limites des anciens blocs peuvent Ãªtre reconstituÃ©es
approximativement et sont signalÃ©es comme telles. La mise Ã  jour conserve les
sÃ©ances, sÃ©ries, charges, XP et trophÃ©es ; garde aussi tes anciennes sauvegardes.
Une sauvegarde dâ€™une ancienne version reste importable. Un export crÃ©Ã© aprÃ¨s
cette mise Ã  jour doit Ãªtre restaurÃ© dans cette version ou une version ultÃ©rieure.

Pour consulter le suivi, le coach ouvre **Potes â†’ Coaching â†’ son athlÃ¨te** :
**Suivi** est le premier onglet et sâ€™ouvre directement. Choisis ensuite un bloc ;
**SÃ©ances** montre les dates et le dÃ©tail de chaque sÃ©ance.
**Ã‰volution** permet de choisir un exercice et de comparer RPE, nombre de sÃ©ries,
rÃ©pÃ©titions et charge. **Valeurs par sÃ©ance** donne les dates et chiffres exacts.
Un RPE non renseignÃ© reste absent et une charge externe de 0 kg reste valide.
Les boutons de chargement donnent accÃ¨s aux blocs et sÃ©ances plus anciens ; les
courbes indiquent quand la liste affichÃ©e est encore partielle.

Ouvre une sÃ©ance datÃ©e pour **Commenter la sÃ©ance**, ou **Commenter la sÃ©rie N**
pour une consigne ciblÃ©e. Le coach peut modifier son commentaire ; les deux
personnes peuvent le lire. Le nom du coach, lâ€™exercice et la sÃ©rie sont mieux
sÃ©parÃ©s ; le drapeau permet de signaler un commentaire.

CÃ´tÃ© athlÃ¨te, le titre devient **Ma sÃ©ance**. Appuie sur **RÃ©pondre** sous le
commentaire pour ouvrir le chat du coach. Le brouillon rappelle la sÃ©ance,
lâ€™exercice ou la sÃ©rie et cite le commentaire ; ajoute ta rÃ©ponse puis appuie
sur **Envoyer**. Ce contexte est visible aussi par le coach et envoyÃ© dans le
mÃªme message chiffrÃ©. Rien nâ€™est envoyÃ© automatiquement. Une trÃ¨s longue citation
peut Ãªtre raccourcie pour laisser de la place Ã  ta rÃ©ponse. Si un brouillon est
dÃ©jÃ  prÃ©sent, lâ€™app te propose de le garder ou dâ€™y ajouter le contexte.

Les nouveaux entraÃ®nements sont envoyÃ©s lorsque lâ€™athlÃ¨te utilise Power avec une
connexion. **Actualiser mon suivi** permet de relancer lâ€™envoi ; une panne ne
bloque jamais lâ€™enregistrement local. Le compte en ligne ne remplace pas
lâ€™historique conservÃ© sur le tÃ©lÃ©phone. Lâ€™athlÃ¨te peut **ArrÃªter le partage** dans
ce mÃªme onglet. Lâ€™arrÃªt bloque les nouveaux envois sur cet appareil ; si le
serveur ne le confirme pas, lâ€™app lâ€™indique et les copies en ligne peuvent encore
Ãªtre visibles. Un arrÃªt confirmÃ© ferme lâ€™accÃ¨s au suivi, sans effacer les copies
que le coach aurait dÃ©jÃ  conservÃ©es. Les blocs rÃ©servÃ©s restent soumis aux droits
des deux comptes et un bloc indisponible est signalÃ© comme suivi partiel.

En cas de refus, conserve le message affichÃ© et vÃ©rifie le compte connectÃ© ainsi que tes choix. Ne recrÃ©e pas de compte pour contourner le problÃ¨me.

## 5. Restaurer un fichier ou retrouver une copie en ligne

Une mise Ã  jour conserve dÃ©jÃ  les donnÃ©es : nâ€™importe pas une copie aprÃ¨s chaque
installation. Si tu dois restaurer un historique, exporte dâ€™abord lâ€™historique
actuel et conserve ce fichier Ã  part.

Dans **Profil â†’ DonnÃ©es locales Â· exporter ou importer**, choisis **Importer un
historique depuis un fichier**, puis lis la confirmation. Les formats acceptÃ©s
sont `.sqlite`, `.db` et les archives `.zip` Power ; les exports JSON de programme
et CSV/JSON de statistiques ne sont pas des sauvegardes de lâ€™historique. Choisis
une copie qui tâ€™appartient, lis le bilan, puis **Continuer** pour redÃ©marrer sur la
copie restaurÃ©e. Lâ€™ancien espace local et le fichier source restent conservÃ©s.

La restauration dâ€™un fichier nÃ©cessite un compte Power liÃ© Ã  cet espace. Elle
fonctionne hors ligne si ce propriÃ©taire et son Ã©ligibilitÃ© ont dÃ©jÃ  Ã©tÃ© validÃ©s
sur ce tÃ©lÃ©phone et que sa session est toujours prÃ©sente. Sans compte liÃ©, lâ€™app
lâ€™explique et propose de crÃ©er un compte ou de se reconnecter ; lâ€™export et
lâ€™entraÃ®nement local restent accessibles. Une suppression en attente empÃªche
la restauration avec ce compte.

Un fichier choisi manuellement ne prouve pas ses rÃ©compenses : ses Ã©vÃ©nements XP
ne sont pas rÃ©activÃ©s, et il ne transfÃ¨re ni identitÃ© ni droits du compte. Un ZIP
avant migration peut reprendre ses rÃ©glages portables en gardant les partages et
statistiques dÃ©sactivÃ©s. La restauration de rÃ©compenses fiables est rÃ©servÃ©e Ã 
une copie privÃ©e en ligne authentifiÃ©e pour son propriÃ©taire.

Le lien **Mes sauvegardes privÃ©es en ligne** ouvre le parcours sÃ©parÃ© du compte,
qui nÃ©cessite une connexion. La copie SQLite actuelle est limitÃ©e Ã  16 Mio et une
archive de migration Ã  20 Mio. Les photos et sons personnels ne sont pas inclus.
Les copies des versions prÃ©cÃ©dentes restent rÃ©cupÃ©rables. Les nouveaux exports
conservent les durÃ©es lorsquâ€™elles existent : restaure-les avec la bÃªta.12 ou une
version ultÃ©rieure compatible. Ne publie aucun fichier SQLite ou ZIP.

## 6. Si tu demandes la suppression du compte

Cette fonction ne sert pas Ã  migrer de V6 Ã  V7. Dans **Profil â†’ Compte et rÃ©cupÃ©ration**, la demande de suppression retire le profil public et suspend les accÃ¨s cloud. Lâ€™historique local reste sur le tÃ©lÃ©phone.

Une nouvelle connexion explicite avec ton mot de passe, ou avec un compte Google dÃ©jÃ  liÃ© Ã  ce mÃªme compte Power, peut annuler la demande pendant **15 jours** suivant son enregistrement par le service. Si ta session est restÃ©e ouverte, utilise **Me reconnecter pour annuler la suppression**. Ouvrir simplement lâ€™app nâ€™annule pas la demande.

La date affichÃ©e permet de te repÃ©rer ; le temps du service fait foi. AprÃ¨s les 15 jours, lâ€™annulation est fermÃ©e et la suppression dÃ©finitive est traitÃ©e ensuite par lâ€™Ã©diteur, sans garantie Ã  la minute prÃ¨s. Tu peux conserver un export privÃ© de ton historique.
Cette mise Ã  jour concerne Android uniquement. La bÃªta iPhone reste la bÃªta.1.
