# Installer Power sur iPhone avec AltServer

La version iPhone de Power s'installe avec **AltStore Classic**, accompagné
d'**AltServer sur ton PC**. Un compte Apple personnel suffit pour ce parcours.
L'application nécessite **iOS 15 ou plus récent**.

Le fichier Power se termine par **`-ios-unsigned.ipa`**. AltStore le signe pour
ton iPhone pendant l'installation ; ce fichier ne s'installe pas directement
en le touchant dans Fichiers. Choisis **AltStore Classic** pour importer un IPA.

## 1. Préparer AltServer sur Windows

1. Suis le [guide officiel d'installation Windows](https://faq.altstore.io/altstore-classic/how-to-install-altstore-windows)
   pour installer les versions d'iTunes et d'iCloud indiquées, puis AltServer.
2. Branche l'iPhone, déverrouille-le et accepte **Faire confiance** si demandé.
3. Active la synchronisation Wi-Fi de l'iPhone dans iTunes.
4. Dans l'icône AltServer près de l'horloge Windows, choisis **Install AltStore**,
   puis ton iPhone. Renseigne ton compte Apple dans AltServer lorsqu'il le demande.
5. Sur l'iPhone, approuve le profil dans **Réglages → Général → VPN et gestion
   de l'appareil**. Le nom exact du menu peut varier selon iOS.
6. À partir d'iOS 16, active aussi **Réglages → Confidentialité et sécurité →
   Mode développeur**, puis suis les indications du téléphone.

## 2. Installer Power

1. Ouvre la [dernière release Power](https://github.com/GabGaabS/power-releases/releases/latest)
   sur l'iPhone et télécharge le fichier **`Power-…-ios-unsigned.ipa`**.
2. Enregistre-le dans l'application **Fichiers**.
3. Garde AltServer ouvert sur le PC. Connecte l'iPhone en USB ou place les deux
   appareils sur le même réseau Wi-Fi.
4. Ouvre **AltStore → My Apps → +**, puis sélectionne le fichier Power téléchargé.
5. Termine le parcours proposé par AltStore. Power apparaît ensuite sur l'écran
   d'accueil de l'iPhone.

Tes identifiants Apple se saisissent dans AltServer/AltStore. Ne les ajoute pas
à un message, une issue GitHub ou un fichier Power.

## 3. Garder Power utilisable

Avec un compte Apple gratuit, les applications installées par AltStore expirent
après **sept jours**. Dans **My Apps**, utilise **Refresh All** avant l'expiration,
avec AltServer ouvert et joignable par Wi-Fi ou USB. AltStore peut aussi tenter
ce renouvellement en arrière-plan.

Apple limite également le nombre d'applications actives installées de cette
façon. Si AltStore signale une limite atteinte, consulte son
[guide des applications actives](https://faq.altstore.io/altstore-classic/activating-apps).
Les règles de renouvellement sont expliquées dans le
[guide AltStore](https://faq.altstore.io/altstore-classic/your-altstore).

## Mettre Power à jour

Télécharge le nouvel IPA et réinstalle-le avec **le même compte Apple et la même
méthode AltStore**, par-dessus Power. Fais une sauvegarde depuis l'application
avant la mise à jour et conserve l'app installée : la désinstaller effacerait
ses données locales.

À partir de Power **6.5.2**, l'app peut aussi t'avertir d'une nouvelle version
iPhone et afficher ses nouveautés. Le nouveau fichier s'importe ensuite dans
AltStore. Les [releases](https://github.com/GabGaabS/power-releases/releases)
restent accessibles à tout moment.

La compilation de l'IPA ne remplace pas un essai sur ton iPhone. Si une étape
échoue, relève le message affiché et [signale-le ici](https://github.com/GabGaabS/power-releases/issues/new),
avec le modèle d'iPhone et la version iOS, sans identifiants personnels.

