---
nom: Qoddi
accroche: PaaS managé avec déploiement Git ; son palier gratuit actuel est centré sur les sites statiques.
type: PaaS
categorie: paas
formule: 'Free : 3 sites statiques, 512 Mo de RAM chacun et bande passante illimitée'
inclus:
- 3 sites statiques gratuits
- 512 Mo de RAM
- CPU partagé
- Déploiement depuis Git
- Bande passante illimitée
- Membres d’équipe illimités
conditions:
- Une carte bancaire ou un mécanisme de vérification éligible est requis pour créer des ressources Free
restrictions:
- Le Free actuel est réservé aux sites statiques
- Pas de domaine personnalisé sur le palier gratuit
- Les applications dynamiques et datastores utilisent des instances payantes
alertes:
- type: finance
  niveau: important
  libelle: Carte requise
  detail: Le compte standard doit être vérifié avec un moyen de paiement avant de pouvoir créer les ressources gratuites.
usages:
- Hébergement statique
- Déploiement cloud
- Git
- Bande passante
url: https://qoddi.com/
source: https://qoddi.com/pricing/
couleur: '#111827'
initiales: QD
carteRequise: true
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 881
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Qoddi peut servir de point de déploiement simple pour plusieurs frontends statiques lorsque l’on veut rester dans un environnement PaaS capable d’évoluer ensuite vers du compute payant. Les trois sites gratuits, Git et la bande passante illimitée suffisent pour des vitrines, documentations ou frontends séparés. Le Free est aujourd’hui plus étroit que les anciennes descriptions du service, car il ne couvre plus un backend dynamique généraliste. Il faut également accepter la vérification du compte par moyen de paiement avant de créer les ressources gratuites.
