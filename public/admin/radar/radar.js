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
      'gpld-radar-auth',
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

  function number(value) {
    return new Intl.NumberFormat('fr-FR').format(Number(value || 0));
  }

  function dateTime(value) {
    if (!value) return '—';
    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'short',
      timeStyle: 'medium',
      timeZone: 'Europe/Paris',
    }).format(new Date(value));
  }

  function shortDate(value) {
    if (!value) return '—';
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Paris',
    }).format(new Date(value));
  }

  function duration(value) {
    const ms = Math.max(0, Number(value || 0));
    if (ms < 1000) return `${ms} ms`;
    if (ms < 60_000) return `${(ms / 1000).toFixed(ms < 10_000 ? 1 : 0)} s`;
    const minutes = Math.floor(ms / 60_000);
    const seconds = Math.floor((ms % 60_000) / 1000);
    return `${minutes} min ${seconds} s`;
  }

  function age(value) {
    if (!value) return '—';
    const diff = Math.max(0, Date.now() - Number(value));
    if (diff < 60_000) return '< 1 min';
    if (diff < 3_600_000) return `${Math.floor(diff / 60_000)} min`;
    if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)} h`;
    return `${Math.floor(diff / 86_400_000)} j`;
  }

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

  function paintRuns(runs) {
    const body = $('runs-body');
    body.replaceChildren();
    if (!runs?.length) {
      body.append(emptyRow(9, 'Aucun run enregistré.'));
      return;
    }
    for (const run of runs) {
      const row = document.createElement('tr');
      row.append(
        td(`#${run.id}`),
        td(dateTime(run.startedAt)),
        td(duration(run.durationMs)),
        td(run.status === 'success' ? 'SUCCESS' : 'ERROR', run.status === 'success' ? 'run-ok' : 'run-error'),
        td(number(run.offersSeen)),
        td(number(run.baselinesCreated)),
        td(number(run.offersChanged)),
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
      body.append(emptyRow(7, 'Aucun changement détecté : le journal est actuellement vide.'));
      return;
    }
    for (const event of events) {
      const row = document.createElement('tr');
      row.append(
        td(dateTime(event.detectedAt)),
        td(event.offerId),
        td(event.severity, `severity ${event.severity}`),
        td(event.eventType),
        td(event.field),
        td(event.verified ? 'Oui' : 'Non'),
      );
      const source = document.createElement('td');
      if (event.sourceUrl) {
        const link = document.createElement('a');
        link.href = event.sourceUrl;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.className = 'source-link';
        link.textContent = 'ouvrir ↗';
        source.append(link);
      } else {
        source.textContent = '—';
      }
      row.append(source);
      body.append(row);
    }
  }

  function paintBreakdown(containerId, entries) {
    const container = $(containerId);
    container.replaceChildren();
    const normalized = (entries || []).filter((entry) => Number(entry.count) > 0);
    if (!normalized.length) {
      const p = document.createElement('p');
      p.className = 'muted';
      p.textContent = 'Aucun événement pour le moment.';
      container.append(p);
      return;
    }
    const max = Math.max(...normalized.map((entry) => Number(entry.count)));
    for (const entry of normalized) {
      const row = document.createElement('div');
      row.className = 'bar-row';
      const label = document.createElement('span');
      label.textContent = entry.label;
      label.title = entry.label;
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
    $('scan-cron').textContent = `${data.schedules?.scanCron || '—'} · UTC`;
    $('weekly-cron').textContent = `${data.schedules?.weeklyDigestCron || '—'} · UTC`;
    $('next-scan').textContent = dateTime(data.schedules?.nextScanAt);
    $('next-weekly').textContent = dateTime(data.schedules?.nextWeeklyDigestAt);

    const lastRun = data.lastRun;
    $('last-run-age').textContent = lastRun ? age(lastRun.finishedAt) : '—';
    $('last-run-date').textContent = lastRun ? dateTime(lastRun.finishedAt) : 'Aucun run';
    $('offers-seen').textContent = number(lastRun?.offersSeen);
    $('baseline-count').textContent = number(data.baseline?.trackedStates);
    $('baseline-coverage').textContent = `${Number(data.baseline?.coveragePercent || 0).toLocaleString('fr-FR')} % du dernier catalogue`;
    $('events-total').textContent = number(data.events?.total);
    $('events-window').textContent = `${number(data.events?.last24h)} sur 24 h · ${number(data.events?.last7d)} sur 7 j`;
    $('critical-total').textContent = number(data.events?.critical);
    $('unverified-total').textContent = `${number(data.events?.unverified)} non vérifié(s)`;

    $('states-tracked').textContent = number(data.baseline?.trackedStates);
    $('states-changed').textContent = number(data.baseline?.statesChanged);
    $('first-observed').textContent = shortDate(data.baseline?.firstObservedAt);
    $('last-observed').textContent = shortDate(data.baseline?.lastObservedAt);
    $('last-changed').textContent = shortDate(data.baseline?.lastChangedAt);
    $('admin-meta').textContent = `${data.adminLogin || 'admin'} · actualisé ${dateTime(data.generatedAt)}`;

    paintRuns(data.runs);
    paintEvents(data.events?.recent);
    paintBreakdown('types-breakdown', (data.events?.topTypes || []).map((item) => ({ label: item.eventType, count: item.count })));
    const severities = data.events?.bySeverity || {};
    paintBreakdown('severity-breakdown', ['critical', 'important', 'info'].map((severity) => ({ label: severity, count: severities[severity] || 0 })));
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
      const data = await api('/api/radar/admin/dashboard?runs=30&events=30');
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
    if (!confirm('Lancer immédiatement un scan Free Tier Radar en production ?')) return;
    const button = $('run-now');
    button.disabled = true;
    $('refresh').disabled = true;
    $('action-status').className = 'status';
    $('action-status').textContent = 'Radar en cours d’exécution…';
    try {
      const payload = await api('/api/radar/admin/run', { method: 'POST', body: '{}' });
      const result = payload.result || {};
      $('action-status').className = 'status ok';
      $('action-status').textContent = `Run terminé : ${number(result.offersSeen)} offres, ${number(result.offersChanged)} modifiée(s), ${number(result.eventsCreated)} événement(s).`;
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
