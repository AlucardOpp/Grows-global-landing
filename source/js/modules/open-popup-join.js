const firstButtonOpenModal = document.querySelector('.intro__form');
const buttonCloseModal = document.querySelector('.join__form');
const popup = document.querySelector('.popup-join');

const onScroll = () => {
  if (firstButtonOpenModal.getBoundingClientRect().bottom < 0 && buttonCloseModal.getBoundingClientRect().bottom > window.innerHeight) {
    popup.classList.add('is-show');
  } else {
    popup.classList.remove('is-show');
  }
};

const openPopupJoin = () => {
  if (!firstButtonOpenModal || !popup) {
    return;
  }

  document.addEventListener('scroll', onScroll);
};

export {openPopupJoin};
