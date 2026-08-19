(() => {
  const enrichedOfferIds = new Set([
    'certkit', 'certobserver-ct-search', 'certpost', 'corgea', 'crypteron', 'cyberchef', 'datree', 'dependabot', 'dj-checkup', 'doppler',
    'dotenv', 'gitguardian', 'hasmysecretleaked', 'have-i-been-pwned', 'himitsushell', 'hostedscan', 'infisical', 'inspect-software', 'internet-nl', 'intodns-ai',
    'letsencrypt', 'meterian', 'mozilla-observatory', 'otterwatch', 'protectumus', 'public-cloud-threat-intelligence', 'pyup', 'qualys-community-edition', 'sikkerkey', 'smart-grow-vault',
    'socket', 'ssl-labs', 'sucuri-sitecheck', 'testtls', 'virgil-security', 'auth0', 'authgear', 'authress', 'authy', 'cerbos-hub',
    'clerk', 'cloud-iam', 'descope', 'duo', 'kinde', 'logintc', 'logto', 'mojoauth', 'okta', 'ory',
    'permit-io', 'phase-two', 'propelauth', 'scalekit', 'stack-auth', 'stytch', 'supertokens', 'workos', 'zitadel-cloud', 'apphost',
    'diawi', 'getupdraft', 'installonair', 'loadly', 'distapp', 'ably', 'cloudamqp', 'courier', 'emqx-serverless', 'engage',
    'engagespot', 'hivemq', 'httpsms', 'knock', 'novu', 'pingram', 'pocket-alert', 'pubnub', 'pusher', 'scaledrone',
    'smsgate', 'suprsend', 'synadia', 'webpushr', 'vask', 'logdog', 'logflare', 'logtail', 'logzab', 'manageengine-log360-cloud',
    'openobserve', 'smart-grow-logs',
  ]);

  const clean = (value) => value.trim().replace(/[.;:]+$/g, '');
  const lowerFirst = (value) => {
    const text = clean(value);
    return text ? `${text[0].toLocaleLowerCase('fr-FR')}${text.slice(1)}` : text;
  };
  const joinFrench = (values) => {
    const items = values.map(clean).filter(Boolean);
    if (items.length <= 1) return items[0] ?? '';
    if (items.length === 2) return `${items[0]} et ${items[1]}`;
    return `${items.slice(0, -1).join(', ')} et ${items.at(-1)}`;
  };
  const textOf = (element) => element?.textContent?.trim() ?? '';
  const listItems = (section, limit) => section
    ? [...section.querySelectorAll('li')].slice(0, limit).map((item) => lowerFirst(textOf(item))).filter(Boolean)
    : [];

  const enrichRow = (row) => {
    const id = row.dataset.id ?? '';
    if (!enrichedOfferIds.has(id)) return;

    const whyUseful = row.querySelector('.why-useful');
    if (!(whyUseful instanceof HTMLElement)) return;
    if (!/est référencé avec les limites gratuites vérifiées/i.test(whyUseful.textContent ?? '')) return;

    const name = textOf(row.querySelector('.offer-name-link'));
    const role = clean(textOf(row.querySelector('.identity-meta small')));
    const plan = clean(textOf(row.querySelector('.offer-plan strong')));
    const sections = [...row.querySelectorAll('.offer-detail > section')];
    const included = joinFrench(listItems(sections[0], 4));
    const restrictions = listItems(sections[2], 2);
    let usages = [];
    try { usages = JSON.parse(row.dataset.usages ?? '[]'); } catch {}
    const usageSummary = joinFrench(usages.slice(0, 3));
    const needsReview = Boolean(row.querySelector('.needs-review'));

    const sentences = needsReview
      ? [
          role ? `${name} couvre un besoin précis : ${lowerFirst(role)}.` : '',
          plan ? `Côté gratuit, la formule que nous pouvons documenter à ce jour est la suivante : ${plan}.` : '',
          included ? `Les éléments observés comprennent notamment ${included}.` : '',
          usageSummary ? `Le service peut être pertinent pour des usages liés à ${usageSummary}.` : '',
          restrictions.length ? `La fiche reste volontairement à vérifier : ${restrictions.join(' ; ')}.` : 'La fiche reste volontairement à vérifier avant un usage en production.',
        ]
      : [
          role ? `${name} répond à un besoin précis : ${lowerFirst(role)}.` : '',
          plan ? `Côté gratuit, la référence actuelle est la suivante : ${plan}.` : '',
          included ? `Concrètement, cette formule comprend notamment ${included}.` : '',
          usageSummary ? `Elle est surtout pertinente pour des usages liés à ${usageSummary}.` : '',
          restrictions.length ? `À garder en tête : ${restrictions.join(' ; ')}.` : '',
        ];

    const paragraph = document.createElement('p');
    paragraph.textContent = sentences.filter(Boolean).join(' ');
    [...whyUseful.children].filter((child) => child.tagName !== 'H3').forEach((child) => child.remove());
    whyUseful.append(paragraph);
  };

  const init = () => document.querySelectorAll('.offer-row').forEach((row) => enrichRow(row));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
