(() => {
  const boot = () => {
    const actions = document.querySelector('#account-profile-card .account-profile-actions');
    if (!actions || actions.querySelector('#account-delete')) return;
    const button = document.createElement('button');
    button.id = 'account-delete';
    button.type = 'button';
    button.className = 'account-danger';
    button.textContent = 'Supprimer mon compte';
    button.addEventListener('click', async () => {
      const account = window.GPLDAccount;
      if (!account?.getToken()) return;
      const confirmed = window.confirm('Supprimer définitivement votre compte GratuitPourLesDevs, vos favoris synchronisés, votre veille, vos sauvegardes et votre stack ? Cette action est irréversible.');
      if (!confirmed) return;
      button.disabled = true;
      button.textContent = 'Suppression…';
      try {
        await account.api('/api/account/delete', { method: 'DELETE' });
        await account.logout();
        try { localStorage.removeItem('gpld-account-token'); localStorage.removeItem('gpld-account-user'); } catch {}
        location.replace('/');
      } catch (error) {
        button.disabled = false;
        button.textContent = 'Supprimer mon compte';
        account.showToast(error.message || 'Impossible de supprimer le compte.');
      }
    });
    actions.append(button);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
