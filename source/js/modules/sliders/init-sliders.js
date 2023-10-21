import {moonshotsSlider} from './moonshots-slider-init';
import {reviewsSlider} from './reviews-slider-init';
import {savingSliderInit} from './saving-slider-init';
import {fullStorySliderInit} from './full-story-slider-init';
import {graphicSliders} from './graphic-sliders';
import {graphicControlsSlider} from './graphic-controls.slider';

const initSliders = () => {
  moonshotsSlider();
  reviewsSlider();
  savingSliderInit();
  fullStorySliderInit();
  graphicSliders();
  graphicControlsSlider();
};

export {initSliders};
