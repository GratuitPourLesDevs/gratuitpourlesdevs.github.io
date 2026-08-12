import { readdir, readFile, writeFile, appendFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const offersDirectory = new URL('../src/content/offres/', import.meta.url);
const dryRun = process.argv.includes('--dry-run');
const today = new Date().toISOString().slice(0, 10);
const freeEvidence = /\bfree(?: tier| plan| forever)?\b|gratuit|always[- ]free|\$\s*0\b|0\s*(?:€|eur|usd|\/\s*mois|\/\s*month)/i;

function frontmatterValue(document, field) {
  const match = document.match(new RegExp(`^${field}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return '';
  const value = match[1].trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function setFrontmatterValue(document, field, value) {
  const rendered = typeof value === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(value)
    ? JSON.stringify(value)
    : String(value);
  const line = `${field}: ${rendered}`;
  const pattern = new RegExp(`^${field}:.*$`, 'm');
  if (pattern.test(document)) return document.replace(pattern, line);
  const closing = document.indexOf('\n---', 3);
  if (closing === -1) throw new Error('Frontmatter invalide');
  return `${document.slice(0, closing)}\n${line}${document.slice(closing)}`;
}

async function inspect(url) {
  if (!url) return { kind: 'missing', detail: 'URL absente' };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'GratuitPourLesDevs-OfferVerifier/1.0 (+https://gratuitpourlesdevs.fr)' },
    });
    if (response.status === 404 || response.status === 410) {
      return { kind: 'gone', detail: `HTTP ${response.status}` };
    }
    if (!response.ok) return { kind: 'blocked', detail: `HTTP ${response.status}` };
    const body = (await response.text()).slice(0, 2_000_000);
    return { kind: 'reachable', detail: `HTTP ${response.status}`, hasFreeEvidence: freeEvidence.test(body) };
  } catch (error) {
    return { kind: 'blocked', detail: error.name === 'AbortError' ? 'délai dépassé' : error.message };
  } finally {
    clearTimeout(timeout);
  }
}

function decide(site, source) {
  if (site.kind === 'gone') {
    return { statut: 'obsolete', note: `Site officiel indisponible (${site.detail}).` };
  }
  if (source.kind === 'gone') {
    return { statut: 'a_verifier', note: `La source tarifaire a disparu (${source.detail}) ; contrôle éditorial requis.` };
  }
  if (source.kind === 'reachable' && source.hasFreeEvidence) {
    return { statut: 'active', note: 'Source tarifaire accessible et mention d’une formule gratuite détectée.' };
  }
  if (source.kind === 'reachable') {
    return { statut: 'a_verifier', note: 'Source accessible, mais aucune mention explicite de gratuité détectée.' };
  }
  return { statut: 'a_verifier', note: `Vérification automatique incomplète : ${source.detail}.` };
}

const files = (await readdir(offersDirectory)).filter((file) => file.endsWith('.md')).sort();
const results = [];

for (const file of files) {
  const path = join(offersDirectory.pathname, file);
  let document = await readFile(path, 'utf8');
  const previousStatus = frontmatterValue(document, 'statut') || 'active';
  if (previousStatus === 'obsolete') {
    results.push({ offer: basename(file, '.md'), status: 'obsolete', note: 'Archive conservée, non revérifiée.' });
    continue;
  }

  const [site, source] = await Promise.all([
    inspect(frontmatterValue(document, 'url')),
    inspect(frontmatterValue(document, 'source')),
  ]);
  const decision = decide(site, source);
  document = setFrontmatterValue(document, 'statut', decision.statut);
  document = setFrontmatterValue(document, 'verificationAutomatiqueLe', today);
  document = setFrontmatterValue(document, 'verificationNote', decision.note);
  if (decision.statut === 'active') document = setFrontmatterValue(document, 'verifieLe', today);
  if (!dryRun) await writeFile(path, document);
  results.push({ offer: basename(file, '.md'), status: decision.statut, note: decision.note });
}

console.table(results);

if (process.env.GITHUB_STEP_SUMMARY) {
  const rows = results.map(({ offer, status, note }) => `| ${offer} | ${status} | ${note.replaceAll('|', '\\|')} |`).join('\n');
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `## Vérification des offres — ${today}\n\n| Offre | Statut | Résultat |\n|---|---|---|\n${rows}\n`);
}
