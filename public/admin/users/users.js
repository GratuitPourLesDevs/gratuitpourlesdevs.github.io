(() => {
  const WORKER = 'https://gratuitpourlesdevs-oauth.gratuitpourlesdevsallianciasolutions.workers.dev';
  const SITE_ID = 'gratuitpourlesdevs.fr';
  const TOKEN_KEY = 'gpld-radar-admin-token';
  const $ = (id) => document.getElementById(id);
  let popup = null;
  let loading = false;
  let payload = null;
  let selectedUser = null;
  const state = { page: 1, limit: 20, query: '', plan: '' };

  const token = () => sessionStorage.getItem(TOKEN_KEY);
  const number = (value) => new Intl.NumberFormat('fr-FR').format(Number(value || 0));
  const dateTime = (value) => value ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(new Date(value)) : '—';

  function showLogin(message = '') {
    $('login').hidden = false;
    $('dashboard').hidden = true;
    $('login-status').textContent = message;
  }

  function showDashboard() {
    $('login').hidden = true;
    $('dashboard').hidden = false;
    void loadDashboard();
  }

  $('login-button').addEventListener('click', () => {
    popup = open(
      `${WORKER}/auth?provider=github&site_id=${encodeURIComponent(SITE_ID)}&origin=${encodeURIComponent(location.origin)}`,
      'gpld-users-auth',
      'popup,width=720,height=760',
    );
  });

  addEventListener('message', (event) => {
    if (event.origin !== new URL(WORKER).origin || event.source !== popup || typeof event.data !== 'string') return;
    if (event.data === 'authorizing:github') {
      popup.postMessage('authorizing:github', event.origin);
      return;
    }
    const prefix = 'authorization:github:success:';
    if (!event.data.startsWith(prefix)) return;
    try {
      const data = JSON.parse(event.data.slice(prefix.length));
      sessionStorage.setItem(TOKEN_KEY, data.token);
      popup?.close();
      showDashboard();
    } catch {
      showLogin('Connexion impossible.');
    }
  });

  async function api(path, options = {}) {
    const response = await fetch(WORKER + path, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
        Authorization: `Bearer ${token()}`,
      },
    });
    if (response.status === 401) {
      sessionStorage.removeItem(TOKEN_KEY);
      showLogin('Session expirée. Reconnectez-vous avec GitHub.');
      throw new Error('unauthorized');
    }
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data.error || `Erreur API (${response.status})`);
      error.detail = data.detail;
      throw error;
    }
    return data;
  }

  function td(text, className = '') {
    const cell = document.createElement('td');
    cell.textContent = text;
    if (className) cell.className = className;
    return cell;
  }

  function badge(text, className = '') {
    const node = document.createElement('span');
    node.className = `badge ${className}`.trim();
    node.textContent = text;
    return node;
  }

  function usageSummary(user) {
    const usage = user.usage || {};
    return [
      `${number(usage.favorites)} favoris`,
      `${number(usage.follows)} suivies`,
      `${number(usage.savedSearches)} recherches`,
      `${number(usage.watchedSearches)} veilles`,
      `${number(usage.savedComparisons)} comparaisons`,
      `${number(usage.stacks)} stack`,
    ];
  }

  function paintStats(stats) {
    $('stat-total').textContent = number(stats.total);
    $('stat-plans').textContent = `${number(stats.free)} Free · ${number(stats.pro)} Pro`;
    $('stat-active30').textContent = number(stats.active30d);
    $('stat-active7').textContent = `${number(stats.active7d)} sur 7 jours`;
    $('stat-new30').textContent = number(stats.new30d);
    $('stat-new7').textContent = `${number(stats.new7d)} sur 7 jours`;
    $('stat-sessions').textContent = number(stats.activeSessions);
    $('stat-session-users').textContent = `${number(stats.usersWithSessions)} utilisateurs connectés`;
    $('stat-verified').textContent = number(stats.verifiedEmails);
    $('stat-verified-pct').textContent = `${stats.verifiedEmailPercent || 0} % des comptes`;
    $('stat-interest').textContent = number(stats.proInterestedUsers);
    $('stat-interest-clicks').textContent = `${number(stats.proInterestClicks)} clics cumulés`;

    const providers = $('providers');
    providers.replaceChildren();
    const entries = Object.entries(stats.identitiesByProvider || {});
    if (!entries.length) {
      providers.textContent = 'Aucune identité enregistrée.';
      return;
    }
    const list = document.createElement('ul');
    list.className = 'audit-list';
    for (const [provider, data] of entries) {
      const li = document.createElement('li');
      li.append(badge(provider, 'provider'));
      const text = document.createElement('span');
      text.textContent = `${number(data.users)} utilisateurs · ${number(data.identities)} identités`;
      li.append(text);
      list.append(li);
    }
    providers.append(list);
  }

  function paintUsers(users) {
    const body = $('users-body');
    body.replaceChildren();
    if (!users?.length) {
      const row = document.createElement('tr');
      const cell = td('Aucun utilisateur ne correspond aux filtres.', 'empty');
      cell.colSpan = 9;
      row.append(cell);
      body.append(row);
      return;
    }
    for (const user of users) {
      const row = document.createElement('tr');

      const identity = document.createElement('td');
      const wrap = document.createElement('div');
      wrap.className = 'user-cell';
      const avatar = document.createElement('img');
      avatar.className = 'avatar';
      avatar.alt = '';
      if (user.avatarUrl) avatar.src = user.avatarUrl;
      const copy = document.createElement('span');
      const title = document.createElement('strong');
      title.textContent = user.accountLabel;
      const sub = document.createElement('small');
      sub.textContent = user.emailVerified && user.email ? user.email : (user.login ? `@${user.login}` : user.id);
      copy.append(title, sub);
      wrap.append(avatar, copy);
      identity.append(wrap);
      row.append(identity);

      const planCell = document.createElement('td');
      planCell.append(badge(user.plan === 'pro' ? 'PRO' : 'FREE', user.plan === 'pro' ? 'pro' : ''));
      if (user.overFreeLimits) planCell.append(document.createTextNode(' '), badge('hors quota', 'warn'));
      row.append(planCell);

      const providers = document.createElement('td');
      if (user.providers?.length) user.providers.forEach((provider) => providers.append(badge(provider, 'provider')));
      else providers.textContent = '—';
      row.append(providers);

      row.append(td(dateTime(user.lastLoginAt)), td(dateTime(user.createdAt)));

      const usage = document.createElement('td');
      usage.className = 'usage';
      for (const item of usageSummary(user)) {
        const small = document.createElement('small');
        small.textContent = item;
        usage.append(small);
      }
      row.append(usage);
      row.append(td(number(user.activeSessions)), td(user.proInterestClicks ? number(user.proInterestClicks) : '—'));

      const actions = document.createElement('td');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'button ghost';
      button.textContent = 'Gérer';
      button.addEventListener('click', () => openUser(user));
      actions.append(button);
      row.append(actions);
      body.append(row);
    }
  }

  function paintAudit(actions) {
    const root = $('audit-list');
    root.replaceChildren();
    if (!actions?.length) {
      const item = document.createElement('li');
      item.className = 'empty';
      item.textContent = 'Aucune action administrative enregistrée.';
      root.append(item);
      return;
    }
    for (const action of actions.slice(0, 15)) {
      const item = document.createElement('li');
      const type = badge(action.actionType === 'PLAN_CHANGED' ? 'PLAN' : 'SESSIONS');
      const copy = document.createElement('span');
      const strong = document.createElement('strong');
      strong.textContent = action.targetAccountLabel || action.targetUserId;
      const detail = document.createElement('small');
      detail.textContent = action.actionType === 'PLAN_CHANGED'
        ? `${action.oldValue || '—'} → ${action.newValue || '—'} par @${action.adminLogin}`
        : `${action.oldValue || '0'} session(s) révoquée(s) par @${action.adminLogin}`;
      copy.append(strong, detail);
      const time = document.createElement('small');
      time.textContent = dateTime(action.createdAt);
      item.append(type, copy, time);
      root.append(item);
    }
  }

  function paintPagination(pagination) {
    $('page-summary').textContent = `${number(pagination.total)} résultat(s) · page ${pagination.page} / ${pagination.pages}`;
    $('previous').disabled = pagination.page <= 1;
    $('next').disabled = pagination.page >= pagination.pages;
  }

  function detailItem(label, value) {
    const item = document.createElement('div');
    item.className = 'detail-item';
    const small = document.createElement('small');
    small.textContent = label;
    const strong = document.createElement('strong');
    strong.textContent = value || '—';
    item.append(small, strong);
    return item;
  }

  function openUser(user, { preserveStatus = false } = {}) {
    selectedUser = user;
    $('detail-title').textContent = user.accountLabel;
    $('detail-subtitle').textContent = `${user.emailVerified ? 'E-mail vérifié' : 'E-mail non vérifié'} · ${user.providers?.join(' + ') || 'provider historique'}`;
    $('detail-plan').value = user.plan;
    if (!preserveStatus) {
      $('detail-status').textContent = '';
      $('detail-status').className = 'status';
    }
    const grid = $('detail-grid');
    grid.replaceChildren(
      detailItem('Identifiant interne', user.id),
      detailItem('E-mail', user.email || '—'),
      detailItem('Login', user.login ? `@${user.login}` : '—'),
      detailItem('Dernière connexion', dateTime(user.lastLoginAt)),
      detailItem('Compte créé', dateTime(user.createdAt)),
      detailItem('Sessions actives', number(user.activeSessions)),
      detailItem('Favoris / suivies', `${number(user.usage.favorites)} / ${number(user.usage.follows)}`),
      detailItem('Recherches / surveillées', `${number(user.usage.savedSearches)} / ${number(user.usage.watchedSearches)}`),
      detailItem('Comparaisons / stacks', `${number(user.usage.savedComparisons)} / ${number(user.usage.stacks)}`),
      detailItem('Événements Search Watch', number(user.usage.searchWatchEvents)),
      detailItem('Intérêt Pro', user.proInterestClicks ? `${number(user.proInterestClicks)} clic(s)` : 'Aucun'),
      detailItem('Digest', user.digestEnabled ? 'Activé' : 'Désactivé'),
    );
    $('revoke-sessions').disabled = user.activeSessions <= 0;
    const dialog = $('user-dialog');
    if (!dialog.open) dialog.showModal();
  }

  async function loadDashboard() {
    if (loading) return;
    loading = true;
    try {
      const params = new URLSearchParams({ page: String(state.page), limit: String(state.limit) });
      if (state.query) params.set('q', state.query);
      if (state.plan) params.set('plan', state.plan);
      payload = await api(`/api/users/admin/dashboard?${params}`);
      paintStats(payload.stats || {});
      paintUsers(payload.users || []);
      paintAudit(payload.recentAdminActions || []);
      paintPagination(payload.pagination || { page: 1, pages: 1, total: 0 });
      $('admin-meta').textContent = `Connecté : @${payload.adminLogin}`;
      if (selectedUser) {
        const updated = (payload.users || []).find((user) => user.id === selectedUser.id);
        if (updated) selectedUser = updated;
      }
    } catch (error) {
      if (error.message !== 'unauthorized') $('page-summary').textContent = error.message || 'Chargement impossible.';
    } finally {
      loading = false;
    }
  }

  $('filters').addEventListener('submit', (event) => {
    event.preventDefault();
    state.query = $('query').value.trim();
    state.plan = $('plan').value;
    state.page = 1;
    void loadDashboard();
  });
  $('refresh').addEventListener('click', () => void loadDashboard());
  $('previous').addEventListener('click', () => { if (state.page > 1) { state.page--; void loadDashboard(); } });
  $('next').addEventListener('click', () => { if (payload?.pagination && state.page < payload.pagination.pages) { state.page++; void loadDashboard(); } });
  $('logout').addEventListener('click', () => { sessionStorage.removeItem(TOKEN_KEY); showLogin('Déconnecté.'); });
  $('detail-close').addEventListener('click', () => $('user-dialog').close());

  $('save-plan').addEventListener('click', async () => {
    if (!selectedUser) return;
    const userId = selectedUser.id;
    const nextPlan = $('detail-plan').value;
    if (nextPlan === selectedUser.plan) return;
    if (!confirm(`Passer ${selectedUser.accountLabel} du plan ${selectedUser.plan.toUpperCase()} au plan ${nextPlan.toUpperCase()} ?`)) {
      $('detail-plan').value = selectedUser.plan;
      return;
    }
    const status = $('detail-status');
    status.className = 'status';
    status.textContent = 'Modification du plan…';
    try {
      await api('/api/users/admin/plan', { method: 'POST', body: JSON.stringify({ userId, plan: nextPlan }) });
      status.className = 'status ok';
      status.textContent = 'Plan mis à jour et action auditée.';
      selectedUser.plan = nextPlan;
      await loadDashboard();
      const refreshed = payload?.users?.find((user) => user.id === userId);
      if (refreshed) openUser(refreshed, { preserveStatus: true });
    } catch (error) {
      status.className = 'status error';
      status.textContent = error.message || 'Modification impossible.';
    }
  });

  $('revoke-sessions').addEventListener('click', async () => {
    if (!selectedUser || selectedUser.activeSessions <= 0) return;
    const userId = selectedUser.id;
    if (!confirm(`Révoquer toutes les sessions de ${selectedUser.accountLabel} ? Le compte sera déconnecté sur tous ses appareils.`)) return;
    const status = $('detail-status');
    status.className = 'status';
    status.textContent = 'Révocation des sessions…';
    try {
      const result = await api('/api/users/admin/sessions/revoke', { method: 'POST', body: JSON.stringify({ userId }) });
      status.className = 'status ok';
      status.textContent = `${number(result.revoked)} session(s) révoquée(s).`;
      selectedUser.activeSessions = 0;
      $('revoke-sessions').disabled = true;
      await loadDashboard();
      const refreshed = payload?.users?.find((user) => user.id === userId);
      if (refreshed) openUser(refreshed, { preserveStatus: true });
    } catch (error) {
      status.className = 'status error';
      status.textContent = error.message || 'Révocation impossible.';
    }
  });

  if (token()) showDashboard();
  else showLogin();
})();
