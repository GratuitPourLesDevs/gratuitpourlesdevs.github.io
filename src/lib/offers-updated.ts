import { execFileSync } from 'node:child_process';
import { getCollection } from 'astro:content';

export interface OffersUpdatedMetadata {
  at?: Date;
  iso: string;
  label: string;
  shortDateLabel: string;
  timeLabel: string;
  hasExactTime: boolean;
}

let metadataPromise: Promise<OffersUpdatedMetadata> | undefined;

export function getOffersUpdatedMetadata(): Promise<OffersUpdatedMetadata> {
  metadataPromise ??= resolveOffersUpdatedMetadata();
  return metadataPromise;
}

async function resolveOffersUpdatedMetadata(): Promise<OffersUpdatedMetadata> {
  let at: Date | undefined;
  let hasExactTime = false;

  try {
    const gitDate = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--grep=Vérification automatique des offres'],
      { encoding: 'utf8' },
    ).trim();
    if (gitDate) {
      at = new Date(gitDate);
      hasExactTime = true;
    }
  } catch {
    // En dehors d'un clone Git complet, les métadonnées des offres servent de repli.
  }

  if (!at) {
    const offerEntries = await getCollection('offres');
    const verificationDates = offerEntries
      .map(({ data }) => data.verificationAutomatiqueLe?.getTime())
      .filter((value): value is number => typeof value === 'number' && Number.isFinite(value));
    if (verificationDates.length) at = new Date(Math.max(...verificationDates));
  }

  if (!at) {
    return { at, iso: '', label: '', shortDateLabel: '', timeLabel: '', hasExactTime };
  }

  const dateOptions = { timeZone: 'Europe/Paris' } as const;
  return {
    at,
    iso: at.toISOString(),
    label: new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      ...(hasExactTime ? { hour: '2-digit', minute: '2-digit' } : {}),
      ...dateOptions,
    }).format(at),
    shortDateLabel: new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'short',
      ...dateOptions,
    }).format(at).replace('.', ''),
    timeLabel: hasExactTime
      ? new Intl.DateTimeFormat('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          ...dateOptions,
        }).format(at)
      : '',
    hasExactTime,
  };
}
