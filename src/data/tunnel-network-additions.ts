import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['cname-dev'] ??= [
  { id: 'service-limits', metric: 'service_limits', label: 'Limites du proxy', amount: null, unit: 'various', period: 'variable', scope: 'account', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Aucun quota chiffré public n’est affiché.' },
];

OFFER_QUOTAS['conveyor-cloud'] ??= [
  { id: 'connection-time', metric: 'connection_time', label: 'Connexion continue', amount: 4, unit: 'hour', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
  { id: 'bandwidth', metric: 'bandwidth', label: 'Trafic', amount: 500, unit: 'MB', period: 'day', scope: 'account', reset: 'daily', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['expose'] ??= [
  { id: 'regions', metric: 'regions', label: 'Serveur gratuit', amount: 1, unit: 'region', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Le plan Hobby utilise un serveur européen.' },
  { id: 'session-limit', metric: 'session_duration', label: 'Durée du tunnel', amount: null, unit: 'minute', period: 'session', scope: 'tunnel', reset: 'variable', overage: 'blocked', kind: 'not-published', notes: 'La tarification indique une limite de temps sans valeur chiffrée publique.' },
];

OFFER_QUOTAS['hamachi'] ??= [
  { id: 'computers', metric: 'devices', label: 'Ordinateurs par réseau gratuit', amount: 5, unit: 'device', period: 'lifetime', scope: 'network', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['hookdeck'] ??= [
  { id: 'events', metric: 'events', label: 'Événements', amount: 10000, unit: 'event', period: 'month', scope: 'organization', reset: 'monthly', overage: 'degraded', kind: 'limit' },
  { id: 'discarded-requests', metric: 'requests', label: 'Requêtes écartées', amount: 100000, unit: 'request', period: 'month', scope: 'organization', reset: 'monthly', overage: 'degraded', kind: 'limit' },
  { id: 'retention', metric: 'retention', label: 'Rétention', amount: 3, unit: 'day', period: 'lifetime', scope: 'event', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['localhost-run'] ??= [
  { id: 'free-tier-limits', metric: 'service_limits', label: 'Limites des tunnels gratuits', amount: null, unit: 'various', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le niveau gratuit est permanent mais aucun quota chiffré n’est publié.' },
];

OFFER_QUOTAS['localtonet'] ??= [
  { id: 'tunnels', metric: 'tunnels', label: 'Tunnel', amount: 1, unit: 'tunnel', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'bandwidth', metric: 'bandwidth', label: 'Bande passante', amount: 1, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'timeout', metric: 'session_duration', label: 'Timeout du tunnel', amount: 30, unit: 'minute', period: 'session', scope: 'tunnel', reset: 'rolling', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['localtunnel'] ??= [
  { id: 'hosted-service-limits', metric: 'service_limits', label: 'Limites du service hébergé', amount: null, unit: 'various', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le service public ne publie ni quota de trafic ni SLA.' },
];

OFFER_QUOTAS['localxpose'] ??= [
  { id: 'active-tunnels', metric: 'tunnels', label: 'Tunnels HTTP/HTTPS actifs', amount: 2, unit: 'tunnel', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'session-limit', metric: 'session_duration', label: 'Durée du tunnel', amount: null, unit: 'minute', period: 'session', scope: 'tunnel', reset: 'variable', overage: 'blocked', kind: 'not-published', notes: 'Le plan Starter indique une limite de temps sans valeur chiffrée publique.' },
];

OFFER_QUOTAS['ngrok'] ??= [
  { id: 'usage-credit', metric: 'credit', label: 'Crédit d’usage unique', amount: 5, unit: 'USD', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'credit', notes: 'Crédit accordé une seule fois et valable un an.' },
  { id: 'endpoints', metric: 'endpoints', label: 'Endpoints en ligne', amount: 3, unit: 'endpoint', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'data-transfer', metric: 'bandwidth', label: 'Transfert de données', amount: 1, unit: 'GB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'http-requests', metric: 'requests', label: 'Requêtes HTTP/S', amount: 20000, unit: 'request', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'tcp-connections', metric: 'connections', label: 'Connexions TCP/TLS', amount: 5000, unit: 'connection', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['pinggy'] ??= [
  { id: 'timeout', metric: 'session_duration', label: 'Durée du tunnel', amount: 60, unit: 'minute', period: 'session', scope: 'tunnel', reset: 'rolling', overage: 'blocked', kind: 'limit' },
  { id: 'bandwidth', metric: 'bandwidth', label: 'Transfert de données', amount: null, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
];

OFFER_QUOTAS['radmin-vpn'] ??= [
  { id: 'service-limits', metric: 'service_limits', label: 'Limites générales publiées', amount: null, unit: 'various', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Le produit est annoncé 100 % gratuit et sans limite de joueurs, mais aucun plafond général de pairs n’est publié.' },
];

OFFER_QUOTAS['serveo'] ??= [
  { id: 'service-limits', metric: 'service_limits', label: 'Limites du service public', amount: null, unit: 'various', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'Aucun quota ou SLA gratuit fiable n’est actuellement publié.' },
];

OFFER_QUOTAS['twilio-stun'] ??= [
  { id: 'stun', metric: 'stun_requests', label: 'Requêtes STUN', amount: null, unit: 'request', period: 'lifetime', scope: 'service', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited', notes: 'Twilio annonce les recherches STUN comme gratuites et illimitées.' },
];

OFFER_QUOTAS['google-stun'] ??= [
  { id: 'service-limits', metric: 'stun_requests', label: 'Limites du serveur STUN public', amount: null, unit: 'request', period: 'variable', scope: 'service', reset: 'variable', overage: 'unknown', kind: 'not-published', notes: 'L’endpoint est documenté dans les exemples WebRTC mais aucun quota ni SLA n’est publié.' },
];

OFFER_QUOTAS['tailscale'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 6, unit: 'user', period: 'lifetime', scope: 'tailnet', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'devices', metric: 'devices', label: 'Appareils utilisateurs', amount: null, unit: 'device', period: 'lifetime', scope: 'tailnet', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'acl-groups', metric: 'groups', label: 'Groupes ACL', amount: 3, unit: 'group', period: 'lifetime', scope: 'tailnet', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'ephemeral-minutes', metric: 'compute_time', label: 'Ressources éphémères', amount: 1000, unit: 'minute', period: 'month', scope: 'tailnet', reset: 'monthly', overage: 'billed', kind: 'limit' },
];

OFFER_QUOTAS['webhook-relay'] ??= [
  { id: 'webhooks', metric: 'webhooks', label: 'Webhooks', amount: 150, unit: 'webhook', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'inputs', metric: 'inputs', label: 'Entrées', amount: 1, unit: 'input', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'outputs', metric: 'outputs', label: 'Destinations', amount: 2, unit: 'output', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['xirsys'] ??= [
  { id: 'stun', metric: 'stun_requests', label: 'Connexions STUN', amount: null, unit: 'connection', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'turn-bandwidth', metric: 'bandwidth', label: 'Bande passante TURN', amount: 500, unit: 'MB', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'channels', metric: 'channels', label: 'Channels', amount: 2, unit: 'channel', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'websockets', metric: 'connections', label: 'WebSockets simultanés après essai', amount: 25, unit: 'connection', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zerotier'] ??= [
  { id: 'devices', metric: 'devices', label: 'Appareils', amount: 10, unit: 'device', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'networks', metric: 'networks', label: 'Réseaux', amount: 1, unit: 'network', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'admins', metric: 'users', label: 'Administrateur réseau', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

export const TUNNEL_NETWORK_QUOTA_SCORES = {
  'cname-dev': 15,
  'conveyor-cloud': 15,
  expose: 15,
  hamachi: 15,
  hookdeck: 20,
  'localhost-run': 20,
  localtonet: 15,
  localtunnel: 20,
  localxpose: 15,
  ngrok: 10,
  pinggy: 15,
  'radmin-vpn': 20,
  serveo: 15,
  'twilio-stun': 25,
  'google-stun': 15,
  tailscale: 25,
  'webhook-relay': 10,
  xirsys: 20,
  zerotier: 15,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
