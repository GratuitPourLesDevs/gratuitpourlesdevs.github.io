---
nom: Go Report Card
accroche: Ancien service de notation de qualité pour projets Go, désormais arrêté
type: Ressource
categorie: qualite-code
formule: Service hébergé arrêté ; code source toujours disponible pour auto-hébergement
inclus:
- Analyse historique de projets Go
- Contrôles gofmt, go vet, ineffassign, complexité, licence et orthographe
- Code source du projet toujours disponible
conditions: []
restrictions:
- Le service hébergé Go Report Card a été officiellement arrêté
- Pour continuer, il faut utiliser golangci-lint ou auto-héberger le projet
alertes:
- type: operationnel
  niveau: critique
  libelle: Service hébergé arrêté
  detail: Les mainteneurs annoncent officiellement la fin de Go Report Card après plus de dix ans ; seule l’option d’auto-hébergement du code open source subsiste.
usages:
- Git
- Développement et test
url: https://goreportcard.com/
source: https://goreportcard.com/
couleur: '#00ADD8'
initiales: GR
carteRequise: false
depassementFacture: false
permanent: false
statut: obsolete
historique:
- date: '2026-08-18'
  type: statut
  titre: Service arrêté
  changements:
  - champ: statut
    avant: active
    apres: obsolete
    note: Fin officielle du service hébergé.
  source: https://goreportcard.com/
vedette: false
ordre: 378
verifieLe: '2026-08-18'
verificationAutomatiqueLe: '2026-08-18'
verificationNote: La page d’accueil annonce officiellement le sunset du service et recommande golangci-lint ou l’auto-hébergement.
---

Go Report Card a longtemps fourni une note de qualité aux projets Go publics. Le service hébergé a été arrêté et ne doit plus être présenté comme une offre gratuite active.
