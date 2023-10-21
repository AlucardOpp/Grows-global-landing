const graphicItemControl = () => {
  const graphic = document.querySelector('.graphic');
  if (!graphic) {
    return;
  }

  const moonshotsPercent = graphic.querySelector('.graphic__percent--moonshots');
  const venturePercent = graphic.querySelector('.graphic__percent--venture');
  const stocksPercent = graphic.querySelector('.graphic__percent--stocks');
  const bondsPercent = graphic.querySelector('.graphic__percent--bonds');
  const cashPercent = graphic.querySelector('.graphic__percent--cash');

  document.addEventListener('mouseover', (evt) => {
    if (evt.target.classList.contains('graphic__field') && !evt.target.classList.contains('is-active')) {
      const items = evt.target.closest('.graphic__items');
      const activeItem = items.querySelector('.graphic__item.is-active');
      activeItem.classList.remove('is-active');
      const targetItem = evt.target.parentElement;
      targetItem.classList.add('is-active');
      const targetMoonshotsPercent = targetItem.dataset.moonshots;
      const targetVenturePercent = targetItem.dataset.venture;
      const targetStocksPercent = targetItem.dataset.stocks;
      const targetBondsPercent = targetItem.dataset.bonds;
      const targetCashPercent = targetItem.dataset.cash;
      moonshotsPercent.textContent = targetMoonshotsPercent;
      venturePercent.textContent = targetVenturePercent;
      stocksPercent.textContent = targetStocksPercent;
      bondsPercent.textContent = targetBondsPercent;
      cashPercent.textContent = targetCashPercent;
    }
  });
};

export {graphicItemControl};
