import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["ably"] ??= [
  {"id": "messages", "metric": "messages", "label": "Messages", "amount": 6000000, "unit": "message", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "connections", "metric": "concurrent_connections", "label": "Connexions concurrentes", "amount": 200, "unit": "connection", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "channels", "metric": "concurrent_channels", "label": "Channels concurrents", "amount": 200, "unit": "channel", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["cloudamqp"] ??= [
  {"id": "messages", "metric": "messages", "label": "Messages", "amount": 1000000, "unit": "message", "period": "month", "scope": "instance", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "connections", "metric": "concurrent_connections", "label": "Connexions concurrentes", "amount": 20, "unit": "connection", "period": "lifetime", "scope": "instance", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "queues", "metric": "queues", "label": "Queues", "amount": 100, "unit": "queue", "period": "lifetime", "scope": "instance", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "queued_messages", "metric": "queued_messages", "label": "Messages en attente", "amount": 10000, "unit": "message", "period": "lifetime", "scope": "instance", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["courier"] ??= [
  {"id": "sends", "metric": "notifications", "label": "Envois", "amount": 10000, "unit": "send", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "log_retention", "metric": "log_retention", "label": "Rétention des logs", "amount": 30, "unit": "day", "period": "lifetime", "scope": "account", "reset": "never", "overage": "not-applicable", "kind": "limit"},
];

OFFER_QUOTAS["emqx-serverless"] ??= [
  {"id": "session_minutes", "metric": "session_minutes", "label": "Session-minutes", "amount": 1000000, "unit": "minute", "period": "month", "scope": "deployment", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "traffic", "metric": "traffic", "label": "Trafic", "amount": 1, "unit": "GiB", "period": "month", "scope": "deployment", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "rule_actions", "metric": "rule_actions", "label": "Rule actions", "amount": 1000000, "unit": "action", "period": "month", "scope": "deployment", "reset": "monthly", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["engage"] ??= [
  {"id": "active_users", "metric": "active_users", "label": "Utilisateurs actifs", "amount": 1000, "unit": "user", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "team_members", "metric": "team_members", "label": "Membres d’équipe", "amount": 2, "unit": "user", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "campaign_recipients", "metric": "campaign_recipients", "label": "Destinataires par campagne", "amount": 1000, "unit": "recipient", "period": "session", "scope": "campaign", "reset": "not-applicable", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["engagespot"] ??= [
  {"id": "triggers", "metric": "event_triggers", "label": "Event triggers", "amount": 10000, "unit": "trigger", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "environments", "metric": "environments", "label": "Environnements", "amount": 2, "unit": "environment", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "team_members", "metric": "team_members", "label": "Membres d’équipe", "amount": 2, "unit": "user", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["hivemq"] ??= [
  {"id": "connections", "metric": "mqtt_connections", "label": "Connexions MQTT", "amount": 100, "unit": "connection", "period": "lifetime", "scope": "cluster", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "traffic", "metric": "traffic", "label": "Trafic", "amount": 10, "unit": "GiB", "period": "month", "scope": "cluster", "reset": "monthly", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["httpsms"] ??= [
  {"id": "sms", "metric": "sms", "label": "SMS envoyés ou reçus", "amount": 200, "unit": "message", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["knock"] ??= [
  {"id": "messages", "metric": "messages", "label": "Messages", "amount": 10000, "unit": "message", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "guide_users", "metric": "guide_users", "label": "Utilisateurs Guides", "amount": 500, "unit": "user", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["novu"] ??= [
  {"id": "workflow_runs", "metric": "workflow_runs", "label": "Workflow runs", "amount": 10000, "unit": "run", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "workflows", "metric": "workflows", "label": "Workflows", "amount": 20, "unit": "workflow", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "environments", "metric": "environments", "label": "Environnements", "amount": 2, "unit": "environment", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "retention", "metric": "activity_retention", "label": "Rétention activity feed", "amount": 24, "unit": "hour", "period": "lifetime", "scope": "account", "reset": "never", "overage": "not-applicable", "kind": "limit"},
];
