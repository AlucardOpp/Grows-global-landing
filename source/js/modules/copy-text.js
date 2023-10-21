let timer;

const copyText = () => {
  window.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-copy-text="button"]')) {
      if (timer) {
        clearTimeout(timer);
      }
      const parent = evt.target.closest('[data-copy-text="button"]').parentElement;
      const textEl = parent.querySelector('[data-copy-text="text"]');
      const text = textEl.textContent.trim();
      window.Clipboard.copy(text);

      parent.classList.add('success');

      timer = setTimeout(() => {
        parent.classList.remove('success');
        timer = null;
      }, 1500);
    }
  });
};

export {copyText};
