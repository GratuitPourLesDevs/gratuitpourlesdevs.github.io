import { readdir, readFile, writeFile, appendFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const offersDirectory = new URL('../src/content/offres/', import.meta.url);
const dryRun = process.argv.includes('--dry-run');
const today = new Date().toISOString().slice(0, 10);
const freeEvidence = /\bfree(?: tier| plan| forever)?\b|gratuit|always[- ]free|\$\s*0\b|0\s*(?:€|eur|usd|\/\s*mois|\/\s*month)/i;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function frontmatterEnd(document) {
  const closing = document.indexOf('\n---', 3);
  if (!document.startsWith('---\n') || closing === -1) throw new Error('Frontmatter invalide');
  return closing;
}

function scalarPattern(field) {
  return new RegExp(`^${escapeRegExp(field)}:[^\\r\\n]*(?:\\r?\\n[ \\t]+[^\\r\\n]*)*`, 'm');
}

export function frontmatterValue(document, field) {
  const frontmatter = document.slice(0, frontmatterEnd(document));
  const match = frontmatter.match(scalarPattern(field));
  if (!match) return '';
  const value = match[0]
    .slice(match[0].indexOf(':') + 1)
    .replace(/\r?\n[ \t]+/g, ' ')
    .trim();
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

export function setFrontmatterValue(document, field, value) {
  const rendered = typeof value === 'string' && !/^\d{4}-\d{2}-\d{2}$/.test(value)
    ? JSON.stringify(value)
    : String(value);
  const line = `${field}: ${rendered}`;
  const closing = frontmatterEnd(document);
  const frontmatter = document.slice(0, closing);
  const pattern = scalarPattern(field);
  if (pattern.test(frontmatter)) {
    return `${frontmatter.replace(pattern, line)}${document.slice(closing)}`;
  }
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

const CONFIRMATION_THRESHOLD = 2;

function consecutiveFailures(previousCode, previousFailures, code) {
  return previousCode === code ? previousFailures + 1 : 1;
}

export function decide(site, source, previous = {}) {
  const previousStatus = previous.statut || 'active';
  const previousCode = previous.verificationCode || '';
  const previousFailures = Number.parseInt(previous.verificationEchecsConsecutifs || '0', 10) || 0;

  if (site.kind === 'gone') {
    const failures = consecutiveFailures(previousCode, previousFailures, 'site_indisponible');
    const confirmed = failures >= CONFIRMATION_THRESHOLD;
    return {
      statut: confirmed ? 'obsolete' : previousStatus,
      verificationEtat: 'controle_requis',
      verificationCode: 'site_indisponible',
      verificationEchecsConsecutifs: failures,
      updateVerifiedAt: false,
      note: confirmed
        ? `Site officiel indisponible (${site.detail}) lors de ${failures} contrôles consécutifs.`
        : `Site officiel momentanément indisponible (${site.detail}) ; statut éditorial conservé jusqu’à confirmation.`,
    };
  }
  if (source.kind === 'gone') {
    const failures = consecutiveFailures(previousCode, previousFailures, 'source_indisponible');
    const confirmed = failures >= CONFIRMATION_THRESHOLD;
    return {
      statut: confirmed ? 'a_verifier' : previousStatus,
      verificationEtat: 'controle_requis',
      verificationCode: 'source_indisponible',
      verificationEchecsConsecutifs: failures,
      updateVerifiedAt: false,
      note: confirmed
        ? `La source tarifaire reste indisponible (${source.detail}) après ${failures} contrôles consécutifs ; contrôle éditorial requis.`
        : `La source tarifaire est momentanément indisponible (${source.detail}) ; statut éditorial conservé jusqu’à confirmation.`,
    };
  }
  if (source.kind === 'reachable' && source.hasFreeEvidence) {
    return {
      statut: 'active',
      verificationEtat: 'confirmee',
      verificationCode: 'gratuit_detecte',
      verificationEchecsConsecutifs: 0,
      updateVerifiedAt: true,
      note: 'Source tarifaire accessible et mention d’une formule gratuite détectée.',
    };
  }
  if (source.kind === 'reachable') {
    const failures = consecutiveFailures(previousCode, previousFailures, 'gratuit_non_detecte');
    return {
      statut: previousStatus,
      verificationEtat: 'controle_requis',
      verificationCode: 'gratuit_non_detecte',
      verificationEchecsConsecutifs: failures,
      updateVerifiedAt: false,
      note: 'Source accessible, mais aucune mention explicite de gratuité détectée ; statut éditorial conservé pour contrôle manuel.',
    };
  }
  const failures = consecutiveFailures(previousCode, previousFailures, 'controle_bloque');
  return {
    statut: previousStatus,
    verificationEtat: 'inconclusive',
    verificationCode: 'controle_bloque',
    verificationEchecsConsecutifs: failures,
    updateVerifiedAt: false,
    note: `Vérification automatique incomplète (${source.detail}) ; statut éditorial conservé.`,
  };
}

async function main() {
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
    const decision = decide(site, source, {
      statut: previousStatus,
      verificationCode: frontmatterValue(document, 'verificationCode'),
      verificationEchecsConsecutifs: frontmatterValue(document, 'verificationEchecsConsecutifs'),
    });
    document = setFrontmatterValue(document, 'statut', decision.statut);
    document = setFrontmatterValue(document, 'verificationAutomatiqueLe', today);
    document = setFrontmatterValue(document, 'verificationNote', decision.note);
    document = setFrontmatterValue(document, 'verificationEtat', decision.verificationEtat);
    document = setFrontmatterValue(document, 'verificationCode', decision.verificationCode);
    document = setFrontmatterValue(document, 'verificationEchecsConsecutifs', decision.verificationEchecsConsecutifs);
    if (decision.updateVerifiedAt) document = setFrontmatterValue(document, 'verifieLe', today);
    if (!dryRun) await writeFile(path, document);
    results.push({ offer: basename(file, '.md'), status: decision.statut, note: decision.note });
  }

  console.table(results);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const rows = results.map(({ offer, status, note }) => `| ${offer} | ${status} | ${note.replaceAll('|', '\\|')} |`).join('\n');
    await appendFile(process.env.GITHUB_STEP_SUMMARY, `## Vérification des offres — ${today}\n\n| Offre | Statut | Résultat |\n|---|---|---|\n${rows}\n`);
  }
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) await main();
