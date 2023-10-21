const sliders = document.querySelectorAll('.graphic__slider');
const breakpointMob = window.matchMedia('(max-width:767px)');
const breakpointTab = window.matchMedia('(max-width:1023px)');

const graphicSliders = () => {
  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    // eslint-disable-next-line
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    if (breakpointMob.matches) {
      swiper.slideTo(5);
    } else if (breakpointTab.matches) {
      swiper.slideTo(0);
    } else {
      swiper.slideTo(1);
    }
  });
};

export {graphicSliders};
