const sliderBlocks = document.querySelectorAll('.full-story');

const fullStorySliderInit = () => {
  if (!sliderBlocks.length) {
    return;
  }

  sliderBlocks.forEach((sliderBlock) => {
    const slider = sliderBlock.querySelector('.full-story__bg');
    const prevBtn = sliderBlock.querySelector('.full-story__nav');
    const nextBtn = sliderBlock.querySelector('.full-story__nav--next');

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });

    window.slider = swiper;
  });
};

export {fullStorySliderInit};
