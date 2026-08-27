(() => {
  const explorerControls = {
    resource: '#explorer-resource',
    period: '#explorer-period',
    scope: '#explorer-scope',
    overage: '#explorer-overage',
    card: '#explorer-card',
    permanent: '#explorer-permanent',
  };

  const account = () => window.GPLDAccount;
  const hasAccount = () => Boolean(account()?.getToken?.());
  const showToast = (message, options) => account()?.showToast?.(message, options);

  const currentExplorerFilters = () => {
    const value = (key) => document.querySelector(explorerControls[key])?.value ?? '';
    const booleanValue = (key) => {
      const raw = value(key);
      return raw === '' ? null : raw === 'true';
    };
    return {
      schemaVersion: 1,
      resource: value('resource') || 'storage',
      period: value('period'),
      scope: value('scope'),
      overage: value('overage'),
      cardRequired: booleanValue('card'),
      permanent: booleanValue('permanent'),
      minimumComparableValue: 0,
    };
  };

  const filterKey = (filters) => JSON.stringify({
    resource: filters?.resource ?? 'storage',
    period: filters?.period ?? 'month',
    scope: filters?.scope ?? 'account',
    overage: filters?.overage ?? '',
    cardRequired: filters?.cardRequired ?? null,
    permanent: filters?.permanent ?? null,
    minimumComparableValue: Number(filters?.minimumComparableValue ?? 0),
  });

  const currentRelativeUrl = () => `${location.pathname}${location.search}`;
  const currentSearchName = () => document.querySelector('#explorer-query-summary')?.textContent?.trim() || 'Recherche Explorer';

  let explorerPayload = null;
  let explorerSearch = null;
  let explorerButton = null;
  let refreshTimer = null;

  const renderExplorerWatchButton = () => {
    if (!explorerButton) return;
    const watched = Boolean(explorerSearch?.watchEnabled);
    explorerButton.classList.toggle('is-watched', watched);
    explorerButton.setAttribute('aria-pressed', String(watched));
    explorerButton.textContent = watched ? '🔔 Recherche surveillée ✓' : '🔔 Surveiller cette recherche';
    const limit = explorerPayload?.limits?.watchedSearches;
    const watchedCount = Number(explorerPayload?.watchedCount || 0);
    const frequency = explorerSearch?.watchFrequency === 'immediate' ? 'immédiate' : 'hebdomadaire';
    explorerButton.title = watched
      ? `Surveillance ${frequency}. Cliquer pour la désactiver.`
      : limit == null ? 'Activer la surveillance de cette recherche.' : `${watchedCount} / ${limit} recherche surveillée sur le compte gratuit.`;
  };

  const refreshExplorerState = async () => {
    explorerSearch = null;
    if (!hasAccount()) {
      explorerPayload = null;
      renderExplorerWatchButton();
      return;
    }
    try {
      explorerPayload = await account().api('/api/account/searches');
      const key = filterKey(currentExplorerFilters());
      explorerSearch = (explorerPayload.searches || []).find((item) => filterKey(item.filters) === key) || null;
    } catch {
      explorerPayload = null;
      explorerSearch = null;
    }
    renderExplorerWatchButton();
  };

  const saveCurrentExplorerSearch = async () => {
    if (explorerSearch) return explorerSearch;
    const payload = await account().api('/api/account/searches', {
      method: 'POST',
      body: JSON.stringify({
        name: currentSearchName(),
        url: currentRelativeUrl(),
        filters: currentExplorerFilters(),
      }),
    });
    explorerSearch = payload.search;
    await refreshExplorerState();
    return explorerSearch || payload.search;
  };

  const scheduleExplorerRefresh = () => {
    window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(() => { void refreshExplorerState(); }, 80);
  };

  const enhanceExplorer = () => {
    const actions = document.querySelector('.quota-explorer-result-actions');
    if (!actions || actions.querySelector('.account-watch-search')) return;
    const saveButton = actions.querySelector('.account-save-search');
    explorerButton = document.createElement('button');
    explorerButton.type = 'button';
    explorerButton.className = 'account-save-search account-watch-search';
    explorerButton.setAttribute('aria-pressed', 'false');
    explorerButton.textContent = '🔔 Surveiller cette recherche';
    if (saveButton) saveButton.insertAdjacentElement('afterend', explorerButton);
    else actions.prepend(explorerButton);

    explorerButton.addEventListener('click', async () => {
      try {
        await account().ensureLogin();
        const search = await saveCurrentExplorerSearch();
        const active = !search.watchEnabled;
        const result = await account().api('/api/account/searches/watch', {
          method: 'PUT',
          body: JSON.stringify({ id: search.id, active }),
        });
        explorerSearch = result.search;
        await refreshExplorerState();
        showToast(active
          ? 'Recherche surveillée. Sa situation actuelle sert de point de départ.'
          : 'Surveillance de la recherche désactivée.');
      } catch (error) {
        if (error?.payload?.code === 'free_limit') {
          showToast('Le compte gratuit permet de surveiller une recherche à la fois.', { pro: true });
        } else showToast(error.message || 'Impossible de modifier la surveillance.');
      }
      renderExplorerWatchButton();
    });

    saveButton?.addEventListener('click', () => window.setTimeout(() => { void refreshExplorerState(); }, 250));
    Object.values(explorerControls).forEach((selector) => document.querySelector(selector)?.addEventListener('change', scheduleExplorerRefresh));
    document.querySelector('#explorer-reset')?.addEventListener('click', scheduleExplorerRefresh);
    void refreshExplorerState();
  };

  const formatDate = (value) => value ? new Date(value).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

  const enhanceAccountSearchList = async () => {
    const root = document.querySelector('#searches-list');
    if (!root || !hasAccount()) return;
    let payload;
    try { payload = await account().api('/api/account/searches'); } catch { return; }
    const searches = payload.searches || [];
    const byUrl = new Map(searches.map((search) => [new URL(search.url, location.origin).pathname + new URL(search.url, location.origin).search, search]));

    [...root.querySelectorAll('li')].forEach((li) => {
      const link = li.querySelector('a[href]');
      if (!link || li.classList.contains('account-empty')) return;
      const absolute = new URL(link.getAttribute('href'), location.origin);
      const search = byUrl.get(`${absolute.pathname}${absolute.search}`) || searches.find((item) => item.name === link.textContent?.trim());
      if (!search) return;
      const detail = li.querySelector('span');
      let status = detail?.querySelector('.search-watch-status');
      if (!status) {
        status = document.createElement('small');
        status.className = 'search-watch-status';
        detail?.append(status);
      }
      status.textContent = search.watchEnabled
        ? `🔔 Surveillée · ${search.watchFrequency === 'immediate' ? 'immédiat' : 'hebdomadaire'}${search.lastEvaluatedAt ? ` · évaluée ${formatDate(search.lastEvaluatedAt)}` : ''}`
        : 'Non surveillée';
      status.classList.toggle('is-active', Boolean(search.watchEnabled));

      let toggle = li.querySelector('.search-watch-toggle');
      if (!toggle) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'search-watch-toggle';
        const deleteButton = [...li.querySelectorAll('button')].find((button) => button.textContent?.trim() === 'Supprimer');
        if (deleteButton) li.insertBefore(toggle, deleteButton);
        else li.append(toggle);
      }
      toggle.textContent = search.watchEnabled ? 'Désactiver la veille' : 'Surveiller';
      toggle.setAttribute('aria-pressed', String(search.watchEnabled));
      toggle.onclick = async () => {
        try {
          await account().api('/api/account/searches/watch', {
            method: 'PUT',
            body: JSON.stringify({ id: search.id, active: !search.watchEnabled }),
          });
          showToast(search.watchEnabled ? 'Surveillance désactivée.' : 'Recherche surveillée.');
          await enhanceAccountSearchList();
          await renderWatchActivity();
        } catch (error) {
          if (error?.payload?.code === 'free_limit') showToast('Le compte gratuit permet de surveiller une recherche à la fois.', { pro: true });
          else showToast(error.message || 'Modification impossible.');
        }
      };
    });

    const card = root.closest('.account-card');
    let summary = card?.querySelector('.search-watch-summary');
    if (!summary && card) {
      summary = document.createElement('p');
      summary.className = 'search-watch-summary';
      root.before(summary);
    }
    if (summary) {
      const limit = payload.limits?.watchedSearches;
      const count = Number(payload.watchedCount || 0);
      summary.textContent = limit == null
        ? `${count} recherche${count > 1 ? 's' : ''} surveillée${count > 1 ? 's' : ''} · fréquence configurable`
        : `${count} / ${limit} recherche surveillée · fréquence hebdomadaire sur le compte gratuit`;
      summary.classList.toggle('is-full', limit != null && count >= limit);
    }
  };

  const eventLabel = (event) => event.eventType === 'MATCH_ADDED'
    ? `${event.offerId} correspond maintenant à « ${event.searchName} »`
    : `${event.offerId} ne correspond plus à « ${event.searchName} »`;

  const renderWatchActivity = async () => {
    const searchesRoot = document.querySelector('#searches-list');
    const card = searchesRoot?.closest('.account-card');
    if (!card || !hasAccount()) return;
    let payload;
    try { payload = await account().api('/api/account/search-watch/events?limit=6'); } catch { return; }
    let section = card.querySelector('.search-watch-activity');
    if (!section) {
      section = document.createElement('section');
      section.className = 'search-watch-activity';
      section.innerHTML = '<small>ACTIVITÉ DES RECHERCHES</small><ul></ul>';
      card.append(section);
    }
    const list = section.querySelector('ul');
    const events = payload.events || [];
    if (!events.length) {
      const li = document.createElement('li');
      li.className = 'search-watch-empty';
      li.textContent = 'Aucun changement détecté pour vos recherches surveillées.';
      list.replaceChildren(li);
      return;
    }
    list.replaceChildren(...events.map((event) => {
      const li = document.createElement('li');
      li.className = `search-watch-event severity-${event.severity || 'info'}`;
      const link = document.createElement('a');
      link.href = `/offres/${encodeURIComponent(event.offerId)}/`;
      link.textContent = eventLabel(event);
      const meta = document.createElement('small');
      const radar = event.radarEventType ? ` · ${event.radarEventType}` : '';
      meta.textContent = `${formatDate(event.detectedAt)}${radar}`;
      li.append(link, meta);
      return li;
    }));
  };

  let accountEnhanceTimer = null;
  const scheduleAccountEnhance = () => {
    window.clearTimeout(accountEnhanceTimer);
    accountEnhanceTimer = window.setTimeout(() => {
      void enhanceAccountSearchList();
      void renderWatchActivity();
    }, 100);
  };

  const enhanceAccountPage = () => {
    const root = document.querySelector('#searches-list');
    if (!root) return;
    const observer = new MutationObserver(scheduleAccountEnhance);
    observer.observe(root, { childList: true });
    scheduleAccountEnhance();
  };

  const boot = () => {
    enhanceExplorer();
    enhanceAccountPage();
  };

  document.addEventListener('gpld:account-ready', () => {
    void refreshExplorerState();
    scheduleAccountEnhance();
  });
  document.addEventListener('gpld:account-changed', () => {
    void refreshExplorerState();
    scheduleAccountEnhance();
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
