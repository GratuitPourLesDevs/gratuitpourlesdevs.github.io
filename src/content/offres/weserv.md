---
nom: wsrv.nl (weserv)
accroche: Service gratuit et open source de cache, redimensionnement et transformation d’images à la volée via un CDN mondial.
type: API
categorie: cdn-protection
formule: Service public gratuit pour tous, avec limite anti-abus sur les requêtes non cachées
inclus:
- Redimensionnement et transformation à la volée
- Cache mondial Cloudflare
- JPEG, PNG, GIF, TIFF, WebP, PDF et SVG
- HTTPS
- Code open source BSD 3-Clause
conditions:
- Appeler le service via une URL wsrv.nl avec l’image source et les paramètres souhaités
restrictions:
- 2 500 images non cachées par tranche de 10 minutes et par IP
- Après dépassement, l’IP est bloquée pendant 1 heure
- Certaines origines sont filtrées pour prévenir les abus
- Service fourni en best effort sans SLA
alertes:
- type: usage
  niveau: important
  libelle: 2 500 images / 10 min
  detail: La limite anti-abus porte sur les requêtes d’images non cachées par IP ; au-delà de 2 500 en 10 minutes, l’adresse
    IP est bloquée pendant une heure.
usages:
- CDN
- Cache mondial
- Distribution de médias
- API
url: https://wsrv.nl/
source: https://wsrv.nl/faq/
couleur: '#00AEEF'
initiales: WS
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 813
verifieLe: 2026-08-24
verificationAutomatiqueLe: 2026-08-24
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
---

wsrv.nl (weserv) — Service gratuit et open source de cache, redimensionnement et transformation d’images à la volée via un CDN mondial.
