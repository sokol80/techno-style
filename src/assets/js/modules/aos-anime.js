import AOS from 'aos';
import 'aos/dist/aos.css'; // Для стилей также можно использовать <link>
// ..
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  disable: function () {
    // Отключаем анимации на мобильных устройствах с медленным интернетом
    return (
      window.innerWidth < 768 &&
      navigator.connection?.effectiveType === 'slow-2g'
    );
  },
});
