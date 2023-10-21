const slider = document.querySelector('.graphic__slider-controls');
const breakpoint = window.matchMedia('(max-width:767px)');

const graphicControlsSlider = () => {
  if (!slider) {
    return;
  }

  // eslint-disable-next-line
  const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
  });
  if (breakpoint.matches) {
    swiper.slideTo(1);
  } else {
    swiper.slideTo(0);
  }
};

export {graphicControlsSlider};
