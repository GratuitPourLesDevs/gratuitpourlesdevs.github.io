---
nom: Zoho Checkout
accroche: Pages de paiement hébergées pour paiements ponctuels et récurrents
type: SaaS
categorie: paiement-facturation
formule: 3 pages de paiement et jusqu’à 50 paiements au total pour un utilisateur
inclus:
  - Jusqu’à 3 pages de paiement selon la grille tarifaire actuelle
  - Jusqu’à 50 paiements au total
  - Un utilisateur
  - Paiements ponctuels et récurrents
  - Intégration Stripe sur le plan gratuit
  - Analyses de paiement
  - Notifications par e-mail
  - Relances automatiques des paiements
  - Chiffrement SSL
  - Pages de paiement hébergées par Zoho
conditions:
  - Compte Zoho Checkout
  - Compte Stripe pour encaisser les paiements sur le plan gratuit
  - Après l’essai initial le compte peut être converti en organisation gratuite
restrictions:
  - Le plafond de 50 paiements est global et ne se réinitialise pas chaque mois
  - Un seul utilisateur
  - Les intégrations de paiement supplémentaires nécessitent une formule payante
  - La documentation officielle comporte encore une page indiquant une seule page de paiement alors que la grille tarifaire actuelle en affiche trois
alertes:
  - type: fonctionnel
    niveau: important
    libelle: 50 paiements au total
    detail: Le quota gratuit de 50 paiements est un plafond à vie de l’organisation gratuite et ne se renouvelle pas mensuellement.
usages:
  - API
  - Intégration applicative
  - Automatisation
url: https://www.zoho.com/checkout/
documentation: https://www.zoho.com/checkout/help/
source: https://www.zoho.com/uk/checkout/pricing/
couleur: "#f0483e"
initiales: ZCO
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 72
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Zoho Checkout permet de créer rapidement des pages de paiement hébergées sans développer tout le parcours de facturation soi-même. La formule gratuite est intéressante pour un petit produit, un prototype commercial ou quelques premiers clients : elle gère les paiements ponctuels et récurrents avec Stripe. Son principal frein est que les cinquante paiements gratuits constituent un quota global et non un volume renouvelé chaque mois.
