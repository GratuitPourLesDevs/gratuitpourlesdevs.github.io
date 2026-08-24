---
nom: PythonAnywhere
accroche: Hébergement Python dans le navigateur avec consoles, fichiers et une application web gratuite sur sous-domaine PythonAnywhere.
type: PaaS
categorie: paas
formule: 'Beginner : 1 web app, 512 MB de fichiers, 2 consoles et 100 CPU-secondes/jour'
inclus:
- 1 application web sur your-username.pythonanywhere.com
- 1 worker web
- 512 MB de stockage privé
- 2 consoles Python/Bash
- 100 CPU-secondes par jour
- SSL gratuit
conditions:
- Le compte Beginner est destiné à l’exploration et aux petits projets
restrictions:
- Accès Internet sortant limité à une liste de sites autorisés
- Pas de SSH
- Pas de tâches planifiées pour les nouveaux comptes Free
- Pas de MySQL pour les comptes Free créés depuis le 15 janvier 2026 (8 janvier dans le système EU)
alertes:
- type: fonctionnel
  niveau: important
  libelle: MySQL retiré du Free
  detail: Les nouveaux comptes Beginner n’incluent plus MySQL depuis janvier 2026 ; cette possibilité ne subsiste que pour certains anciens comptes gratuits.
usages:
- Applications web
- Hébergement
- Développement et test
- Environnements de développement
url: https://www.pythonanywhere.com/
source: https://www.pythonanywhere.com/pricing/
couleur: '#3776AB'
initiales: PY
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 831
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

PythonAnywhere est une porte d’entrée très simple pour publier une application Python sans installer ni administrer de serveur : l’éditeur, les consoles, les fichiers et l’hébergement sont accessibles directement depuis le navigateur. Le compte Beginner permet de mettre en ligne une application sur un sous-domaine PythonAnywhere, avec 512 MB de fichiers, deux consoles et 100 CPU-secondes par jour, ce qui convient bien à l’apprentissage, aux petits outils Flask/Django et aux démonstrations. Le Free Tier est cependant devenu plus restrictif pour les nouveaux comptes : pas de SSH, accès Internet sortant filtré, plus de tâches planifiées gratuites et surtout plus de MySQL depuis janvier 2026. Il reste donc excellent pour débuter, mais moins adapté à une application dépendant de services externes ou d’une base relationnelle intégrée.
