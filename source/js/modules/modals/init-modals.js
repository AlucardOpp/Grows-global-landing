import {Modals} from './modals';

let modals;

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const openJoinCallback = () => {
  const joinInput = document.querySelector('.modal--join input');

  setTimeout(() => {
    joinInput.focus();
  }, 100);
};

const openFullStoryFix = () => {
  const scrollContent = document.querySelector('.modal--full-story .modal__content');
  if (!scrollContent) {
    return;
  }

  scrollContent.scrollTo(0, 1);
};

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: openFullStoryFix,
    closeCallback: false,
  },
  'join': {
    openCallback: openJoinCallback,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals};
