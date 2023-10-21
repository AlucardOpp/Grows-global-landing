import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {modalSuccess} from './modules/modals/modal-success';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initSliders} from './modules/sliders/init-sliders';
import {initTabs} from './modules/init-tabs';
import {savingCounter} from './modules/saving-counter';
import {graphicItemControl} from './modules/graphic-item-control';
import {openPopupJoin} from './modules/open-popup-join';
import {copyText} from './modules/copy-text';
import {initLazyVideo} from './modules/init-lazy-video';
import {initInlineVideos} from './modules/init-inline-videos';
import {initLazyImgs} from './modules/init-lazy-imgs';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();
  initInlineVideos();
  initSliders();
  initLazyImgs();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  initModals();
  initCustomSelect();
  initFormValidate();
  initTabs();
  savingCounter();
  graphicItemControl();
  openPopupJoin();
  copyText();
  initLazyVideo();
  modalSuccess();
  // });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
