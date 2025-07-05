class AnimationsHandler {
  constructor() {
    this.counters = new Map();
    // Запускаем инициализацию всех анимаций при создании объекта
    this.initCounters();
  }

  initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');
    if (!counterElements.length) return;

    counterElements.forEach(element => {
      const target = parseInt(element.getAttribute('data-counter'), 10);
      const duration =
        parseInt(element.getAttribute('data-duration'), 10) || 2000;
      const suffix = element.getAttribute('data-suffix') || '';

      if (isNaN(target)) {
        console.warn('Invalid data-counter value on element:', element);
        return;
      }

      this.counters.set(element, {
        target,
        duration,
        suffix,
        current: 0,
        started: false,
      });
    });

    // Intersection Observer для запуска счетчиков
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = this.counters.get(entry.target);
            if (counter && !counter.started) {
              this.animateCounter(entry.target, counter);
              counter.started = true;
              // Прекращаем наблюдение за элементом после запуска анимации
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.5 } // Запуск, когда 50% элемента видно
    );

    counterElements.forEach(element => {
      if (this.counters.has(element)) {
        counterObserver.observe(element);
      }
    });
  }

  animateCounter(element, counter) {
    const startTime = Date.now();
    const startValue = counter.current;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / counter.duration, 1);

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(
        startValue + (counter.target - startValue) * easeOutQuart
      );
      counter.current = currentValue;

      element.textContent =
        currentValue.toLocaleString('ru-RU') + counter.suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent =
          counter.target.toLocaleString('ru-RU') + counter.suffix;
      }
    };

    requestAnimationFrame(animate);
  }
}

// Создаем экземпляр класса, чтобы все заработало при импорте файла
new AnimationsHandler();
