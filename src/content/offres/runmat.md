---
nom: "RunMat"
accroche: "Runtime numérique compatible avec la syntaxe MATLAB, accéléré par GPU et utilisable dans le navigateur sans compte."
type: "Ressource"
categorie: ide-edition-code
formule: "Free Forever : runtime open source, CLI et sandbox navigateur sans frais de licence"
inclus:
- "Syntaxe de fichiers .m compatible MATLAB"
- "Accélération WebGPU"
- "Sandbox navigateur"
- "CLI et package NPM"
- "Kernel Jupyter"
- "Runtime open source"
- "Aucun compte requis pour le runtime et le sandbox"
conditions:
- "Navigateur compatible WebAssembly/WebGPU pour l’accélération matérielle"
restrictions:
- "Les projets persistants, collaboration et historique avancé peuvent relever d’offres payantes"
- "La compatibilité MATLAB n’implique pas la présence de toutes les toolboxes propriétaires MathWorks"
alertes:
- type: fonctionnel
  niveau: important
  libelle: "Compatibilité, pas MATLAB"
  detail: "RunMat exécute une syntaxe de type MATLAB avec son propre runtime ; il ne fournit pas les toolboxes propriétaires ni une licence MATLAB."
usages: ["Data science", "Développement et test", "Notebooks Jupyter"]
url: https://runmat.com/sandbox
source: https://runmat.com/pricing
couleur: "#111827"
initiales: "RM"
carteRequise: false
depassementFacture: false
permanent: true
statut: "active"
vedette: false
ordre: 1147
verifieLe: 2026-09-01
verificationAutomatiqueLe: 2026-09-01
verificationNote: "Source tarifaire accessible et mention d’une formule gratuite détectée."
verificationEtat: "confirmee"
verificationCode: "gratuit_detecte"
verificationEchecsConsecutifs: 0
---

RunMat vise les calculs numériques en syntaxe .m sans imposer de licence MATLAB. Le runtime, le CLI et le sandbox web sont gratuits ; l’accélération GPU s’appuie sur les capacités locales du navigateur.
