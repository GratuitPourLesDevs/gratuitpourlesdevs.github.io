(() => {
  const TOKEN_KEY = 'gpld-account-token';
  const USER_KEY = 'gpld-account-user';
  const FAVORITES_KEY = 'gpld-favorites';
  const PENDING_STACK_KEY = 'gpld-pending-stack-offer';
  const apiBase = () => {
    const body = document.body;
    const local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
    return (local ? body?.dataset.comparisonsApiLocal : body?.dataset.comparisonsApi) || '';
  };
  const getToken = () => { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } };
  const getCachedUser = () => { try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; } };
  const setSession = (token, user) => {
    try {
      if (token) localStorage.setItem(TOKEN_KEY, token); else localStorage.removeItem(TOKEN_KEY);
      if (user) localStorage.setItem(USER_KEY, JSON.stringify(user)); else localStorage.removeItem(USER_KEY);
    } catch {}
    updateAccountLink(user);
    document.dispatchEvent(new CustomEvent('gpld:account-changed', { detail: { user } }));
  };
  const clearSession = () => setSession(null, null);
  const api = async (path, options = {}) => {
    const base = apiBase();
    if (!base) throw new Error('API indisponible');
    const headers = new Headers(options.headers || {});
    const token = getToken();
    if (token) headers.set('Authorization', `Bearer ${token}`);
    if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
    const response = await fetch(`${base}${path}`, { ...options, headers });
    let payload = null;
    try { payload = await response.json(); } catch {}
    if (response.status === 401) clearSession();
    if (!response.ok) {
      const error = new Error(payload?.error || 'Une erreur est survenue');
      error.status = response.status;
      error.payload = payload;
      throw error;
    }
    return payload;
  };
  const updateAccountLink = (user = getCachedUser()) => {
    const link = document.querySelector('.account-header-link');
    if (!link) return;
    link.classList.toggle('is-connected', Boolean(user));
    link.setAttribute('aria-label', user ? `Mon espace — connecté en tant que ${user.login}` : 'Créer un compte ou se connecter');
    const label = link.querySelector('[data-account-label]');
    if (label) label.textContent = user ? 'Mon espace' : 'Compte';
  };
  const readLocalFavorites = () => {
    try {
      const value = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
      return Array.isArray(value) ? [...new Set(value.filter((id) => typeof id === 'string'))] : [];
    } catch { return []; }
  };
  const writeLocalFavorites = (ids) => {
    const normalized = [...new Set(ids)];
    try { localStorage.setItem(FAVORITES_KEY, JSON.stringify(normalized)); } catch {}
    renderFavoriteControls(new Set(normalized));
    document.dispatchEvent(new CustomEvent('gpld:favorites-synced', { detail: { ids: normalized } }));
  };
  const renderFavoriteControls = (saved) => {
    document.querySelectorAll('.favorite[data-id], .offer-page-favorite[data-id]').forEach((button) => {
      const id = button.dataset.id || '';
      const active = saved.has(id);
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
      if (button.classList.contains('offer-page-favorite')) {
        const label = button.querySelector('[data-action-label]');
        const action = active ? 'Retirer des favoris' : 'Ajouter aux favoris';
        if (label) label.textContent = active ? 'Favori ✓' : 'Favoris';
        else button.textContent = action;
        button.setAttribute('aria-label', action);
        button.setAttribute('title', action);
      }
    });
  };
  const syncFavorites = async () => {
    if (!getToken()) return readLocalFavorites();
    const payload = await api('/api/account/favorites/import', { method: 'POST', body: JSON.stringify({ offerIds: readLocalFavorites() }) });
    writeLocalFavorites(payload.offerIds || []);
    return payload.offerIds || [];
  };
  const syncOneFavorite = async (offerId, active) => {
    if (!getToken()) return;
    try { await api('/api/account/favorites', { method: 'POST', body: JSON.stringify({ offerId, active }) }); } catch {}
  };
  const showToast = (message, { pro = false } = {}) => {
    let toast = document.querySelector('.account-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'account-toast';
      toast.setAttribute('role', 'status');
      document.body.append(toast);
    }
    toast.replaceChildren(document.createTextNode(message));
    if (pro) {
      const link = document.createElement('a');
      link.href = '/compte/#pro';
      link.textContent = 'Découvrir Pro';
      toast.append(document.createTextNode(' '), link);
    }
    toast.classList.add('is-visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 4200);
  };
  const oauthUrl = (flow = 'popup') => {
    const base = apiBase();
    if (!base) throw new Error('API de compte indisponible');
    const returnTo = `${location.pathname}${location.search}${location.hash}`;
    return `${base}/account/auth?return_to=${encodeURIComponent(returnTo)}&flow=${encodeURIComponent(flow)}`;
  };
  const showLoginDialog = () => {
    let dialog = document.querySelector('.account-auth-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'account-auth-dialog';
      dialog.setAttribute('aria-labelledby', 'account-auth-dialog-title');

      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'account-auth-dialog-close';
      close.setAttribute('aria-label', 'Fermer');
      close.textContent = '×';

      const eyebrow = document.createElement('small');
      eyebrow.textContent = 'COMPTE GRATUIT';
      const title = document.createElement('h2');
      title.id = 'account-auth-dialog-title';
      title.textContent = 'Continuer avec GitHub';
      const description = document.createElement('p');
      description.textContent = 'GitHub va s’ouvrir dans cet onglet. Après autorisation, vous reviendrez automatiquement dans votre espace.';
      const privacy = document.createElement('p');
      privacy.className = 'account-auth-dialog-privacy';
      privacy.textContent = 'Seuls votre profil public et votre adresse e-mail vérifiée sont demandés. Aucun accès à vos dépôts.';

      const actions = document.createElement('div');
      actions.className = 'account-auth-dialog-actions';
      const continueLink = document.createElement('a');
      continueLink.className = 'account-primary';
      continueLink.textContent = 'Ouvrir GitHub';
      const cancel = document.createElement('button');
      cancel.type = 'button';
      cancel.className = 'account-secondary';
      cancel.textContent = 'Annuler';
      actions.append(continueLink, cancel);
      dialog.append(close, eyebrow, title, description, privacy, actions);
      document.body.append(dialog);
      close.addEventListener('click', () => dialog.close());
      cancel.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    }
    dialog.querySelector('a.account-primary').href = oauthUrl('redirect');
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  };
  const consumeRedirectSession = () => {
    const prefix = '#gpld-account=';
    if (!location.hash.startsWith(prefix)) return false;
    try {
      const value = location.hash.slice(prefix.length).replace(/-/g, '+').replace(/_/g, '/');
      const padded = value + '='.repeat((4 - value.length % 4) % 4);
      const bytes = Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
      const payload = JSON.parse(new TextDecoder().decode(bytes));
      if (payload.status !== 'success' || !payload.token) throw new Error(payload.message || 'Connexion impossible');
      setSession(payload.token, payload.user || null);
      const returnTo = typeof payload.returnTo === 'string' && payload.returnTo.startsWith('/') ? payload.returnTo : `${location.pathname}${location.search}`;
      history.replaceState({}, '', returnTo);
      return true;
    } catch (error) {
      history.replaceState({}, '', `${location.pathname}${location.search}`);
      showToast(error.message || 'Connexion impossible.');
      return false;
    }
  };
  const login = ({ redirect = false } = {}) => {
    if (redirect) {
      showLoginDialog();
      return Promise.resolve(null);
    }
    return new Promise((resolve, reject) => {
    const base = apiBase();
    if (!base) { reject(new Error('API de compte indisponible')); return; }
    const workerOrigin = new URL(base).origin;
    const popup = window.open(oauthUrl('popup'), 'gpld-account-auth', 'popup=yes,width=620,height=760');
    if (!popup) { reject(new Error('Autorisez les fenêtres contextuelles pour vous connecter.')); return; }
    let timeout;
    const finish = async (event) => {
      if (event.origin !== workerOrigin || event.source !== popup || typeof event.data !== 'string' || !event.data.startsWith('gpld-account:')) return;
      window.removeEventListener('message', finish);
      window.clearTimeout(timeout);
      const first = event.data.indexOf(':', 'gpld-account:'.length);
      const status = event.data.slice('gpld-account:'.length, first);
      let payload = {};
      try { payload = JSON.parse(event.data.slice(first + 1)); } catch {}
      if (status !== 'success' || !payload.token) { reject(new Error(payload.message || 'Connexion impossible')); return; }
      setSession(payload.token, payload.user || null);
      try { await syncFavorites(); } catch {}
      resolve(payload.user || null);
    };
    window.addEventListener('message', finish);
    timeout = window.setTimeout(() => {
      window.removeEventListener('message', finish);
      reject(new Error('La connexion a expiré.'));
    }, 5 * 60 * 1000);
    });
  };
  const ensureLogin = async () => getToken() ? getCachedUser() : login();
  const handleLimitError = (error) => {
    if (error?.payload?.code === 'free_limit') {
      showToast('Vous avez atteint la limite du compte gratuit.', { pro: true });
      return true;
    }
    return false;
  };
  const ensureOfferAccountActions = (nav) => {
    let panel = nav.querySelector('.offer-account-actions');
    if (panel) return panel;
    panel = document.createElement('section');
    panel.className = 'offer-account-actions';
    panel.innerHTML = '<small>MON ESPACE</small><div class="offer-account-action-list"></div><button class="offer-account-login-action" type="button"><span><strong>Connectez-vous pour personnaliser cette offre</strong><small>Suivez ses changements et ajoutez-la à votre stack.</small></span><em>Se connecter →</em></button>';
    nav.append(panel);
    panel.querySelector('.offer-account-login-action')?.addEventListener('click', () => login({ redirect: true }));
    return panel;
  };
  const renderOfferAccountActions = (panel) => panel.classList.toggle('is-connected', Boolean(getToken()));
  const injectFollowButton = async () => {
    const favorite = document.querySelector('.offer-page-favorite[data-id]');
    const nav = favorite?.closest('nav');
    if (!favorite || !nav || nav.querySelector('.offer-page-follow')) return;
    const offerId = favorite.dataset.id;
    const button = document.createElement('button');
    button.type = 'button';
    const panel = ensureOfferAccountActions(nav);
    const actionList = panel.querySelector('.offer-account-action-list');
    button.className = 'offer-page-follow offer-account-action';
    button.dataset.id = offerId;
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z"/><circle cx="12" cy="12" r="2.5"/></svg><span><strong data-action-label>Suivre les changements</strong><small data-action-context>Veille du compte</small></span><em data-follow-occupancy>0 / 5 offres</em>';
    actionList?.append(button);
    let followed = false;
    let followedCount = 0;
    let followedLimit = 5;
    if (getToken()) {
      try {
        const payload = await api('/api/account/follows');
        const followedIds = payload.offerIds || [];
        followed = followedIds.includes(offerId);
        followedCount = followedIds.length;
        followedLimit = payload.limit ?? '∞';
      } catch {}
    }
    const render = () => {
      renderOfferAccountActions(panel);
      button.classList.toggle('active', followed);
      button.setAttribute('aria-pressed', String(followed));
      const action = followed ? 'Ne plus suivre cette offre' : (getToken() ? 'Suivre cette offre' : 'Suivre avec un compte gratuit');
      const label = button.querySelector('[data-action-label]');
      const context = button.querySelector('[data-action-context]');
      const occupancy = button.querySelector('[data-follow-occupancy]');
      if (label) label.textContent = followed ? 'Offre suivie' : 'Suivre les changements';
      if (context) context.textContent = followed ? 'Présente dans votre veille' : 'Veille du compte';
      if (occupancy) occupancy.textContent = `${followedCount} / ${followedLimit} offre${followedCount > 1 ? 's' : ''}`;
      button.setAttribute('aria-label', action);
      button.setAttribute('title', action);
    };
    render();
    button.addEventListener('click', async () => {
      try {
        await ensureLogin();
        followed = !followed;
        await api('/api/account/follows', { method: 'POST', body: JSON.stringify({ offerId, active: followed }) });
        followedCount += followed ? 1 : -1;
        render();
        showToast(followed ? 'Offre ajoutée à votre veille.' : 'Offre retirée de votre veille.');
      } catch (error) {
        if (followed) followed = false;
        render();
        if (!handleLimitError(error)) showToast(error.message || 'Impossible de modifier la veille.');
      }
    });
  };
  const injectStackButton = async () => {
    const favorite = document.querySelector('.offer-page-favorite[data-id]');
    const nav = favorite?.closest('nav');
    if (!favorite || !nav || nav.querySelector('.offer-page-stack-action')) return;
    const panel = ensureOfferAccountActions(nav);
    const actionList = panel.querySelector('.offer-account-action-list');
    const offerId = favorite.dataset.id;
    const offerName = favorite.dataset.offerName || 'cette offre';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'offer-page-stack-action offer-account-action';
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 8 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg><span><strong data-stack-action-label>Ajouter à votre stack</strong><small data-stack-name>Compte gratuit</small></span><em data-stack-occupancy>Connexion requise</em>';
    actionList?.append(button);

    let stackState = null;
    const render = () => {
      renderOfferAccountActions(panel);
      const connected = Boolean(getToken() && stackState);
      const stack = stackState?.stack;
      const name = stack?.name || 'Ma stack';
      const offerIds = stack?.offerIds || [];
      const count = offerIds.length;
      const pro = stackState?.user?.plan === 'pro';
      const limit = pro ? null : Number(stackState?.limits?.stackOffers || 10);
      const present = offerIds.includes(offerId);
      const full = connected && !pro && count >= limit;
      const label = button.querySelector('[data-stack-action-label]');
      const nameNode = button.querySelector('[data-stack-name]');
      const occupancy = button.querySelector('[data-stack-occupancy]');

      if (label) label.textContent = !connected ? 'Ajouter à votre stack' : present ? `Déjà dans ${name}` : full ? `${name} est complète` : `Ajouter à ${name}`;
      if (nameNode) nameNode.textContent = connected ? name : 'Compte gratuit';
      if (occupancy) occupancy.textContent = connected ? `${count} / ${pro ? '∞' : limit} offre${count > 1 ? 's' : ''}` : 'Connexion requise';
      button.classList.toggle('active', present);
      button.classList.toggle('is-full', full);
      button.disabled = present || full;
      button.setAttribute('aria-label', !connected ? `Se connecter pour ajouter ${offerName} à une stack` : present ? `${offerName} est déjà dans ${name}` : full ? `${name} a atteint sa limite de ${limit} offres` : `Ajouter ${offerName} à ${name}`);
    };
    const refresh = async () => {
      if (!getToken()) { stackState = null; render(); return null; }
      try { stackState = await api('/api/account/dashboard'); }
      catch { stackState = null; }
      render();
      return stackState;
    };

    render();
    await refresh();
    const addToStack = async () => {
      try {
        const dashboard = await refresh();
        if (!dashboard) return;
        const stack = dashboard.stack;
        const offerIds = stack?.offerIds ? [...stack.offerIds] : [];
        if (offerIds.includes(offerId)) return;
        const saved = await api('/api/account/stack', { method: 'PUT', body: JSON.stringify({ name: stack?.name || 'Ma stack', offerIds: [...offerIds, offerId] }) });
        stackState.stack = saved;
        render();
        showToast(`${offerName} a été ajouté à ${saved.name}.`);
      } catch (error) {
        if (!handleLimitError(error)) showToast(error.message || 'Impossible d’ajouter cette offre à la stack.');
        await refresh();
      }
    };
    button.addEventListener('click', async () => {
      if (!getToken()) {
        try { sessionStorage.setItem(PENDING_STACK_KEY, offerId); } catch {}
        await login({ redirect: true });
        return;
      }
      await addToStack();
    });
    let pendingOfferId = null;
    try { pendingOfferId = sessionStorage.getItem(PENDING_STACK_KEY); } catch {}
    if (getToken() && pendingOfferId === offerId) {
      try { sessionStorage.removeItem(PENDING_STACK_KEY); } catch {}
      if (!button.disabled) await addToStack();
    }
  };
  const injectSaveSearch = () => {
    const actions = document.querySelector('.quota-explorer-result-actions');
    if (!actions || actions.querySelector('.account-save-search')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'account-save-search';
    button.textContent = 'Sauvegarder la recherche';
    actions.prepend(button);
    button.addEventListener('click', async () => {
      try {
        await ensureLogin();
        const summary = document.querySelector('#explorer-query-summary')?.textContent?.trim();
        await api('/api/account/searches', { method: 'POST', body: JSON.stringify({ name: summary || 'Recherche Explorer', url: `${location.pathname}${location.search}` }) });
        button.textContent = '✓ Recherche sauvegardée';
        showToast('Recherche enregistrée dans Mon espace.');
      } catch (error) {
        if (!handleLimitError(error)) showToast(error.message || 'Impossible de sauvegarder cette recherche.');
      }
    });
  };
  const injectSaveComparison = () => {
    const actions = document.querySelector('.comparison-dialog-actions');
    if (!actions || actions.querySelector('.account-save-comparison')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'account-save-comparison';
    button.textContent = 'Sauvegarder';
    actions.prepend(button);
    button.addEventListener('click', async () => {
      const ids = (new URLSearchParams(location.search).get('compare') || '').split(',').filter(Boolean).slice(0, 4);
      if (ids.length < 2) { showToast('Sélectionnez au moins deux offres.'); return; }
      try {
        await ensureLogin();
        const names = [...document.querySelectorAll('.comparison-offer-head strong')].map((node) => node.textContent?.trim()).filter(Boolean);
        const name = names.length >= 2 ? names.join(' × ') : `Comparaison de ${ids.length} offres`;
        await api('/api/account/comparisons', { method: 'POST', body: JSON.stringify({ name, offerIds: ids }) });
        button.textContent = '✓ Sauvegardée';
        showToast('Comparaison enregistrée dans Mon espace.');
      } catch (error) {
        if (!handleLimitError(error)) showToast(error.message || 'Impossible de sauvegarder cette comparaison.');
      }
    });
  };
  const boot = async () => {
    consumeRedirectSession();
    updateAccountLink();
    injectSaveSearch();
    injectSaveComparison();
    await injectFollowButton();
    await injectStackButton();
    if (getToken()) {
      try {
        const payload = await api('/api/account/me');
        setSession(getToken(), payload.user);
        await syncFavorites();
      } catch {}
    }
    document.dispatchEvent(new CustomEvent('gpld:account-ready', { detail: { user: getCachedUser() } }));
  };
  document.addEventListener('click', (event) => {
    const button = event.target.closest?.('.favorite[data-id], .offer-page-favorite[data-id]');
    if (!button) return;
    window.setTimeout(() => {
      const offerId = button.dataset.id || '';
      const active = readLocalFavorites().includes(offerId);
      void syncOneFavorite(offerId, active);
    }, 0);
  });
  window.GPLDAccount = {
    api,
    apiBase,
    login,
    logout: async () => {
      try { if (getToken()) await api('/api/account/logout', { method: 'POST' }); } catch {}
      clearSession();
    },
    ensureLogin,
    getToken,
    getUser: getCachedUser,
    syncFavorites,
    showToast,
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else void boot();
})();
