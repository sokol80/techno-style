document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок и контента
      document.querySelectorAll('.tab-button.active').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-content.active').forEach(content => {
        content.classList.remove('active');
      });

      // Добавляем активный класс к текущей кнопке
      button.classList.add('active');

      // Показываем соответствующий контент
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
