import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS['zoho-sprints'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 3, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 500, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-workdrive'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Les fichiers Zoho Writer, Sheet et Show natifs ne consomment pas ce quota.' },
];

OFFER_QUOTAS['zoho-projects'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 3, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-bugtracker'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 3, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'projects', metric: 'projects', label: 'Projets', amount: 2, unit: 'project', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'attachment-size', metric: 'attachment_size', label: 'Taille maximale par pièce jointe', amount: 10, unit: 'MB', period: 'lifetime', scope: 'file', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-connect'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 5, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 10, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'groups', metric: 'groups', label: 'Groupes', amount: 3, unit: 'group', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'boards', metric: 'boards', label: 'Tableaux', amount: 3, unit: 'board', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'manuals', metric: 'manuals', label: 'Manuels', amount: 3, unit: 'manual', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'attachment-size', metric: 'attachment_size', label: 'Taille maximale par document joint', amount: 10, unit: 'MB', period: 'lifetime', scope: 'file', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-meeting'] ??= [
  { id: 'participants', metric: 'participants', label: 'Participants par réunion ou webinar', amount: 100, unit: 'participant', period: 'session', scope: 'session', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'session-duration', metric: 'session_duration', label: 'Durée maximale', amount: 60, unit: 'minute', period: 'session', scope: 'session', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-vault'] ??= [
  { id: 'passwords', metric: 'passwords', label: 'Mots de passe', amount: null, unit: 'password', period: 'lifetime', scope: 'user', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'devices', metric: 'devices', label: 'Appareils', amount: null, unit: 'device', period: 'lifetime', scope: 'user', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'attachment-size', metric: 'attachment_size', label: 'Taille maximale par fichier joint', amount: 2, unit: 'MB', period: 'lifetime', scope: 'file', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['trainercentral'] ??= [
  { id: 'courses', metric: 'courses', label: 'Cours publiés', amount: 3, unit: 'course', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'active-learners', metric: 'active_learners', label: 'Apprenants actifs', amount: 10, unit: 'learner', period: 'month', scope: 'account', reset: 'monthly', overage: 'degraded', kind: 'limit', notes: 'Pas de facturation automatique en cas de dépassement ; TrainerCentral contacte le compte pour proposer une mise à niveau.' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 5, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-notebook'] ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage cloud', amount: 500, unit: 'MB', period: 'lifetime', scope: 'user', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'notecard-size', metric: 'note_size', label: 'Taille maximale d’une note', amount: 3, unit: 'MB', period: 'lifetime', scope: 'note', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'file-upload', metric: 'attachment_size', label: 'Taille maximale par fichier', amount: 10, unit: 'MB', period: 'lifetime', scope: 'file', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-learn'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 5, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'spaces', metric: 'spaces', label: 'Espaces', amount: 3, unit: 'space', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'manuals', metric: 'manuals', label: 'Manuels', amount: 5, unit: 'manual', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'courses', metric: 'courses', label: 'Cours', amount: 5, unit: 'course', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 1, unit: 'GB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'learning-paths', metric: 'learning_paths', label: 'Parcours d’apprentissage', amount: 2, unit: 'path', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-checkout'] ??= [
  { id: 'payment-pages', metric: 'payment_pages', label: 'Pages de paiement', amount: 3, unit: 'page', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'payments', metric: 'payments', label: 'Paiements', amount: 50, unit: 'payment', period: 'total', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit', notes: 'Le quota de 50 paiements est global et ne se réinitialise pas chaque mois.' },
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-desk'] ??= [
  { id: 'agents', metric: 'users', label: 'Agents', amount: 3, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'support-emails', metric: 'support_channels', label: 'Adresses e-mail de support', amount: 1, unit: 'email', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'macros', metric: 'automations', label: 'Macros', amount: 2, unit: 'automation', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-cliq'] ??= [
  { id: 'storage', metric: 'storage', label: 'Stockage par organisation', amount: 100, unit: 'GB', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'searchable-messages', metric: 'messages', label: 'Messages recherchables', amount: 10_000, unit: 'message', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'degraded', kind: 'limit' },
  { id: 'group-participants', metric: 'participants', label: 'Participants par groupe', amount: 100, unit: 'participant', period: 'lifetime', scope: 'group', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'channel-participants', metric: 'participants', label: 'Participants par canal interne', amount: 100, unit: 'participant', period: 'lifetime', scope: 'channel', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'meeting-participants', metric: 'participants', label: 'Participants par réunion', amount: 100, unit: 'participant', period: 'session', scope: 'session', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'meeting-duration', metric: 'session_duration', label: 'Durée maximale d’une réunion', amount: 60, unit: 'minute', period: 'session', scope: 'session', reset: 'not-applicable', overage: 'blocked', kind: 'limit' },
  { id: 'integrations', metric: 'integrations', label: 'Intégrations tierces personnalisées', amount: 10, unit: 'integration', period: 'lifetime', scope: 'organization', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-campaigns'] ??= [
  { id: 'contacts', metric: 'contacts', label: 'Contacts', amount: 2_000, unit: 'contact', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'emails', metric: 'emails', label: 'E-mails envoyés', amount: 6_000, unit: 'email', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-forms'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'forms', metric: 'forms', label: 'Formulaires', amount: 3, unit: 'form', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'submissions', metric: 'submissions', label: 'Soumissions', amount: 500, unit: 'submission', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
  { id: 'storage', metric: 'storage', label: 'Stockage', amount: 200, unit: 'MB', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'payment-submissions', metric: 'payments', label: 'Soumissions de paiement', amount: 10, unit: 'payment', period: 'month', scope: 'account', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-sign'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'envelopes', metric: 'documents', label: 'Enveloppes', amount: 5, unit: 'envelope', period: 'month', scope: 'user', reset: 'monthly', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-survey'] ??= [
  { id: 'surveys', metric: 'surveys', label: 'Sondages', amount: null, unit: 'survey', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'questions', metric: 'questions', label: 'Questions par sondage', amount: 10, unit: 'question', period: 'lifetime', scope: 'survey', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'responses', metric: 'responses', label: 'Réponses par sondage', amount: 100, unit: 'response', period: 'lifetime', scope: 'survey', reset: 'never', overage: 'blocked', kind: 'limit' },
];

OFFER_QUOTAS['zoho-bookings'] ??= [
  { id: 'users', metric: 'users', label: 'Utilisateurs', amount: 1, unit: 'user', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'appointments', metric: 'appointments', label: 'Rendez-vous', amount: null, unit: 'appointment', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'customers', metric: 'customers', label: 'Clients', amount: null, unit: 'customer', period: 'lifetime', scope: 'account', reset: 'not-applicable', overage: 'not-applicable', kind: 'unlimited' },
  { id: 'event-types', metric: 'event_types', label: 'Types d’événement', amount: 1, unit: 'event', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'workspaces', metric: 'workspaces', label: 'Espaces de travail', amount: 1, unit: 'workspace', period: 'lifetime', scope: 'account', reset: 'never', overage: 'blocked', kind: 'limit' },
  { id: 'calendars', metric: 'calendars', label: 'Calendriers synchronisés', amount: 1, unit: 'calendar', period: 'lifetime', scope: 'user', reset: 'never', overage: 'blocked', kind: 'limit' },
];
