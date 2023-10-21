const videoPreviews = document.querySelectorAll('video');

const initLazyVideo = () => {
  if (!videoPreviews.length) {
    return;
  }

  videoPreviews.forEach((video) => {
    if (video.hasAttribute('data-src')) {
      video.src = video.dataset.src;
    }
  });
};

export {initLazyVideo};
