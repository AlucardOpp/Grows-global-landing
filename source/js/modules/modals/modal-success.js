import confetti from '../../vendor/confetti';
import {modals} from './init-modals';

const modal = document.querySelector('[data-modal="success"]');
const confettiDuration = 2000;
const confettiDelay = 500;

const modalSuccess = () => {
  if (!modal) {
    return;
  }

  const wrapperSuccess = modal.querySelector('.modal-success');

  const playConfetti = () => {
    setTimeout(() => {
      confetti.start();
    }, confettiDelay);

    setTimeout(() => {
      confetti.stop();
    }, confettiDuration);
  };

  const onOpenModalSuccess = (link) => {
    const openModals = document.querySelectorAll('.modal.is-active');

    const linkEl = modal.querySelector('[data-copy-text="text"]');
    linkEl.setAttribute('href', link);
    linkEl.textContent = link;

    try {
      fbq('track', 'AddToWishlist');
    } catch (e) {

    }

    const dataSharers = modal.querySelectorAll('[data-sharer]');
    dataSharers.forEach((dataSharer) => {
      dataSharer.dataset.url = link;
    });

    openModals.forEach((elem) => {
      modals.close(elem.dataset.modal);
    });

    modals.open('success');
    playConfetti();
  };

  modal.addEventListener('click', (evt) => {
    if (evt.target === wrapperSuccess) {
      modals.close('success');
    }
  });

  window.onOpenModalSuccess = onOpenModalSuccess;
};

export {modalSuccess};
