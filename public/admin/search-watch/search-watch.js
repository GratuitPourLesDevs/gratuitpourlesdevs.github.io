(() => {
  const WORKER = 'https://gratuitpourlesdevs-oauth.gratuitpourlesdevsallianciasolutions.workers.dev';
  const SITE_ID = 'gratuitpourlesdevs.fr';
  const TOKEN_KEY = 'gpld-radar-admin-token';
  const $ = (id) => document.getElementById(id);
  let popup = null;
  let loading = false;

  const token = () => sessionStorage.getItem(TOKEN_KEY);

  function showLogin(message = '') {
    $('login').hidden = false;
    $('dashboard').hidden = true;
    $('login-status').textContent = message;
  }

  function showDashboard() {
    $('login').hidden = true;
    $('dashboard').hidden = false;
    loadDashboard();
  }

  $('login-button').addEventListener('click', () => {
    popup = open(
      `${WORKER}/auth?provider=github&site_id=${encodeURIComponent(SITE_ID)}&origin=${encodeURIComponent(location.origin)}`,
      'gpld-search-watch-auth',
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
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(payload.error || `Erreur API (${response.status})`);
      error.detail = payload.detail;
      throw error;
    }
    return payload;
  }

  const number = (value) => new Intl.NumberFormat('fr-FR').format(Number(value || 0));
  const dateTime = (value) => value ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short', timeStyle: 'medium', timeZone: 'Europe/Paris' }).format(new Date(value)) : '—';
  const duration = (value) => {
    const ms = Math.max(0, Number(value || 0));
    if (ms < 1000) return `${ms} ms`;
    if (ms < 60_000) return `${(ms / 1000).toFixed(ms < 10_000 ? 1 : 0)} s`;
    const minutes = Math.floor(ms / 60_000);
    const seconds = Math.floor((ms % 60_000) / 1000);
    return `${minutes} min ${seconds} s`;
  };

  function td(text, className = '') {
    const cell = document.createElement('td');
    cell.textContent = text;
    if (className) cell.className = className;
    return cell;
  }

  function emptyRow(colspan, text) {
    const row = document.createElement('tr');
    const cell = td(text, 'empty');
    cell.colSpan = colspan;
    row.append(cell);
    return row;
  }

  function setHealth(health) {
    const value = health || { code: 'uninitialized', label: 'Inconnu', detail: 'État indisponible.' };
    $('health-title').textContent = value.label;
    $('health-detail').textContent = value.detail;
    $('health-pill').textContent = value.label.toUpperCase();
    $('health-pill').className = `pill ${value.code}`;
  }

  function paintWatches(watches) {
    const body = $('watches-body');
    body.replaceChildren();
    if (!watches?.length) {
      body.append(emptyRow(8, 'Aucune recherche surveillée active.'));
      return;
    }
    for (const watch of watches) {
      const row = document.createElement('tr');
      if (watch.stale) row.className = 'stale-row';
      const search = document.createElement('td');
      const link = document.createElement('a');
      link.href = watch.url;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.className = 'watch-name';
      link.textContent = watch.name;
      const meta = document.createElement('span');
      meta.className = 'watch-meta';
      meta.textContent = `#${watch.id}`;
      search.append(link, meta);
      row.append(
        search,
        td(watch.login ? `@${watch.login}` : watch.userId),
        td(watch.plan === 'pro' ? 'Pro' : 'Free'),
        td(watch.frequency === 'immediate' ? 'Immédiate' : 'Hebdomadaire'),
        td(number(watch.matchCount)),
        td(dateTime(watch.watchStartedAt)),
        td(dateTime(watch.lastEvaluatedAt)),
        td(watch.stale ? 'EN RETARD' : 'OK', watch.stale ? 'run-error' : 'run-ok'),
      );
      body.append(row);
    }
  }

  function paintRuns(runs) {
    const body = $('runs-body');
    body.replaceChildren();
    if (!runs?.length) {
      body.append(emptyRow(11, 'Aucun run Search Watch enregistré.'));
      return;
    }
    for (const run of runs) {
      const row = document.createElement('tr');
      row.append(
        td(`#${run.id}`),
        td(dateTime(run.startedAt)),
        td(duration(run.durationMs)),
        td(run.status === 'success' ? 'SUCCESS' : 'ERROR', run.status === 'success' ? 'run-ok' : 'run-error'),
        td(run.trigger === 'manual' ? 'Manuel' : 'Cron'),
        td(run.frequencyScope),
        td(number(run.watchedSeen)),
        td(number(run.searchesEvaluated)),
        td(number(run.baselinesInitialized)),
        td(number(run.eventsCreated)),
        td(run.errorMessage || '—', run.errorMessage ? 'error-detail' : ''),
      );
      body.append(row);
    }
  }

  function paintEvents(events) {
    const body = $('events-body');
    body.replaceChildren();
    if (!events?.length) {
      body.append(emptyRow(7, 'Aucun événement Search Watch enregistré.'));
      return;
    }
    for (const event of events) {
      const row = document.createElement('tr');
      row.append(
        td(dateTime(event.detectedAt)),
        td(event.searchName),
        td(event.login ? `@${event.login}` : '—'),
        td(event.offerId),
        td(event.eventType),
        td(event.severity || '—', `severity ${event.severity || ''}`),
        td(event.radarEventType || '—'),
      );
      body.append(row);
    }
  }

  function paintBreakdown(containerId, entries) {
    const container = $(containerId);
    container.replaceChildren();
    const normalized = entries.filter((entry) => Number(entry.count) > 0);
    if (!normalized.length) {
      const p = document.createElement('p');
      p.className = 'muted';
      p.textContent = 'Aucune donnée pour le moment.';
      container.append(p);
      return;
    }
    const max = Math.max(...normalized.map((entry) => Number(entry.count)));
    for (const entry of normalized) {
      const row = document.createElement('div');
      row.className = 'bar-row';
      const label = document.createElement('span');
      label.textContent = entry.label;
      const bar = document.createElement('span');
      bar.className = 'bar';
      const fill = document.createElement('i');
      fill.style.width = `${Math.max(3, (Number(entry.count) / max) * 100)}%`;
      bar.append(fill);
      const count = document.createElement('b');
      count.textContent = number(entry.count);
      row.append(label, bar, count);
      container.append(row);
    }
  }

  function paint(data) {
    setHealth(data.health);
    $('immediate-cron').textContent = `${data.schedules?.immediateCron || '—'} · UTC`;
    $('weekly-cron').textContent = `${data.schedules?.weeklyCron || '—'} · UTC`;
    $('next-immediate').textContent = dateTime(data.schedules?.nextImmediateAt);
    $('next-weekly').textContent = dateTime(data.schedules?.nextWeeklyAt);

    $('saved-total').textContent = number(data.searches?.saved);
    $('watched-total').textContent = number(data.searches?.watched);
    $('frequency-total').textContent = `${number(data.searches?.weekly)} hebdo · ${number(data.searches?.immediate)} immédiate(s)`;
    $('users-total').textContent = number(data.searches?.users);
    const plans = data.searches?.byPlan || {};
    $('plans-total').textContent = `${number(plans.free)} Free · ${number(plans.pro)} Pro`;
    $('stale-total').textContent = number(data.searches?.stale);
    $('events-total').textContent = number(data.events?.total);
    $('events-window').textContent = `${number(data.events?.last24h)} sur 24 h · ${number(data.events?.last7d)} sur 7 j · ${number(data.events?.critical)} critique(s)`;
    $('admin-meta').textContent = `${data.adminLogin || 'admin'} · actualisé ${dateTime(data.generatedAt)}`;

    paintWatches(data.searches?.active);
    paintRuns(data.runs);
    paintEvents(data.events?.recent);
    paintBreakdown('types-breakdown', Object.entries(data.events?.byType || {}).map(([label, count]) => ({ label, count })));
    paintBreakdown('plans-breakdown', [
      { label: 'Free', count: plans.free || 0 },
      { label: 'Pro', count: plans.pro || 0 },
    ]);
  }

  async function loadDashboard({ silent = false } = {}) {
    if (loading) return;
    loading = true;
    $('dashboard').classList.add('loading');
    if (!silent) {
      $('action-status').className = 'status';
      $('action-status').textContent = 'Actualisation…';
    }
    try {
      const data = await api('/api/search-watch/admin/dashboard?runs=30&events=30&watches=100');
      paint(data);
      if (!silent) {
        $('action-status').className = 'status ok';
        $('action-status').textContent = 'Dashboard à jour.';
      }
    } catch (error) {
      if (error.message !== 'unauthorized') {
        $('action-status').className = 'status error';
        $('action-status').textContent = error.detail || error.message;
      }
    } finally {
      loading = false;
      $('dashboard').classList.remove('loading');
    }
  }

  $('refresh').addEventListener('click', () => loadDashboard());

  $('run-now').addEventListener('click', async () => {
    if (!confirm('Évaluer immédiatement toutes les recherches surveillées en production ?')) return;
    const button = $('run-now');
    button.disabled = true;
    $('refresh').disabled = true;
    $('action-status').className = 'status';
    $('action-status').textContent = 'Évaluation Search Watch en cours…';
    try {
      const payload = await api('/api/search-watch/admin/run', { method: 'POST', body: '{}' });
      const result = payload.result || {};
      $('action-status').className = 'status ok';
      $('action-status').textContent = `Run terminé : ${number(result.evaluated)} recherche(s) évaluée(s), ${number(result.events)} événement(s).`;
      await loadDashboard({ silent: true });
    } catch (error) {
      if (error.message !== 'unauthorized') {
        $('action-status').className = 'status error';
        $('action-status').textContent = error.detail || error.message;
      }
    } finally {
      button.disabled = false;
      $('refresh').disabled = false;
    }
  });

  $('logout').addEventListener('click', () => {
    sessionStorage.removeItem(TOKEN_KEY);
    showLogin();
  });

  setInterval(() => {
    if (!$('dashboard').hidden && document.visibilityState === 'visible') loadDashboard({ silent: true });
  }, 60_000);

  token() ? showDashboard() : showLogin();
})();
