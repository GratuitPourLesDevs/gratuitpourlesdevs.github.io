import fs from 'node:fs';
import path from 'node:path';
import { EDITORIAL_READY_OFFER_IDS } from '../src/lib/editorial-readiness.mjs';

const offersDirectory = path.join(process.cwd(), 'src/content/offres');
const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const wordCount = (value) => value.match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
const readScalar = (frontmatter, key) => frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim().replace(/^['"]|['"]$/g, '') ?? '';
const readList = (frontmatter, key) => {
  const lines = frontmatter.split(/\r?\n/);
  const inline = lines.find((line) => new RegExp(`^${key}:\\s*\\[`).test(line));
  if (inline) return inline.slice(inline.indexOf('[') + 1, inline.lastIndexOf(']')).split(',').map((item) => item.trim()).filter(Boolean);
  const start = lines.findIndex((line) => line.trim() === `${key}:`);
  if (start === -1) return [];
  const values = [];
  for (const line of lines.slice(start + 1)) {
    if (/^[A-Za-zÀ-ÿ_][^:]*:/.test(line)) break;
    const match = line.match(/^\s*-\s+(.+)$/);
    if (match) values.push(match[1].trim());
  }
  return values;
};

const records = [];
for (const id of EDITORIAL_READY_OFFER_IDS) {
  const file = path.join(offersDirectory, `${id}.md`);
  if (!fs.existsSync(file)) {
    records.push({ id, errors: ['fichier absent'] });
    continue;
  }
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  const frontmatter = match?.[1] ?? '';
  const body = normalize((match?.[2] ?? '').replace(/[`*_~>|#\[\]()]/g, ' '));
  const nom = readScalar(frontmatter, 'nom') || id;
  const words = wordCount(body);
  const sentences = body.split(/(?<=[.!?])\s+/).filter((sentence) => sentence.length >= 25).length;
  const errors = [];
  if (readScalar(frontmatter, 'statut') !== 'active') errors.push('statut non actif');
  if (words < 90) errors.push(`${words} mots éditoriaux (< 90)`);
  if (sentences < 3) errors.push(`${sentences} phrases explicatives (< 3)`);
  if (!/(projet|application|site|api|équipe|développeur|service|backend|frontend|infrastructure|workflow|automatisation|déploiement|plateforme|portfolio|candidat|domaine)/i.test(body)) errors.push("cas d'usage non détecté");
  if (readScalar(frontmatter, 'formule').length < 20) errors.push('formule gratuite insuffisante');
  if (![...readList(frontmatter, 'conditions'), ...readList(frontmatter, 'restrictions')].length) errors.push('limite de sortie absente');
  const template = body
    .toLocaleLowerCase('fr-FR')
    .replaceAll(nom.toLocaleLowerCase('fr-FR'), 'service')
    .replace(/\d+(?:[.,]\d+)?/g, 'N');
  records.push({ id, nom, words, template, errors });
}

const templateGroups = new Map();
for (const record of records.filter((item) => item.template)) {
  const ids = templateGroups.get(record.template) ?? [];
  ids.push(record.id);
  templateGroups.set(record.template, ids);
}
const duplicates = [...templateGroups.values()].filter((ids) => ids.length > 1);
const failing = records.filter((record) => record.errors.length);

console.log(`INDEXABLE_OFFERS=${records.length}`);
console.log(`INDEXABLE_QUALITY_OK=${records.length - failing.length}`);
console.log(`INDEXABLE_QUALITY_FAIL=${failing.length}`);
if (failing.length) console.error(JSON.stringify(failing.map(({ id, errors }) => ({ id, errors })), null, 2));
if (duplicates.length) console.error(`NORMALIZED_DUPLICATES=${JSON.stringify(duplicates)}`);
if (failing.length || duplicates.length) process.exitCode = 1;
