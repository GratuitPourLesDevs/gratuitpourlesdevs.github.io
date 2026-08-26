(() => {
  const roots = Array.from(document.querySelectorAll('[data-content-engagement]'));
  if (!roots.length) return;

  const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const apiBase = local ? document.body.dataset.comparisonsApiLocal : document.body.dataset.comparisonsApi;
  if (!apiBase) return;
  const storageKey = 'gpld-helpful-content-v1';
  let helpful = [];
  try { helpful = JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch {}
  const voted = new Set(Array.isArray(helpful) ? helpful : []);

  const idOf = (root) => `${root.dataset.contentType}:${root.dataset.contentKey}`;
  const update = (root, item = {}) => {
    const views = Number(item.views || 0);
    const helpfulCount = Number(item.helpful || 0);
    const viewRoot = root.querySelector('[data-engagement-views]');
    const viewCount = root.querySelector('[data-engagement-view-count]');
    const viewPlural = root.querySelector('[data-engagement-view-plural]');
    const button = root.querySelector('[data-engagement-helpful]');
    const count = root.querySelector('[data-engagement-helpful-count]');
    if (viewRoot && viewCount) {
      viewRoot.hidden = views < 1;
      viewCount.textContent = String(views);
      if (viewPlural) viewPlural.hidden = views === 1;
    }
    if (count) {
      count.hidden = helpfulCount < 1;
      count.textContent = helpfulCount > 0 ? String(helpfulCount) : '';
    }
    if (button) {
      const active = voted.has(idOf(root));
      button.classList.toggle('is-voted', active);
      button.setAttribute('aria-pressed', String(active));
    }
  };

  const request = async (path, options) => {
    const response = await fetch(`${apiBase}${path}`, options);
    if (!response.ok) throw new Error(`Engagement API: ${response.status}`);
    return response.json();
  };
  const post = (path, root) => request(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: root.dataset.contentType, key: root.dataset.contentKey }),
  });

  const items = [...new Set(roots.map(idOf))];
  for (let offset = 0; offset < items.length; offset += 50) {
    const chunk = items.slice(offset, offset + 50);
    request(`/api/content-engagement?items=${encodeURIComponent(chunk.join(','))}`)
      .then((payload) => (payload.items || []).forEach((item) => {
        roots.filter((root) => idOf(root) === `${item.type}:${item.key}`).forEach((root) => update(root, item));
      }))
      .catch(() => {});
  }

  const tracked = new Set();
  roots.filter((root) => root.dataset.trackView === 'true').forEach((root) => {
    const id = idOf(root);
    if (tracked.has(id)) return;
    tracked.add(id);
    post('/api/content-engagement/view', root).then(({ item }) => update(root, item)).catch(() => {});
  });

  roots.forEach((root) => {
    const button = root.querySelector('[data-engagement-helpful]');
    if (!button) return;
    update(root);
    button.addEventListener('click', async () => {
      const id = idOf(root);
      if (voted.has(id) || button.disabled) return;
      button.disabled = true;
      try {
        const { item } = await post('/api/content-engagement/helpful', root);
        voted.add(id);
        localStorage.setItem(storageKey, JSON.stringify([...voted]));
        update(root, item);
      } catch {
        button.disabled = false;
      }
    });
  });
})();
