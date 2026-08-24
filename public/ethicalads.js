(() => {
  const publisher = document.body?.dataset.ethicaladsPublisher?.trim();
  if (!publisher || location.pathname !== '/') return;

  const hero = document.querySelector('.hero');
  if (!hero || document.querySelector('[data-ethicalads-shell]')) return;

  const shell = document.createElement('aside');
  shell.className = 'ethicalads-shell';
  shell.dataset.ethicaladsShell = '';
  shell.setAttribute('aria-label', 'Publicité');

  const heading = document.createElement('div');
  heading.className = 'ethicalads-heading';
  heading.innerHTML = '<span>Publicité</span><small>Publicité contextuelle · sans profilage</small>';

  const placement = document.createElement('div');
  placement.className = 'ethicalads-placement';
  placement.dataset.eaPublisher = publisher;
  placement.dataset.eaType = 'image';
  placement.dataset.eaKeywords = 'developer-tools|cloud|api|devops|hosting|database|saas|programming';

  shell.append(heading, placement);
  hero.insertAdjacentElement('afterend', shell);

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://media.ethicalads.io/media/client/ethicalads.min.js';
  script.dataset.ethicaladsClient = '';
  document.head.append(script);
})();
