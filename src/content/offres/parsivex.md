---
nom: Parsivex
accroche: Analyse des gaspillages de coûts AWS avec un scan gratuit ponctuel
type: SaaS
categorie: gestion-cloud
formule: 1 scan complet gratuit pour 1 compte AWS, sans carte bancaire
inclus:
  - 1 scan complet des gaspillages AWS
  - Analyse multi-région
  - 1 compte AWS
  - 1 espace de travail
  - 1 siège d’équipe
  - Estimation du gaspillage mensuel total
  - Nombre de findings et répartition par catégorie
conditions:
  - Compte Parsivex
  - Compte AWS à analyser
  - Autoriser Parsivex à lire les ressources nécessaires au diagnostic
  - Aucune carte bancaire requise
restrictions:
  - Le scan gratuit est ponctuel et ne se renouvelle pas automatiquement
  - Les rescans récurrents ou automatisés sont réservés aux plans payants
  - La liste détaillée complète des findings est réservée aux plans payants
  - Les scripts de remédiation sont réservés aux plans payants
  - Les alertes e-mail de nouveau gaspillage sont réservées aux plans payants
  - Les alertes d’anomalie de coûts et Slack sont réservées aux plans supérieurs
  - L’export PDF et le partage public de rapports sont réservés aux plans supérieurs
alertes:
  - type: usage
    niveau: important
    libelle: Un seul scan gratuit
    detail: Le plan Free Scan fournit un diagnostic ponctuel. Les rescans récurrents et automatisés nécessitent une formule payante.
  - type: fonctionnel
    niveau: important
    libelle: Findings détaillés non inclus
    detail: Le gratuit fournit le nombre de findings et leur répartition par catégorie, mais pas la liste détaillée ressource par ressource.
usages:
  - Gestion d’infrastructure
  - Architecture cloud
  - Automatisation
url: https://www.parsivex.com/
source: https://www.parsivex.com/pricing
couleur: "#334155"
initiales: PX
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 80
verifieLe: 2026-08-31
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
historique:
  - date: 2026-08-17
    type: correction
    titre: Free Scan confirmé sur la tarification officielle
    resume: Le statut passe à actif et le quota est corrigé d’un scan mensuel annoncé vers un scan gratuit ponctuel.
    changements:
      - champ: statut
        avant: À vérifier
        apres: Actif
      - champ: quota de scans
        avant: 1 scan mensuel annoncé
        apres: 1 scan gratuit au total
        note: La carte tarifaire indique explicitement « One-time full AWS waste scan » et les rescans automatisés sont réservés aux plans payants.
    source: https://www.parsivex.com/pricing
verificationAutomatiqueLe: 2026-08-31
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

Parsivex analyse un compte AWS pour repérer des sources potentielles de gaspillage de coûts et fournir une estimation du montant mensuel concerné. Le plan Free Scan permet d’effectuer un diagnostic complet et multi-région d’un compte AWS sans carte bancaire, avec un résumé du nombre de findings et leur répartition par catégorie. Il s’agit toutefois d’un scan ponctuel : les rescans automatisés, la liste détaillée des ressources concernées, les scripts de remédiation et les alertes nécessitent une formule payante.
