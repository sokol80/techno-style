const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  /**
   * Показывает или скрывает кнопку в зависимости от положения прокрутки.
   */
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  };

  /**
   * Плавно прокручивает страницу наверх.
   */
  const scrollToTop = event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);
  scrollTopBtn.addEventListener('click', scrollToTop);
}
