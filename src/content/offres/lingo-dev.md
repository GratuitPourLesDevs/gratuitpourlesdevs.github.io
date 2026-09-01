---
nom: Lingo.dev
accroche: Outils open source de localisation pour CLI et CI/CD avec moteurs de traduction et possibilité d’utiliser son propre LLM
type: Ressource
categorie: traductions
formule: CLI et outils open source Apache-2.0 ; utilisation possible avec son propre LLM sans authentification Lingo.dev
inclus:
- CLI open source pour JSON, YAML, Markdown, CSV et PO
- Intégrations GitHub Actions, GitLab CI/CD et Bitbucket Pipelines
- Possibilité d’utiliser son propre fournisseur LLM
- Glossaires, instructions et suivi des contenus selon le moteur utilisé
conditions:
- Avec un LLM externe, fournir sa propre clé API et assumer les coûts du fournisseur choisi
restrictions:
- L’ancien quota de 10 000 mots gratuits par mois n’est plus la tarification actuelle
- Le Sandbox Lingo.dev a un prix de base de 0 $, mais les moteurs, le LLM et l’infrastructure sont facturés à l’usage
- Le CLI actuel orienté moteurs diffère de l’ancien workflow local direct
alertes:
- type: finance
  niveau: important
  libelle: Usage IA potentiellement payant
  detail: Le CLI est open source, mais les appels à un LLM externe ou au moteur managé Lingo.dev peuvent générer des coûts.
- type: fonctionnel
  niveau: important
  libelle: Ancien quota supprimé
  detail: La référence historique à 10 000 mots gratuits/mois ne correspond plus au pricing 2026.
usages:
- Traduction
- CI/CD
- Git
- Applications web
- Mobile
url: https://lingo.dev/
documentation: https://lingo.dev/en/docs/cli
source: https://github.com/lingodotdev/lingo.dev
couleur: '#111827'
initiales: LD
carteRequise: false
depassementFacture: true
permanent: true
statut: "active"
vedette: false
ordre: 553
verifieLe: '2026-08-19'
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel."
verificationEtat: "controle_requis"
verificationCode: "gratuit_non_detecte"
verificationEchecsConsecutifs: 2
---

Lingo.dev apporte une approche très orientée développeur : son CLI et ses outils CI/CD automatisent la localisation des fichiers du projet et peuvent fonctionner avec un LLM que vous fournissez vous-même. Le code est open source sous Apache-2.0, ce qui rend l’outillage gratuit, mais il ne faut plus présenter l’ancien quota de 10 000 mots/mois comme un Free Tier actuel. Les traductions utilisant un fournisseur IA externe ou le moteur managé peuvent générer des coûts.
