DELETE FROM comparisons WHERE featured = 1;

INSERT OR IGNORE INTO comparisons
  (comparison_key, offer_ids, created_at, last_viewed_at, view_count, helpful_count, featured)
VALUES
  ('amazon-cloudwatch,grafana-cloud,uptimerobot', 'amazon-cloudwatch,grafana-cloud,uptimerobot', 1786665600, 1786665600, 0, 0, 1),
  ('amazon-dynamodb,azure-cosmos-db,cloudflare-d1,neon', 'amazon-dynamodb,azure-cosmos-db,cloudflare-d1,neon', 1786665600, 1786665600, 0, 0, 1),
  ('aws-lambda,azure-functions,cloudflare-workers', 'aws-lambda,azure-functions,cloudflare-workers', 1786665600, 1786665600, 0, 0, 1),
  ('aws-codebuild,aws-codepipeline,github-actions', 'aws-codebuild,aws-codepipeline,github-actions', 1786665600, 1786665600, 0, 0, 1),
  ('azure-storage-free-services,cloudflare-r2', 'azure-storage-free-services,cloudflare-r2', 1786665600, 1786665600, 0, 0, 1),
  ('azure-static-web-apps,cloudflare-pages,vercel', 'azure-static-web-apps,cloudflare-pages,vercel', 1786665600, 1786665600, 0, 0, 1);

DELETE FROM comparison_events
WHERE comparison_key NOT IN (SELECT comparison_key FROM comparisons);
