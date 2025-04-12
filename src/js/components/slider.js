import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';

export const slider = new Swiper('.corporate__wrapper', {
  loop: false,
  slidesPerView: 1,
  watchSlidesProgress: true,
  slideVisibleClass: 'is-visible',
  navigation: {
    nextEl: '.corporate__button--next',
    prevEl: '.corporate__button--prev',
  },
  modules: [Navigation, Pagination, Autoplay],
});
