(() => {
  const containers = [...document.querySelectorAll('[data-ad-placement][data-ad-preview="false"]')];
  if (!containers.length) return;
  const endpoint = `${document.body.dataset.comparisonsApi || 'https://gratuitpourlesdevs-oauth.gratuitpourlesdevsallianciasolutions.workers.dev'}/api/monetization/config`;
  const placementKeys = { 'catalogue-footer': 'catalogue', 'guide-middle': 'guide', 'offer-after-history': 'offer' };

  const hideAll = () => containers.forEach((container) => { container.hidden = true; });
  fetch(endpoint, { headers: { Accept: 'application/json' } })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error('configuration unavailable')))
    .then((config) => {
      if (!config.enabled || !/^ca-pub-\d+$/.test(config.clientId)) return hideAll();
      const active = containers.filter((container) => /^\d+$/.test(config.slots?.[placementKeys[container.dataset.adPlacement]] || ''));
      if (!active.length) return hideAll();
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.clientId)}`;
      document.head.append(script);
      active.forEach((container) => {
        const target = container.querySelector('.adsense-runtime-target');
        if (!target) return;
        const ad = document.createElement('ins');
        ad.className = 'adsbygoogle';
        ad.style.display = 'block';
        ad.dataset.adClient = config.clientId;
        ad.dataset.adSlot = config.slots[placementKeys[container.dataset.adPlacement]];
        ad.dataset.adFormat = 'auto';
        ad.dataset.fullWidthResponsive = 'true';
        target.replaceWith(ad);
        container.hidden = false;
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
      });
    })
    .catch(hideAll);
})();
