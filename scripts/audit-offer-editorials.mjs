import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OFFERS_DIR = path.join(ROOT, 'src/content/offres');
const DATA_DIR = path.join(ROOT, 'src/data');
const read = (p) => fs.readFileSync(p, 'utf8');
const normalize = (s) => s.replace(/\s+/g, ' ').trim();

function parseFrontmatterAndBody(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { frontmatter: '', body: normalize(content) };
  return { frontmatter: match[1], body: normalize(match[2].replace(/[`*_~>|]/g, ' ')) };
}

function scalar(frontmatter, key) {
  const m = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : '';
}

function parseEditorialMap(file) {
  const src = read(path.join(DATA_DIR, file));
  const out = new Map();
  const re = /^\s*"([^"]+)":\s*"((?:[^"\\]|\\.)*)",?\s*$|^\s*'([^']+)':\s*"((?:[^"\\]|\\.)*)",?\s*$|^\s*([A-Za-z0-9_-]+):\s*"((?:[^"\\]|\\.)*)",?\s*$/gm;
  for (const m of src.matchAll(re)) {
    const id = m[1] ?? m[3] ?? m[5];
    const raw = m[2] ?? m[4] ?? m[6];
    let value = raw;
    try { value = JSON.parse(`"${raw}"`); } catch {}
    out.set(id, value);
  }
  return out;
}

const custom = new Map([
  ...parseEditorialMap('project-management-editorials.ts'),
  ...parseEditorialMap('storage-media-editorials.ts'),
  ...parseEditorialMap('audited-offer-editorials.ts'),
]);

const contextRe = /\b(lorsqu|quand|pour\b|par exemple|afin de|dans\b|si l[’']on|si vous|projet|équipe|développeur|freelance|application|site|api|backend|frontend|infrastructure)\b/i;
const benefitRe = /\b(évite|simplif|réduit|gagn|accél|facilit|automat|centralis|sécuris|protèg|remplac|économis|permet|aide|sans\b|utile|intéressant|pertinent|amélior|optimis|délègue|rapidement)\b/i;
const explanatoryRe = /\b(utile|permet|aide|sert|pratique|convient|facilite|simplifie|évite|réduit|automatise|centralise|accélère|sécurise|protège|remplace|intéressant|pertinent)\b/i;
const bulkGenericRe = /(reste intéressant pour le développement, les tests ou les petits usages|Le référentiel historique le présente avec|La fiche est donc marquée « à vérifier » afin de conserver cette ressource)/i;

function auditMarkdown(text, accroche) {
  const clean = normalize(text);
  const sentences = clean.split(/(?<=[.!?])\s+/).filter((s) => s.length >= 25);
  let score = 0;
  const reasons = [];
  if (clean.length >= 170) score += 2; else if (clean.length >= 130) score += 1; else reasons.push('texte trop court');
  if (sentences.length >= 2) score += 2; else reasons.push('moins de 2 phrases explicatives');
  if (contextRe.test(clean)) score += 1; else reasons.push('pas de cas d’usage concret détecté');
  if (benefitRe.test(clean)) score += 1; else reasons.push('bénéfice concret insuffisant');
  if (explanatoryRe.test(clean)) score += 1; else reasons.push('formulation principalement descriptive');
  if (bulkGenericRe.test(clean)) { score -= 3; reasons.push('ancien gabarit générique'); }
  const keyWords = (s) => new Set((s.toLocaleLowerCase('fr-FR').match(/[\p{L}\p{N}]{4,}/gu) ?? []).filter((w) => !['avec','dans','pour','sans','plus','cette','comme','service','gratuit','offre'].includes(w)));
  const a = keyWords(clean), b = keyWords(accroche);
  let common = 0; for (const w of a) if (b.has(w)) common++;
  const overlap = Math.min(a.size, b.size) ? common / Math.min(a.size, b.size) : 0;
  if (overlap >= .9 && clean.length < 300) { score -= 2; reasons.push('quasi-répétition de l’accroche'); }
  return { ok: score >= 5 && !bulkGenericRe.test(clean), reasons, length: clean.length, sentences: sentences.length, score };
}

const results = [];
for (const file of fs.readdirSync(OFFERS_DIR).filter((f) => f.endsWith('.md')).sort()) {
  const id = file.slice(0, -3);
  const { frontmatter, body } = parseFrontmatterAndBody(read(path.join(OFFERS_DIR, file)));
  const nom = scalar(frontmatter, 'nom') || id;
  const accroche = scalar(frontmatter, 'accroche');
  const statut = scalar(frontmatter, 'statut');
  if (custom.has(id)) {
    const text = custom.get(id);
    const sentences = normalize(text).split(/(?<=[.!?])\s+/).filter(Boolean);
    const ok = text.length >= 170 && sentences.length >= 2 && sentences.length <= 4;
    results.push({ id, nom, statut, source: 'custom', ok, reasons: ok ? [] : ['éditorial dédié hors format'], length: text.length, sentences: sentences.length });
  } else {
    results.push({ id, nom, statut, source: 'markdown', ...auditMarkdown(body, accroche) });
  }
}

const failing = results.filter((r) => !r.ok);
const bySource = Object.fromEntries(['custom','markdown'].map((source) => [source, { total: results.filter((r) => r.source === source).length, aCorriger: failing.filter((r) => r.source === source).length }]));
const report = { generatedAt: new Date().toISOString(), totalOffers: results.length, conformes: results.length - failing.length, aCorriger: failing.length, bySource, failing };
fs.mkdirSync(path.join(ROOT, '.tmp'), { recursive: true });
fs.writeFileSync(path.join(ROOT, '.tmp/editorial-audit.json'), JSON.stringify(report, null, 2));
console.log(`AUDIT_TOTAL=${report.totalOffers}`);
console.log(`AUDIT_OK=${report.conformes}`);
console.log(`AUDIT_FIX=${report.aCorriger}`);
console.log(`AUDIT_BY_SOURCE=${JSON.stringify(report.bySource)}`);
console.log('AUDIT_FAILING_IDS=' + failing.map((r) => r.id).join(','));
