export const initLazyImgs = () => {
  const lazyImgs = document.querySelectorAll('img[data-src]');

  if (!lazyImgs) {
    return;
  }

  lazyImgs.forEach((img) => {
    img.src = img.dataset.src + '.' + img.dataset.type;
    img.srcset = img.dataset.src + '@2x.' + img.dataset.type;
  });
};
