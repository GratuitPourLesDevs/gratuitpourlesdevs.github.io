export type GuideRankingSnapshot = {
  updatedAt: string;
  positions: Record<string, number>;
};

// Les prochains classements pourront conserver ici la dernière référence publiée
// afin d'afficher les gains, pertes et positions stables sans inventer d'historique.
export const GUIDE_RANKING_HISTORY: Record<string, GuideRankingSnapshot | undefined> = {
  email: undefined,
};
