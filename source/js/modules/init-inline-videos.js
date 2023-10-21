const initInlineVideos = () => {
  const videos = document.querySelectorAll('video');

  if (!videos) {
    return;
  }

  videos.forEach((video) => window.enableInlineVideo(video));
};

export {initInlineVideos};
