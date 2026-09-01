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
  const confirmWatchPause = (search) => {
    if (!search?.watchEnabled) return Promise.resolve(true);
    const name = search.name || 'cette recherche';
    const options = {
      eyebrow: 'SURVEILLANCE',
      title: `Mettre « ${name} » en pause ?`,
      description: 'GPLD cessera de réévaluer cette recherche et de signaler ses changements. La recherche restera sauvegardée et pourra être réactivée à tout moment.',
      confirmLabel: 'Mettre en pause',
    };
    if (typeof window.GPLDConfirmAccountAction === 'function') return window.GPLDConfirmAccountAction(options);
    return new Promise((resolve) => {
      let dialog = document.querySelector('#search-watch-pause-dialog');
      if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.id = 'search-watch-pause-dialog';
        dialog.className = 'account-confirm-dialog';
        dialog.setAttribute('aria-labelledby', 'search-watch-pause-title');
        dialog.setAttribute('aria-describedby', 'search-watch-pause-description');
        dialog.innerHTML = '<form method="dialog"><small>SURVEILLANCE</small><h2 id="search-watch-pause-title"></h2><p id="search-watch-pause-description"></p><div class="account-confirm-actions"><button class="account-secondary" type="submit" value="cancel">Annuler</button><button class="account-danger" type="submit" value="confirm">Mettre en pause</button></div></form>';
        document.body.append(dialog);
        dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close('cancel'); });
      }
      dialog.querySelector('#search-watch-pause-title').textContent = options.title;
      dialog.querySelector('#search-watch-pause-description').textContent = options.description;
      dialog.returnValue = 'cancel';
      dialog.addEventListener('close', () => resolve(dialog.returnValue === 'confirm'), { once: true });
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else resolve(window.confirm(`${options.title}\n\n${options.description}`));
    });
  };

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
      minimumComparableValue: null,
    };
  };

  const filterKey = (filters) => JSON.stringify({
    resource: filters?.resource ?? 'storage',
    period: filters?.period ?? 'month',
    scope: filters?.scope ?? 'account',
    overage: filters?.overage ?? '',
    cardRequired: filters?.cardRequired ?? null,
    permanent: filters?.permanent ?? null,
    minimumComparableValue: filters?.minimumComparableValue ?? null,
  });

  const currentRelativeUrl = () => {
    const filters = currentExplorerFilters();
    const params = new URLSearchParams();
    params.set('resource', filters.resource);
    params.set('period', filters.period);
    params.set('scope', filters.scope);
    params.set('overage', filters.overage);
    params.set('card', filters.cardRequired === null ? '' : String(filters.cardRequired));
    params.set('permanent', filters.permanent === null ? '' : String(filters.permanent));
    return `/explorer/?${params.toString()}`;
  };
  const currentSearchName = () => document.querySelector('#explorer-query-summary')?.textContent?.trim() || 'Recherche Explorer';

  let explorerPayload = null;
  let explorerSearch = null;
  let explorerSaveButton = null;
  let explorerButton = null;
  let refreshTimer = null;

  const renderExplorerButtons = () => {
    if (explorerSaveButton) {
      explorerSaveButton.textContent = explorerSearch ? '✓ Recherche sauvegardée' : 'Sauvegarder la recherche';
      explorerSaveButton.classList.toggle('is-saved', Boolean(explorerSearch));
    }
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
      renderExplorerButtons();
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
    renderExplorerButtons();
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

    const legacySaveButton = actions.querySelector('.account-save-search');
    if (legacySaveButton) {
      explorerSaveButton = legacySaveButton.cloneNode(true);
      legacySaveButton.replaceWith(explorerSaveButton);
    } else {
      explorerSaveButton = document.createElement('button');
      explorerSaveButton.type = 'button';
      explorerSaveButton.className = 'account-save-search';
      explorerSaveButton.textContent = 'Sauvegarder la recherche';
      actions.prepend(explorerSaveButton);
    }

    explorerButton = document.createElement('button');
    explorerButton.type = 'button';
    explorerButton.className = 'account-save-search account-watch-search';
    explorerButton.setAttribute('aria-pressed', 'false');
    explorerButton.textContent = '🔔 Surveiller cette recherche';
    explorerSaveButton.insertAdjacentElement('afterend', explorerButton);

    explorerSaveButton.addEventListener('click', async () => {
      try {
        await account().ensureLogin();
        await saveCurrentExplorerSearch();
        renderExplorerButtons();
        showToast('Recherche enregistrée dans Mon espace.');
      } catch (error) {
        if (error?.payload?.code === 'free_limit') showToast('Vous avez atteint la limite de recherches du compte gratuit.', { pro: true });
        else showToast(error.message || 'Impossible de sauvegarder cette recherche.');
      }
    });

    explorerButton.addEventListener('click', async () => {
      try {
        await account().ensureLogin();
        const search = await saveCurrentExplorerSearch();
        if (!await confirmWatchPause(search)) return;
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
      renderExplorerButtons();
    });

    Object.values(explorerControls).forEach((selector) => document.querySelector(selector)?.addEventListener('change', scheduleExplorerRefresh));
    document.querySelector('#explorer-reset')?.addEventListener('click', scheduleExplorerRefresh);
    void refreshExplorerState();
  };

  const formatDateTime = (value) => value ? new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris',
  }).format(new Date(value)) : 'jamais';

  const eventLabel = (event) => {
    if (event.eventType === 'MATCH_ADDED') return `${event.offerId} correspond maintenant à « ${event.searchName} »`;
    if (event.eventType === 'MATCH_REMOVED') return `${event.offerId} ne correspond plus à « ${event.searchName} »`;
    return `${event.offerId} reste compatible avec « ${event.searchName} », mais un changement critique a été détecté`;
  };

  function ensureAccountWatchSection() {
    const searchesRoot = document.querySelector('#searches-list');
    const anchor = searchesRoot?.closest('.account-section');
    if (!anchor) return null;
    let section = document.querySelector('#account-search-watch-section');
    if (section) return section;

    section = document.createElement('section');
    section.className = 'account-section account-search-watch-section';
    section.id = 'account-search-watch-section';
    section.innerHTML = `
      <header>
        <div><small>VOTRE VEILLE AUTOMATIQUE</small><h2>Recherches surveillées</h2></div>
        <p>GPLD réévalue vos critères et vous signale les offres qui entrent, sortent ou deviennent critiques.</p>
      </header>
      <div class="account-grid">
        <article class="account-card account-card--with-limit search-watch-card">
          <small>SURVEILLANCE ACTIVE</small>
          <h3>Mes recherches <span class="account-limit account-limit--prominent" id="watched-search-limit">0 / 1</span></h3>
          <p class="search-watch-native-summary" id="watched-search-summary">Compte gratuit : une recherche surveillée, évaluée chaque semaine.</p>
          <ul class="account-list search-watch-native-list" id="watched-searches-list"></ul>
          <p><a href="/explorer/">Créer ou modifier une recherche →</a></p>
        </article>
        <article class="account-card search-watch-card">
          <small>ACTIVITÉ RÉCENTE</small>
          <h3>Ce qui a changé</h3>
          <p>Les nouvelles correspondances, sorties et changements critiques apparaissent ici.</p>
          <ul class="search-watch-native-events" id="search-watch-activity-list"></ul>
        </article>
      </div>`;
    anchor.before(section);
    return section;
  }

  function tuneAccountCopy() {
    const stat = document.querySelector('#stat-watched');
    const statLabel = stat?.nextElementSibling;
    if (statLabel) statLabel.textContent = 'recherche surveillée';

    const benefitArticles = document.querySelectorAll('.account-benefits article');
    const third = benefitArticles[2];
    if (third) {
      const strong = third.querySelector('strong');
      const paragraph = third.querySelector('p');
      if (strong) strong.textContent = 'Recherches et veille automatique';
      if (paragraph) paragraph.textContent = 'Sauvegardez trois recherches et surveillez-en une gratuitement chaque semaine.';
    }

    document.querySelectorAll('#pro li').forEach((item) => {
      if (item.textContent?.trim() === 'Recherches surveillées') item.textContent = 'Recherches surveillées illimitées';
      if (item.textContent?.trim() === 'Alertes immédiates') item.textContent = 'Évaluation après chaque passage du Radar';
    });
  }

  async function toggleWatch(search) {
    if (!await confirmWatchPause(search)) return;
    try {
      await account().api('/api/account/searches/watch', {
        method: 'PUT',
        body: JSON.stringify({ id: search.id, active: !search.watchEnabled }),
      });
      showToast(search.watchEnabled ? 'Surveillance désactivée.' : 'Recherche surveillée.');
      await renderAccountWatchArea();
      document.dispatchEvent(new CustomEvent('gpld:account-changed'));
    } catch (error) {
      if (error?.payload?.code === 'free_limit') showToast('Le compte gratuit permet de surveiller une recherche à la fois.', { pro: true });
      else showToast(error.message || 'Modification impossible.');
    }
  }

  function renderWatchedSearches(searches, payload) {
    const root = document.querySelector('#watched-searches-list');
    const limitNode = document.querySelector('#watched-search-limit');
    const summary = document.querySelector('#watched-search-summary');
    const stat = document.querySelector('#stat-watched');
    if (!root) return;
    const watched = searches.filter((search) => search.watchEnabled);
    const limit = payload.limits?.watchedSearches;
    const display = limit == null ? `${watched.length} / ∞` : `${watched.length} / ${limit}`;
    if (limitNode) {
      limitNode.textContent = display;
      limitNode.classList.toggle('is-full', limit != null && watched.length >= limit);
    }
    if (stat) stat.textContent = display;
    if (summary) summary.textContent = limit == null
      ? `${watched.length} recherche${watched.length > 1 ? 's' : ''} surveillée${watched.length > 1 ? 's' : ''} · fréquence configurable avec Pro.`
      : `${watched.length} / ${limit} recherche surveillée · évaluation hebdomadaire sur le compte gratuit.`;

    if (!watched.length) {
      const li = document.createElement('li');
      li.className = 'account-empty';
      li.textContent = 'Aucune recherche surveillée. Activez une veille depuis l’Explorateur ou une recherche sauvegardée.';
      root.replaceChildren(li);
      return;
    }

    root.replaceChildren(...watched.map((search) => {
      const li = document.createElement('li');
      li.className = 'search-watch-native-item';
      const body = document.createElement('span');
      const link = document.createElement('a');
      link.href = search.url;
      link.textContent = search.name;
      const detail = document.createElement('small');
      const frequency = search.watchFrequency === 'immediate' ? 'immédiate' : 'hebdomadaire';
      detail.textContent = `${search.matchCount || 0} correspondance${search.matchCount === 1 ? '' : 's'} · veille ${frequency} · évaluée ${formatDateTime(search.lastEvaluatedAt)}`;
      body.append(link, detail);
      const actions = document.createElement('nav');
      const open = document.createElement('a');
      open.href = search.url;
      open.textContent = 'Voir les résultats';
      const disable = document.createElement('button');
      disable.type = 'button';
      disable.className = 'search-watch-toggle';
      disable.textContent = 'Mettre en pause';
      disable.setAttribute('aria-pressed', 'true');
      disable.addEventListener('click', () => void toggleWatch(search));
      actions.append(open, disable);
      li.append(body, actions);
      return li;
    }));
  }

  function enhanceSavedSearchList(searches) {
    const root = document.querySelector('#searches-list');
    if (!root) return;
    const byUrl = new Map(searches.map((search) => {
      const absolute = new URL(search.url, location.origin);
      return [`${absolute.pathname}${absolute.search}`, search];
    }));

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
        ? `🔔 Surveillée · ${search.matchCount || 0} correspondance${search.matchCount === 1 ? '' : 's'} · évaluée ${formatDateTime(search.lastEvaluatedAt)}`
        : 'Recherche sauvegardée · veille inactive';
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
      toggle.textContent = search.watchEnabled ? 'Mettre en pause' : 'Surveiller';
      toggle.setAttribute('aria-pressed', String(search.watchEnabled));
      toggle.onclick = () => void toggleWatch(search);
    });
  }

  function renderWatchActivity(events) {
    const list = document.querySelector('#search-watch-activity-list');
    if (!list) return;
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
      meta.textContent = `${formatDateTime(event.detectedAt)}${event.radarEventType ? ` · ${event.radarEventType}` : ''}`;
      li.append(link, meta);
      return li;
    }));
  }

  let renderingAccount = false;
  async function renderAccountWatchArea() {
    ensureAccountWatchSection();
    tuneAccountCopy();
    if (!document.querySelector('#searches-list') || !hasAccount() || renderingAccount) return;
    renderingAccount = true;
    try {
      const [payload, activity] = await Promise.all([
        account().api('/api/account/searches'),
        account().api('/api/account/search-watch/events?limit=8'),
      ]);
      const searches = payload.searches || [];
      renderWatchedSearches(searches, payload);
      enhanceSavedSearchList(searches);
      renderWatchActivity(activity.events || []);
    } catch {
      // Le tableau de bord principal du compte reste utilisable même si Search Watch est momentanément indisponible.
    } finally {
      renderingAccount = false;
    }
  }

  let accountEnhanceTimer = null;
  const scheduleAccountEnhance = () => {
    window.clearTimeout(accountEnhanceTimer);
    accountEnhanceTimer = window.setTimeout(() => { void renderAccountWatchArea(); }, 100);
  };

  const enhanceAccountPage = () => {
    const root = document.querySelector('#searches-list');
    if (!root) return;
    ensureAccountWatchSection();
    tuneAccountCopy();
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
