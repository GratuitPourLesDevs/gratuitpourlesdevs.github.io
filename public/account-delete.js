(() => {
  const confirmAccountDeletion = () => new Promise((resolve) => {
    let dialog = document.querySelector('#account-delete-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'account-delete-dialog';
      dialog.className = 'account-confirm-dialog account-delete-dialog';
      dialog.setAttribute('aria-labelledby', 'account-delete-dialog-title');
      dialog.setAttribute('aria-describedby', 'account-delete-dialog-description');
      dialog.innerHTML = `
        <form method="dialog">
          <small>ACTION IRRÉVERSIBLE</small>
          <h2 id="account-delete-dialog-title">Supprimer votre compte ?</h2>
          <p id="account-delete-dialog-description">Cette action supprimera définitivement votre espace GratuitPourLesDevs et toutes les données qui lui sont associées :</p>
          <ul>
            <li>vos favoris synchronisés et offres suivies ;</li>
            <li>vos recherches et comparaisons sauvegardées ;</li>
            <li>votre stack, votre digest et vos préférences.</li>
          </ul>
          <p class="account-delete-dialog-warning">Cette suppression ne peut pas être annulée.</p>
          <div class="account-confirm-actions">
            <button class="account-secondary" type="submit" value="cancel">Conserver mon compte</button>
            <button class="account-danger" type="submit" value="confirm">Supprimer définitivement</button>
          </div>
        </form>`;
      document.body.append(dialog);
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close('cancel');
      });
    }

    dialog.returnValue = 'cancel';
    dialog.addEventListener('close', () => resolve(dialog.returnValue === 'confirm'), { once: true });
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else resolve(window.confirm('Supprimer définitivement votre compte et toutes les données associées ?'));
  });

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
      const confirmed = await confirmAccountDeletion();
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
