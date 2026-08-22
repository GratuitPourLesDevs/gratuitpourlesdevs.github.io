import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OFFERS_DIR = path.join(ROOT, 'src/content/offres');
const DATA_DIR = path.join(ROOT, 'src/data');

const read = (p) => fs.readFileSync(p, 'utf8');
const normalize = (s) => s.replace(/\s+/g, ' ').trim();
const stripMarkdown = (s) => normalize(
  s.replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>|]/g, ' ')
);

function parseFrontmatterAndBody(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { frontmatter: '', body: stripMarkdown(content) };
  return { frontmatter: match[1], body: stripMarkdown(match[2]) };
}

function scalar(frontmatter, key) {
  const m = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!m) return '';
  return m[1].trim().replace(/^['"]|['"]$/g, '');
}

function parseEditorialMap(file) {
  const src = read(path.join(DATA_DIR, file));
  const out = new Map();
  const re = /^\s*(?:'([^']+)'|([A-Za-z0-9_-]+)):\s*"((?:[^"\\]|\\.)*)",?\s*$/gm;
  for (const m of src.matchAll(re)) {
    const id = m[1] ?? m[2];
    let value = m[3];
    try { value = JSON.parse(`"${value}"`); } catch { /* keep raw */ }
    out.set(id, value);
  }
  return out;
}

function parseGeneratedIds() {
  const src = read(path.join(DATA_DIR, 'offer-editorial.ts'));
  const block = src.match(/GENERATED_EDITORIAL_OFFER_IDS\s*=\s*new Set<string>\(\[([\s\S]*?)\]\);/);
  if (!block) return new Set();
  return new Set([...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]));
}

const custom = new Map([
  ...parseEditorialMap('project-management-editorials.ts'),
  ...parseEditorialMap('storage-media-editorials.ts'),
]);
const genericIds = parseGeneratedIds();

const contextRe = /\b(lorsqu|quand|pour (?:un|une|les|des)|par exemple|afin de|dans (?:un|une|le|la|les)|si l[’']on|si vous|au moment de|pendant|avant de|après)\b/i;
const benefitRe = /\b(évite|éviter|simplif|réduit|réduire|gagn|accél|facilit|automat|centralis|sécuris|protèg|protéger|remplac|économis|dispense|permet de|aide à|rend .* plus|sans devoir|sans avoir à)\b/i;
const explanatoryRe = /\b(utile|permet|aide|sert|pratique|convient|facilite|simplifie|évite|réduit|automatise|centralise|accélère|sécurise|protège|remplace)\b/i;
const bulkGenericRe = /(reste intéressant pour le développement, les tests ou les petits usages|Le référentiel historique le présente avec|La fiche est donc marquée « à vérifier » afin de conserver cette ressource)/i;

function words(text) {
  return new Set((text.toLocaleLowerCase('fr-FR').match(/[\p{L}\p{N}]{4,}/gu) ?? []).filter((w) => !['avec','dans','pour','sans','plus','cette','comme','entre','service','gratuit','offre'].includes(w)));
}

function overlap(a, b) {
  const aw = words(a), bw = words(b);
  if (!aw.size || !bw.size) return 0;
  let common = 0;
  for (const w of aw) if (bw.has(w)) common++;
  return common / Math.min(aw.size, bw.size);
}

function auditText(text, accroche, source) {
  const reasons = [];
  const clean = normalize(text);
  const sentences = clean.split(/(?<=[.!?])\s+/).filter((s) => s.length >= 25);
  if (source === 'generic-generated') reasons.push('génération mécanique à remplacer par un vrai cas d’usage');
  if (clean.length < 170) reasons.push(`texte trop court (${clean.length} caractères)`);
  if (sentences.length < 2) reasons.push(`moins de 2 phrases explicatives (${sentences.length})`);
  if (!contextRe.test(clean)) reasons.push('pas de situation ou cas d’usage concret détecté');
  if (!benefitRe.test(clean)) reasons.push('bénéfice concret insuffisamment explicité');
  if (!explanatoryRe.test(clean)) reasons.push('formulation principalement descriptive');
  if (bulkGenericRe.test(clean)) reasons.push('texte issu d’un ancien gabarit générique');
  const similarity = overlap(clean, accroche);
  if (similarity >= 0.72 && clean.length < 320) reasons.push(`trop proche de l’accroche (${Math.round(similarity * 100)} % de recouvrement lexical)`);
  return { ok: reasons.length === 0, reasons, length: clean.length, sentences: sentences.length, text: clean };
}

const files = fs.readdirSync(OFFERS_DIR).filter((f) => f.endsWith('.md')).sort();
const results = [];
for (const file of files) {
  const id = file.slice(0, -3);
  const content = read(path.join(OFFERS_DIR, file));
  const { frontmatter, body } = parseFrontmatterAndBody(content);
  const nom = scalar(frontmatter, 'nom') || id;
  const accroche = scalar(frontmatter, 'accroche');
  const statut = scalar(frontmatter, 'statut');
  let source = 'markdown';
  let text = body;
  if (custom.has(id)) {
    source = 'custom';
    text = custom.get(id);
  } else if (genericIds.has(id)) {
    source = 'generic-generated';
    // Le rendu exact est mécanique et basé sur les champs structurés : on le classe volontairement à reprendre.
    text = body;
  }
  const audit = auditText(text, accroche, source);
  results.push({ id, nom, statut, source, ...audit });
}

const failing = results.filter((r) => !r.ok);
const bySource = Object.fromEntries(['custom','generic-generated','markdown'].map((source) => [source, {
  total: results.filter((r) => r.source === source).length,
  aCorriger: failing.filter((r) => r.source === source).length,
}]));
const reasonCounts = {};
for (const row of failing) for (const reason of row.reasons) reasonCounts[reason] = (reasonCounts[reason] ?? 0) + 1;

const report = {
  generatedAt: new Date().toISOString(),
  totalOffers: results.length,
  conformes: results.length - failing.length,
  aCorriger: failing.length,
  bySource,
  reasonCounts,
  failing: failing.map(({ id, nom, statut, source, reasons, length, sentences }) => ({ id, nom, statut, source, reasons, length, sentences })),
};

fs.mkdirSync(path.join(ROOT, '.tmp'), { recursive: true });
fs.writeFileSync(path.join(ROOT, '.tmp/editorial-audit.json'), JSON.stringify(report, null, 2));
console.log(`AUDIT_TOTAL=${report.totalOffers}`);
console.log(`AUDIT_OK=${report.conformes}`);
console.log(`AUDIT_FIX=${report.aCorriger}`);
console.log(`AUDIT_BY_SOURCE=${JSON.stringify(report.bySource)}`);
console.log('AUDIT_REASON_COUNTS=' + JSON.stringify(report.reasonCounts));
console.log('AUDIT_FAILING_IDS=' + failing.map((r) => r.id).join(','));
