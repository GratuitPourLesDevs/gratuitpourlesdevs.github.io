---
nom: AutoLocalise
accroche: Localisation à la volée pour applications web et mobiles sans gérer manuellement les fichiers de traduction
type: SaaS
categorie: traductions
formule: 'Free : 10 000 caractères comptabilisés par mois, 1 projet et plus de 100 langues'
inclus:
- 10 000 caractères par mois
- 1 projet
- Édition en direct des traductions
- Plus de 100 langues
- SDKs Next.js, React Native, Expo, Python, Django, Flask et FastAPI
conditions:
- Le comptage multiplie les caractères source par le nombre de langues cibles
- Les chaînes persistées sont recomptées à chaque cycle de facturation
restrictions:
- Le quota de 10 000 caractères inclut l’effet multiplicateur des langues cibles
- Le plan gratuit est limité à 1 projet
alertes:
- type: usage
  niveau: important
  libelle: Quota multiplié par langue
  detail: 5 000 caractères source traduits vers 2 langues consomment 10 000 caractères de quota.
usages:
- Traduction
- Applications web
- Mobile
- Développement et test
url: https://www.autolocalise.com/
documentation: https://www.autolocalise.com/docs
source: https://www.autolocalise.com/
couleur: '#7C3AED'
initiales: AL
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 550
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

AutoLocalise évite de maintenir à la main une multitude de fichiers de traduction : ses SDKs récupèrent et localisent le contenu de l’application pendant le développement ou l’exécution. Le Free est adapté à un prototype ou à une petite application avec 10 000 caractères comptabilisés par mois et un seul projet. Le point à surveiller est le mode de calcul : le volume source est multiplié par le nombre de langues cibles, ce qui peut consommer rapidement le quota.
