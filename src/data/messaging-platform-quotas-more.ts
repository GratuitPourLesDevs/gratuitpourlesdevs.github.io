import { OFFER_QUOTAS } from './offer-quotas';

OFFER_QUOTAS["pingram"] ??= [
  {"id": "emails", "metric": "emails", "label": "E-mails", "amount": 3000, "unit": "email", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "sms", "metric": "sms", "label": "SMS", "amount": 100, "unit": "message", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "call_minutes", "metric": "call_minutes", "label": "Minutes d’appel", "amount": 100, "unit": "minute", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["pocket-alert"] ??= [
  {"id": "messages", "metric": "push_notifications", "label": "Push notifications", "amount": 50, "unit": "message", "period": "day", "scope": "account", "reset": "daily", "overage": "blocked", "kind": "limit"},
  {"id": "devices", "metric": "devices", "label": "Appareils", "amount": 1, "unit": "device", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "applications", "metric": "applications", "label": "Applications", "amount": 1, "unit": "application", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "webhooks", "metric": "webhooks", "label": "Webhooks", "amount": 1, "unit": "webhook", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["pubnub"] ??= [
  {"id": "mau", "metric": "monthly_active_users", "label": "Utilisateurs actifs mensuels", "amount": 200, "unit": "user", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "transactions", "metric": "transactions", "label": "Transactions", "amount": 1000000, "unit": "transaction", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "storage", "metric": "storage", "label": "Stockage", "amount": 1, "unit": "GiB", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["pusher"] ??= [
  {"id": "messages", "metric": "messages", "label": "Messages", "amount": 200000, "unit": "message", "period": "day", "scope": "app", "reset": "daily", "overage": "blocked", "kind": "limit"},
  {"id": "connections", "metric": "concurrent_connections", "label": "Connexions concurrentes", "amount": 100, "unit": "connection", "period": "lifetime", "scope": "app", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "channels", "metric": "channels", "label": "Channels", "amount": null, "unit": "channel", "period": "lifetime", "scope": "app", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
];

OFFER_QUOTAS["scaledrone"] ??= [
  {"id": "events", "metric": "events", "label": "Événements", "amount": 100000, "unit": "event", "period": "day", "scope": "account", "reset": "daily", "overage": "blocked", "kind": "limit"},
  {"id": "connections", "metric": "concurrent_connections", "label": "Connexions concurrentes", "amount": 20, "unit": "connection", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["smsgate"] ??= [
  {"id": "local_messages", "metric": "messages", "label": "Messages via serveur local", "amount": null, "unit": "message", "period": "lifetime", "scope": "local-server", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
  {"id": "cloud_messages", "metric": "messages", "label": "Messages via serveur cloud", "amount": null, "unit": "message", "period": "variable", "scope": "cloud-server", "reset": "variable", "overage": "degraded", "kind": "unmetered"},
];

OFFER_QUOTAS["suprsend"] ??= [
  {"id": "notifications", "metric": "notifications", "label": "Notifications", "amount": 10000, "unit": "notification", "period": "month", "scope": "account", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "channels", "metric": "channels", "label": "Canaux", "amount": null, "unit": "channel", "period": "lifetime", "scope": "account", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
  {"id": "team_members", "metric": "team_members", "label": "Membres d’équipe", "amount": null, "unit": "user", "period": "lifetime", "scope": "account", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
];

OFFER_QUOTAS["synadia"] ??= [
  {"id": "connections", "metric": "connections", "label": "Connexions", "amount": 10, "unit": "connection", "period": "lifetime", "scope": "team", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "network_data", "metric": "network_data", "label": "Données réseau", "amount": 10, "unit": "GiB", "period": "month", "scope": "team", "reset": "monthly", "overage": "blocked", "kind": "limit"},
  {"id": "storage", "metric": "standard_storage", "label": "Stockage standard", "amount": 5, "unit": "GiB", "period": "lifetime", "scope": "team", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "accounts", "metric": "accounts", "label": "Comptes NATS", "amount": 2, "unit": "account", "period": "lifetime", "scope": "team", "reset": "never", "overage": "blocked", "kind": "limit"},
];

OFFER_QUOTAS["webpushr"] ??= [
  {"id": "subscribers", "metric": "subscribers", "label": "Abonnés actifs", "amount": 10000, "unit": "subscriber", "period": "lifetime", "scope": "account", "reset": "never", "overage": "blocked", "kind": "limit"},
  {"id": "pushes", "metric": "push_notifications", "label": "Push notifications", "amount": null, "unit": "notification", "period": "lifetime", "scope": "account", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
  {"id": "websites", "metric": "websites", "label": "Sites", "amount": null, "unit": "website", "period": "lifetime", "scope": "account", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
];

OFFER_QUOTAS["vask"] ??= [
  {"id": "broadcasts", "metric": "server_broadcasts", "label": "Server broadcasts", "amount": 500000, "unit": "broadcast", "period": "month", "scope": "account", "reset": "monthly", "overage": "degraded", "kind": "limit"},
  {"id": "connections", "metric": "concurrent_connections", "label": "Connexions concurrentes", "amount": 100, "unit": "connection", "period": "lifetime", "scope": "account", "reset": "never", "overage": "degraded", "kind": "limit"},
  {"id": "apps", "metric": "applications", "label": "Applications", "amount": null, "unit": "application", "period": "lifetime", "scope": "account", "reset": "not-applicable", "overage": "not-applicable", "kind": "unlimited"},
];
