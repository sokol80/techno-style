//выделяем активный пункт меню

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav__link');
  const currentPath = cleanPath(window.location.pathname);

  navLinks.forEach(link => {
    const linkPath = cleanPath(
      new URL(link.href, window.location.origin).pathname
    );

    // Убираем класс active у всех ссылок (на всякий случай)
    link.classList.remove('nav__link--active');

    // Если пути совпадают — добавляем класс
    if (currentPath === linkPath) {
      link.classList.add('nav__link--active');
    }
  });

  // Функция для нормализации пути
  function cleanPath(path) {
    // Удаляем "/index.html", если есть
    path = path.replace(/\/index\.html$/, '');

    // Добавляем слеш в конце, если его нет (кроме корня)
    if (path !== '/' && !path.endsWith('/')) {
      path += '/';
    }

    return path;
  }
});
