---
nom: Zoho Mail
accroche: Hébergement de messagerie professionnelle sans publicité sur un domaine personnalisé
type: SaaS
categorie: email
formule: 5 utilisateurs, 5 Go par boîte mail et hébergement d’un domaine
inclus:
  - Jusqu’à 5 utilisateurs dans l’organisation
  - 5 Go de stockage de messagerie par utilisateur
  - Hébergement d’un domaine personnalisé
  - Accès depuis le webmail Zoho Mail
  - Expérience sans publicité
  - Console d’administration pour le domaine et les utilisateurs
conditions:
  - Compte Zoho Mail
  - Posséder un nom de domaine
  - Configurer les enregistrements DNS du domaine
  - Aucune carte bancaire
restrictions:
  - Un seul domaine hébergé
  - Maximum de 5 utilisateurs
  - Accès web uniquement
  - IMAP POP et ActiveSync non inclus
  - Transfert d’e-mails routage avancé SSO SAML et marque blanche réservés aux offres payantes
  - Offre gratuite disponible uniquement dans certains centres de données et certaines régions
  - Passage à une formule payante nécessaire à partir du sixième utilisateur
alertes:
  - type: fonctionnel
    niveau: critique
    libelle: Webmail uniquement
    detail: IMAP, POP et ActiveSync ne sont pas inclus dans le plan gratuit.
  - type: operationnel
    niveau: important
    libelle: Disponibilité régionale limitée
    detail: Le plan gratuit n’est proposé que dans certains centres de données et certaines régions.
usages:
  - Messagerie
  - Collaboration
  - Stockage
  - Applications web
url: https://www.zoho.com/mail/
documentation: https://www.zoho.com/mail/help/adminconsole/subscription.html
source: https://www.zoho.com/mail/zohomail-pricing.html
couleur: "#0f75bc"
initiales: ZM
carteRequise: false
permanent: true
statut: "active"
vedette: false
ordre: 60
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

Zoho Mail permet à une petite équipe d’utiliser des adresses professionnelles sur son propre domaine sans payer l’hébergement des boîtes mail. Le plan gratuit convient surtout aux structures qui travaillent dans le webmail Zoho : il évite l’administration d’un serveur de messagerie, mais ne permet pas de connecter les boîtes à un client externe via IMAP ou POP.
