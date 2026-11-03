# Passer de Power V6 à la bêta V7 sur iPhone

Cette procédure met à jour **Power déjà installée** vers **7.0.0-beta.1+71**,
pour tester la V7 avant sa version finale. Elle s'adresse aux utilisateurs V6 qui
passent déjà par **AltStore Classic / AltServer**. L'iPhone doit avoir **iOS 15 ou
plus récent**.

**Garde Power et AltStore installées : ne les supprime pas, ne les décharge pas et
ne désactive pas Power dans AltStore.** Conserve le **même compte Apple** que pour
la V6. Le compte Apple sert à signer l'app ; le compte Power sert à retrouver ton
identité et tes fonctions en ligne.

L'installation et la conservation des données de cette bêta restent à vérifier
sur un véritable iPhone testeur. La vérification du fichier IPA ne remplace pas
cet essai.

## 1. Vérifier que la V6 s'ouvre encore

Ouvre Power et vérifie que tes dernières séances sont présentes. Note ou prends
des captures de ton programme actif, de quelques séances et de leurs séries,
charges et répétitions, ainsi que de ton niveau, tes XP et tes trophées. Ce seront
tes points de comparaison après la mise à jour.

Si Power ou AltStore ne s'ouvre plus parce que sa signature a expiré, ouvre
**AltServer sur ton ordinateur**, branche et déverrouille l'iPhone, puis ouvre
**AltStore → My Apps → Refresh All**. Avec un compte Apple gratuit, les apps
doivent être renouvelées avant **sept jours**. Si AltStore elle-même a expiré,
réinstalle-la par AltServer **sans la supprimer auparavant**, avec le même compte
Apple. AltServer doit être joignable par USB ou sur le même Wi-Fi.
[Renouvellement AltStore](https://faq.altstore.io/altstore-classic/your-altstore),
[AltServer et app expirée](https://faq.altstore.io/altstore-classic/altserver).

## 2. Exporter une copie depuis la V6

Dans **Power V6.5.3**, le parcours est le suivant :

1. Ouvre l'onglet **Profil** (icône de personne dans la barre du bas).
2. Descends jusqu'à **GESTION**, puis touche **Exporter la base de données**.
3. Choisis **Base complète**, dont le sous-titre est
   **Export avec les performances et l'historique**.
4. Dans le sélecteur de dossiers iOS, choisis un dossier privé que tu retrouveras
   dans **Fichiers**. Privilégie un emplacement personnel en dehors du dossier de
   Power, par exemple dans ton iCloud Drive si tu l'utilises. Confirme le dossier
   avec le bouton proposé par iOS. Évite de modifier une séance pendant l'export.
5. Attends le message **Base exportée vers …**. Le fichier créé s'appelle
   **`power_backup_full_<date-et-heure>.zip`**.
6. Ouvre l'app **Fichiers**, retrouve ce ZIP dans le dossier choisi et vérifie
   qu'il n'est pas vide. Garde-le tel quel. Fais-en aussi une copie privée sur ton
   ordinateur, si possible. Si tu utilises iCloud Drive, attends la fin de son
   transfert avant de compter sur la copie distante.

Cet export V6 utilise directement un **choix de dossier** ; il n'ouvre pas une
feuille de partage dans Power. Si tu transfères ensuite le ZIP via une feuille
**Partager** d'iOS, l'action **Enregistrer dans Fichiers** permet d'en garder une
copie dans le dossier choisi. Vérifie toujours le fichier dans Fichiers après
l'opération. [Enregistrement d'un fichier partagé sur iPhone](https://support.apple.com/fr-fr/guide/iphone/iph831c37815/ios).

Ne choisis pas **Programmes uniquement**, **Musiques de performance uniquement**
ou **Exporter JSON** d'un programme pour protéger tout ton historique : ces
exports ne couvrent pas les mêmes données. Le ZIP V6 est une **copie
supplémentaire** ; à lui seul, il ne garantit pas la présence de toutes les
dernières modifications ni de tous les réglages et fichiers personnels. La copie
V7 et les contrôles de l'étape 4 restent nécessaires.

Si **Base complète** manque dans ta version, si l'export affiche **Export
impossible**, ou si tu ne retrouves pas le ZIP, garde la V6 installée et demande
de l'aide avant la mise à jour. Ne remplace pas cette étape par un simple export
de programme.

## 3. Installer la bêta par-dessus Power

1. Ouvre la [release officielle 7.0.0-beta.1+71](https://github.com/GabGaabS/power-releases/releases/tag/v7.0.0-beta.1%2B71).
   Dans ses fichiers, télécharge exactement
   **`Power-7.0.0-beta.1+71-ios-unsigned.ipa`** et son fichier **`.sha256`**.
   Un APK Android ne convient pas. Si tu vérifies le téléchargement sur ton
   ordinateur, compare son SHA-256 à celui du fichier `.sha256` de cette release.
2. Enregistre l'IPA dans **Fichiers**. Il est **NON SIGNÉ** : AltStore Classic /
   AltServer va le signer avec **ton propre compte Apple**, celui qui a servi à
   installer ta V6.
3. Laisse AltServer ouvert et joignable, puis utilise dans AltStore Classic le
   parcours d'import d'IPA employé pour ta V6 : dans **My Apps**, le bouton **+**
   permet, sur les versions qui l'affichent, de sélectionner l'IPA dans Fichiers.
   Si ce bouton ou ce parcours n'est pas disponible dans ta version, demande de
   l'aide en gardant Power installée.
4. Attends la fin de la signature et de l'installation, puis vérifie que **Power
   existante a été mise à jour** dans My Apps. Son identifiant d'origine reste
   **`com.gab.power.power`** ; garde la même identité d'installation AltStore.

N'active pas l'option expérimentale **Randomize Bundle IDs** d'AltStore pour cette
mise à jour : elle change l'identité de l'app. Si elle est déjà active, demande de
l'aide avant de changer les réglages ou d'installer la bêta.
[Option documentée par AltStore](https://github.com/altstoreio/FAQ/blob/main/release-notes/altstore.md).

Si l'installation demande de supprimer Power, si une deuxième Power apparaît,
ou si AltStore signale une autre identité, arrête et garde les apps et copies en
place. Une erreur de signature ou une limite d'applications ne se résout pas en
supprimant Power. Essaie d'abord l'USB en cas de problème de connexion et consulte
le [dépannage officiel AltStore](https://faq.altstore.io/altstore-classic/troubleshooting-guide).

## 4. Garder la copie V7 et vérifier les données avant de relier le compte

1. Ouvre Power après la mise à jour et laisse se terminer la préparation de la
   copie locale. L'entraînement reste enregistré sur cet iPhone.
2. Va dans **Profil → Compte et récupération**. La section **Copie locale avant
   migration** affiche les nombres de **programmes, séances et séries**. Note-les.
3. Touche **Exporter la copie avant migration**. Dans le sélecteur
   d'enregistrement iOS, garde le nom **`Power-avant-migration.zip`**, choisis un
   dossier privé dans Fichiers en dehors de Power, puis valide l'enregistrement
   (bouton **Enregistrer**, selon la version d'iOS). Ce parcours enregistre un
   fichier ; il ne demande pas de partager publiquement ta sauvegarde.
4. Attends le message **Copie exportée. Garde-la dans un emplacement privé…**,
   puis ouvre **Fichiers** pour vérifier que le nouveau ZIP est bien présent et
   non vide. Conserve séparément ce ZIP et celui de V6, avec une copie sur ton
   ordinateur si possible. Si une ancienne copie du même nom existe, garde-la
   aussi en donnant un autre nom à la nouvelle ou en choisissant un autre dossier.
5. Compare tes données avec les notes/captures de V6 : programme actif, séances
   récentes, séries, charges, répétitions, niveau, XP, trophées et réglages utiles.
   Vérifie en particulier tes dernières séances réellement terminées.

Utilise bien **Exporter la copie avant migration** : le bouton **Exporter mes
données locales avant migration** est un autre export, limité à un fichier
d'historique **`.sqlite`**.

La copie V7 ZIP contient l'historique et les réglages de récupération. Elle ne
transfère pas à elle seule la connexion, les droits du compte, les clés de messages
ni les fichiers audio et photos. Conserve leurs originaux sur l'appareil. Une
ancienne image de programme dont le fichier a disparu devra être rechoisie.

**N'importe aucun ZIP pour une mise à jour normale : les données existantes
doivent rester dans Power.** Si la copie ne peut pas être préparée/exportée, si
l'historique paraît vide ou si les valeurs diffèrent, arrête avant de relier un
compte. Garde Power et les copies ; relève seulement le message affiché et les
données manquantes pour demander de l'aide.

## 5. Retrouver son compte Power et tester la bêta

Après ces contrôles, reste dans **Profil → Compte et récupération** :

- Si tu n'avais pas encore de connexion Power par e-mail, utilise **Créer un
  compte**, puis **Créer et relier mon compte**, avec ton propre e-mail.
- Si tu possèdes déjà une connexion Power, utilise **Connexion**, puis
  **Récupérer mon compte historique** lorsque ce bouton est proposé.
- Si ton compte a déjà été lié mais paraît encore anonyme sur ce téléphone,
  utilise **Actualiser un compte déjà lié**, si ce bouton est proposé.

Saisis toi-même tes identifiants Power. Complète ta date de naissance et lis les
conditions si l'app le demande, puis valide-les seulement si tu les acceptes.
Choisis séparément les statistiques que tu souhaites partager et Analytics.
En cas de conflit d'identité, ne crée pas un autre compte pour contourner le
message ; conserve l'app et les copies. Ne transmets aucun mot de passe Apple ou
Power, code de connexion, jeton ou ZIP privé.

Vérifie une nouvelle fois ton historique après connexion. Pour tester avant la
V7 finale, contrôle ensuite l'ouverture de tes programmes, l'historique d'un
exercice, la sauvegarde habituelle d'une séance et la relance de l'app sans
connexion Internet. Note le résultat réel de chaque essai. **Les annonces
publicitaires éditeur sont désactivées dans cette bêta sur iPhone.** L'essai vidéo
prépare et compresse localement le fichier ; aucun envoi au coach ou stockage vidéo
cloud n'est activé dans ce lot.

Continue à renouveler Power et AltStore avant sept jours avec ton compte Apple
gratuit. Pour signaler un problème, indique la version Power, le modèle d'iPhone,
la version iOS, ce que tu as fait et le message affiché, sans publier ta sauvegarde.
