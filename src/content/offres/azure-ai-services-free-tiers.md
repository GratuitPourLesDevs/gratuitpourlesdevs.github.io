---
nom: Azure AI Services — niveaux F0
accroche: API gratuites de vision, langage, traduction, parole et analyse faciale
type: PaaS
categorie: api-donnees-ml
formule: Quotas mensuels gratuits pour Vision, Face, Translator, Speech et Language
inclus: [5 000 transactions Azure Vision par mois, 30 000 transactions Face par mois, Deux millions de caractères Translator par mois, Cinq heures de transcription Speech to Text par mois, Cinq heures de traduction vocale par mois, 500 000 caractères de synthèse vocale neuronale par mois, 5 000 enregistrements texte Azure Language par mois, Analyse des sentiments entités mots-clés résumé et détection de langue, OCR balisage détection d’objets et analyse d’images, Une caméra Spatial Analysis gratuite par mois]
conditions: [Compte Microsoft, Abonnement Azure actif, Moyen de paiement configuré, Création d’une ressource mono-service avec le niveau Free ou F0, Une ressource gratuite par type et par abonnement, Région Azure compatible avec le service choisi]
restrictions: [Les quotas sont indépendants et ne constituent pas une enveloppe commune, La ressource multi-service Azure AI peut ne proposer que le niveau payant S0, Dépassements généralement bloqués ou nécessitant un passage au niveau payant, Limites de débit propres à chaque API, Certaines fonctions Face et Speaker Recognition nécessitent une demande d’accès, Les enregistrements Language sont comptés par tranches de 1 000 caractères, Les appels Vision multi-fonctions peuvent compter plusieurs transactions, Les fonctions de question-réponse peuvent créer une ressource Azure AI Search facturable]
usages: [Vision par ordinateur, Traitement du langage, Traduction, Reconnaissance vocale]
url: https://azure.microsoft.com/en-us/products/ai-services/
documentation: https://learn.microsoft.com/en-us/azure/ai-services/what-are-ai-services
source: https://azure.microsoft.com/en-us/pricing/free-services/
couleur: "#0078d4"
initiales: AI
carteRequise: true
permanent: true
statut: active
vedette: false
ordre: 44
verifieLe: 2026-08-14
verificationAutomatiqueLe: 2026-08-14
verificationNote: "Les pages Microsoft confirment des niveaux F0 permanents distincts : 5 000 transactions Vision, 30 000 transactions Face, deux millions de caractères Translator, cinq heures Speech to Text et 5 000 enregistrements Language par mois."
---

Anciennement regroupées sous le nom Cognitive Services, ces API sont désormais présentées comme Azure AI Services ou Foundry Tools. Elles permettent d’ajouter rapidement OCR, analyse d’images, traduction, transcription, synthèse vocale et traitement du langage à une application. Chaque service doit être créé avec son propre niveau F0 et possède sa définition de transaction, ses limites de débit et ses conditions d’accès.
