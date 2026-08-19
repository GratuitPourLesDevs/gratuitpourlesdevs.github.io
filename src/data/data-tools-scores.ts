import { API_UTILITY_QUOTA_SCORES } from './api-utility-scores';
import { CMS_PLATFORM_QUOTA_SCORES } from './cms-platform-scores';
import { CODE_GENERATION_QUOTA_SCORES } from './code-generation-scores';
import { CODE_QUALITY_QUOTA_SCORES } from './code-quality-scores';
import { DELIVERY_AUTOMATION_QUOTA_SCORES } from './delivery-automation-scores';
import { DEVELOPER_UTILITY_QUOTA_SCORES } from './developer-utility-scores';
import { SECURITY_PLATFORM_QUOTA_SCORES } from './security-platform-scores';
import { IDENTITY_ACCESS_QUOTA_SCORES } from './identity-access-scores';
import { MOBILE_DISTRIBUTION_QUOTA_SCORES } from './mobile-distribution-scores';
import { INFRA_MANAGEMENT_QUOTA_SCORES } from './infra-management-scores';
import { TESTING_PLATFORM_QUOTA_SCORES } from './testing-platform-scores';
import { COLLABORATION_BATCH_QUOTA_SCORES } from './collaboration-batch-scores';
import { COLLABORATION_SERVICES_QUOTA_SCORES } from './collaboration-services-scores';
import { COLLABORATION_TOOLS_QUOTA_SCORES } from './collaboration-tools-scores';
import { IP_JSON_AI_QUOTA_SCORES } from './ip-json-ai-scores';
import { PACKAGE_HOSTING_QUOTA_SCORES } from './package-hosting-scores';
import './api-utility-quotas';
import './cms-platform-quotas';
import './code-generation-quotas';
import './code-quality-quotas';
import './delivery-automation-quotas';
import './developer-utility-quotas';
import './security-platform-quotas';
import './security-platform-quotas-more';
import './identity-access-quotas';
import './identity-access-quotas-more';
import './mobile-distribution-quotas';
import './infra-management-quotas';
import './testing-platform-quotas';
import './testing-platform-quotas-more';
import './collaboration-batch-quotas';
import './collaboration-services-quotas';
import './collaboration-tools-quotas';
import './package-hosting-quotas';

export const DATA_TOOLS_QUOTA_SCORES = {
  ...API_UTILITY_QUOTA_SCORES,
  ...CMS_PLATFORM_QUOTA_SCORES,
  ...CODE_GENERATION_QUOTA_SCORES,
  ...CODE_QUALITY_QUOTA_SCORES,
  ...DELIVERY_AUTOMATION_QUOTA_SCORES,
  ...DEVELOPER_UTILITY_QUOTA_SCORES,
  ...SECURITY_PLATFORM_QUOTA_SCORES,
  ...IDENTITY_ACCESS_QUOTA_SCORES,
  ...MOBILE_DISTRIBUTION_QUOTA_SCORES,
  ...INFRA_MANAGEMENT_QUOTA_SCORES,
  ...TESTING_PLATFORM_QUOTA_SCORES,
  ...COLLABORATION_BATCH_QUOTA_SCORES,
  ...COLLABORATION_SERVICES_QUOTA_SCORES,
  ...COLLABORATION_TOOLS_QUOTA_SCORES,
  ...IP_JSON_AI_QUOTA_SCORES,
  ...PACKAGE_HOSTING_QUOTA_SCORES,
  'data-fetcher': 15,
  'data-miner': 15,
  'dataimporter-io': 20,
  datalore: 20,
  'db-designer': 15,
  'db-ip': 15,
  deepar: 10,
  deepnote: 20,
  'compare-json': 20,
  'disease-sh': 15,
  doczilla: 15,
  doppio: 20,
  docpenny: 15,
  doqlo: 15,
  drawdb: 25,
  dynamicdocs: 10,
  'earnings-feed': 20,
  'export-sdk': 15,
  'extendsclass-rest-client': 20,
  'financial-data': 15,
  finlight: 20,
  firecrawl: 20,
  'format-json-online': 25,
  'fraudlabs-pro': 15,
  freeipapi: 25,
  'geolocated-io': 20,
} satisfies Record<string, 5 | 10 | 15 | 20 | 25>;
