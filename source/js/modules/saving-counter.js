const duration = 200;
const delay = 10;
let growsTimer;
let bankTimer;

const toggleActiveButton = (buttons, activeButton) => {
  buttons.forEach((button) => {
    button.classList.remove('is-active');
  });
  activeButton.classList.add('is-active');
};
const getNewValues = (button) => {
  const grows = Number(button.dataset.savingGrows.replace(/\D/g, ''));
  const bank = Number(button.dataset.savingBank.replace(/\D/g, ''));
  return {grows, bank};
};

const numberWithSpaces = (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};
const changeNum = (el, newValue, timer) => {
  if (timer) {
    clearInterval(timer);
  }
  const elValue = Number(el.textContent.replace(/\D/g, ''));
  const shift = newValue - elValue;
  const step = shift / (duration / delay);
  let currentValue = elValue;
  timer = setInterval(() => {
    currentValue = currentValue + step;
    el.textContent = numberWithSpaces(Math.trunc(currentValue));
    if (elValue < newValue && currentValue >= newValue || elValue > newValue && currentValue <= newValue) {
      el.textContent = numberWithSpaces(newValue);
      clearInterval(timer);
    }
  }, delay);
};

const savingCounter = () => {
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-saving-value]')) {
      const currentButton = evt.target.closest('[data-saving-value]');
      const parent = currentButton.closest('.saving__element');
      const allButtons = parent.querySelectorAll('[data-saving-value]');
      const growsValueElem = parent.querySelector('[data-saving-grows-value]');
      const bankValueElem = parent.querySelector('[data-saving-bank-value]');
      const newValues = getNewValues(currentButton);
      toggleActiveButton(allButtons, currentButton);
      changeNum(growsValueElem, newValues.grows, growsTimer);
      changeNum(bankValueElem, newValues.bank, bankTimer);
    }
  });
};
export {savingCounter};
