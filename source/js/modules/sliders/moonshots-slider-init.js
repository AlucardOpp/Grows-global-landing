const slider = document.querySelector('.moonshots__slider');

const moonshotsSlider = () => {
  if (!slider) {
    return;
  }

  // eslint-disable-next-line
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    allowTouchMove: false,
    loop: true,
    centeredSlides: true,
    speed: 7000,
    autoplay: {
      delay: 0,
    },
  });
};

export {moonshotsSlider};
