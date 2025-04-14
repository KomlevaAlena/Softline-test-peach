import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';

export const slider = new Swiper('.corporate__wrapper', {
  loop: true,
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  watchSlidesProgress: true,
  slideVisibleClass: 'is-visible',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  navigation: {
    nextEl: '.corporate__button--next',
    prevEl: '.corporate__button--prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Navigation, Pagination, Autoplay],
});
