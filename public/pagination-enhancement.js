(() => {
  const init = () => {
    const pagination = document.querySelector('#pagination');
    const pageNumbers = document.querySelector('#page-numbers');
    const controls = pagination?.querySelector('.pagination-controls');
    if (!(pagination instanceof HTMLElement) || !(pageNumbers instanceof HTMLElement) || !(controls instanceof HTMLElement)) return;

    let pageStatus = controls.querySelector('.pagination-page-status');
    if (!(pageStatus instanceof HTMLElement)) {
      pageStatus = document.createElement('span');
      pageStatus.className = 'pagination-page-status';
      pageStatus.setAttribute('aria-hidden', 'true');
      pageNumbers.insertAdjacentElement('afterend', pageStatus);
    }

    let observer;
    const enhance = () => {
      observer?.disconnect();
      pageNumbers.querySelectorAll('.pagination-ellipsis').forEach((ellipsis) => ellipsis.remove());

      const buttons = [...pageNumbers.querySelectorAll('button')];
      const pageCount = buttons.length;
      if (!pageCount) {
        pageStatus.textContent = '';
        observer?.observe(pageNumbers, { childList: true });
        return;
      }

      const currentIndex = Math.max(0, buttons.findIndex((button) => button.getAttribute('aria-current') === 'page' || button.classList.contains('active')));
      const currentPage = currentIndex + 1;
      pageStatus.textContent = `Page ${currentPage} / ${pageCount}`;
      pageStatus.setAttribute('aria-label', `Page ${currentPage} sur ${pageCount}`);

      const visible = new Set();
      if (pageCount <= 7) {
        buttons.forEach((_, index) => visible.add(index));
      } else {
        visible.add(0);
        visible.add(pageCount - 1);
        for (let index = Math.max(0, currentIndex - 2); index <= Math.min(pageCount - 1, currentIndex + 2); index += 1) visible.add(index);
      }

      const visibleIndexes = [...visible].sort((a, b) => a - b);
      buttons.forEach((button, index) => { button.hidden = !visible.has(index); });

      visibleIndexes.slice(0, -1).forEach((index, position) => {
        const nextIndex = visibleIndexes[position + 1];
        if (nextIndex - index <= 1) return;
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '…';
        ellipsis.setAttribute('aria-hidden', 'true');
        buttons[index].insertAdjacentElement('afterend', ellipsis);
      });

      pagination.dataset.paginationEnhanced = 'true';
      observer?.observe(pageNumbers, { childList: true });
    };

    observer = new MutationObserver(enhance);
    observer.observe(pageNumbers, { childList: true });
    enhance();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
