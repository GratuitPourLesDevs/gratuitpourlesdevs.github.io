import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  fullstory: [
    { id: 'sessions', metric: 'sessions', label: 'Sessions capturées', amount: 30000, unit: 'session', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'replay-retention', metric: 'retention', label: 'Rétention des replays', amount: 12, unit: 'month', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
    { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 10, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  ],
  howuku: [
    { id: 'sessions', metric: 'sessions', label: 'Sessions suivies', amount: 1000, unit: 'session', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'heatmap-retention', metric: 'retention', label: 'Données récentes des heatmaps', amount: 7, unit: 'day', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  inspectlet: [
    { id: 'replays', metric: 'sessions', label: 'Session replays', amount: 2500, unit: 'replay', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit', notes: 'Quota conservateur fondé sur la FAQ et le guide 2026 ; la table de pricing affiche actuellement une autre valeur.' },
    { id: 'sites', metric: 'sites', label: 'Sites web', amount: 3, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 1, unit: 'month', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  'microsoft-clarity': [
    { id: 'traffic', metric: 'sessions', label: 'Trafic suivi', amount: null, unit: 'session', period: 'month', scope: 'account', reset: 'monthly', overage: 'not-applicable', kind: 'unmetered', notes: 'Microsoft annonce explicitement ne pas appliquer de plafond de trafic.' },
    { id: 'sites', metric: 'sites', label: 'Sites', amount: null, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
    { id: 'users', metric: 'users', label: 'Membres', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
    { id: 'replay-retention', metric: 'retention', label: 'Rétention standard des replays', amount: 30, unit: 'day', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
    { id: 'heatmap-retention', metric: 'retention', label: 'Rétention des heatmaps', amount: 9, unit: 'month', period: 'lifetime', scope: 'project', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
  mouseflow: [
    { id: 'sessions', metric: 'sessions', label: 'Sessions', amount: 500, unit: 'session', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'sites', metric: 'sites', label: 'Sites web', amount: 1, unit: 'site', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'funnels', metric: 'funnels', label: 'Funnels', amount: 1, unit: 'funnel', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Rétention', amount: 1, unit: 'month', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
    { id: 'users', metric: 'users', label: 'Utilisateurs', amount: null, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'not-applicable', kind: 'unlimited' },
  ],
  openreplay: [
    { id: 'self-hosted-capacity', metric: 'service_limits', label: 'Capacité auto-hébergée', amount: null, unit: 'various', period: 'variable', scope: 'installation', reset: 'variable', overage: 'not-applicable', kind: 'not-published', notes: 'Aucun quota logiciel stable n’est publié pour l’édition Open-Source ; volume, stockage et rétention dépendent de l’infrastructure choisie.' },
  ],
  uxtweak: [
    { id: 'responses', metric: 'responses', label: 'Réponses', amount: 15, unit: 'response', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
    { id: 'active-studies', metric: 'studies', label: 'Études actives simultanément', amount: 1, unit: 'study', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
    { id: 'retention', metric: 'retention', label: 'Accès aux résultats', amount: 14, unit: 'day', period: 'lifetime', scope: 'study', reset: 'not-applicable', overage: 'not-applicable', kind: 'limit' },
  ],
};

Object.assign(OFFER_QUOTAS, QUOTAS);

export const SESSION_REPLAY_QUOTA_SCORES = {
  fullstory: 25,
  howuku: 15,
  inspectlet: 20,
  'microsoft-clarity': 25,
  mouseflow: 15,
  openreplay: 25,
  uxtweak: 15,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
