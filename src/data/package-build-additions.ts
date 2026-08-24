import { OFFER_QUOTAS, type OfferQuota } from './offer-quotas';

const QUOTAS: Record<string, OfferQuota[]> = {
  "opensuse-build-service": [
    { id: "public-service-limits", metric: "service_limits", label: "Limites de l’instance publique", amount: null, unit: "various", period: "variable", scope: "service", reset: "variable", overage: "unknown", kind: "not-published", notes: "Aucun quota chiffré stable de builds ou de stockage n’est publié pour build.opensuse.org ; le service repose sur une infrastructure communautaire partagée." },
  ],
  "fedora-copr": [
    { id: "build-time", metric: "build_time", label: "Durée maximale d’un build par défaut", amount: 5, unit: "hour", period: "session", scope: "build", reset: "not-applicable", overage: "blocked", kind: "limit", notes: "Le timeout peut être augmenté ; l’instance Fedora Copr autorise jusqu’à 50 heures." },
    { id: "monthly-build-quota", metric: "service_limits", label: "Quota mensuel de builds", amount: null, unit: "build", period: "month", scope: "account", reset: "monthly", overage: "unknown", kind: "not-published", notes: "Aucun quota mensuel chiffré n’est publié dans la documentation utilisateur ; l’usage reste soumis aux ressources partagées et aux politiques Fedora." },
  ],
  "launchpad-ppa": [
    { id: "storage", metric: "storage", label: "Stockage d’un nouveau PPA", amount: 8, unit: "GiB", period: "lifetime", scope: "PPA", reset: "never", overage: "blocked", kind: "limit", notes: "Un quota supérieur peut être demandé pour un PPA particulier." },
    { id: "bandwidth", metric: "bandwidth", label: "Transfert de téléchargement", amount: null, unit: "GB", period: "variable", scope: "PPA", reset: "variable", overage: "unknown", kind: "unmetered", notes: "Launchpad n’applique pas de limite stricte de transfert publiée, mais peut contacter les utilisateurs en cas de trafic inhabituellement élevé." },
  ],
};

for (const [id, quotas] of Object.entries(QUOTAS)) OFFER_QUOTAS[id] ??= quotas;

export const PACKAGE_BUILD_QUOTA_SCORES = {
  "opensuse-build-service": 20,
  "fedora-copr": 20,
  "launchpad-ppa": 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
