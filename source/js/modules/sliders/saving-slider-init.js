const sliders = document.querySelectorAll('.saving__slider');

const savingSliderInit = () => {
  if (!sliders.length) {
    return;
  }

  sliders.forEach((slider) => {
    const swiper = new Swiper(slider, {
      slidesPerView: 'auto',
    });
  });
};

export {savingSliderInit};
