// Общие импорты для всех слайдеров (один раз!)
import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Первый слайдер
const swiperFirst = new Swiper('.swiper-first', {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Другие настройки...
});

// Второй слайдер
const swiperSecond = new Swiper('.swiper-second', {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  slidesPerView: 3, // Показывать 3 слайда одновременно
  spaceBetween: 15, // Отступ между слайдами (в пикселях)
  centeredSlides: true,
  autoplay: {
    delay: 3000, // Другой интервал
    disableOnInteraction: false,
  },
  // Другие настройки...
});
