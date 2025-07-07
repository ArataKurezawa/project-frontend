// src/scripts/components/SmoothScroll.js

/**
 * Класс SmoothScroll для плавной прокрутки и scrollspy.
 * 
 * Как использовать:
 * 1. Для всех ссылок, ведущих к якорям (например, <a href="#section-id">), добавь класс .smooth-scroll.
 * 2. Вызови new SmoothScroll() после загрузки страницы.
 * 3. По клику будет плавно прокручиваться к нужному элементу, а активный пункт меню будет подсвечиваться.
 */

export default class SmoothScroll {
  /**
   * @param {string} linkSelector - CSS-селектор ссылок (например, '.smooth-scroll')
   * @param {string} [activeClass='active'] - Класс для активного пункта меню
   */
  constructor(linkSelector = '.smooth-scroll', activeClass = 'active') {
    this.links = document.querySelectorAll(linkSelector);
    this.activeClass = activeClass;
    this.sections = [];

    this.init();
  }

  /**
   * Инициализация событий для всех якорных ссылок и scrollspy
   */
  init() {
    // Собираем все секции, на которые ведут якоря
    this.sections = Array.from(this.links)
      .map(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const section = document.querySelector(href);
          if (section) return section;
        }
        return null;
      })
      .filter(Boolean);

    // Плавная прокрутка по клику
    this.links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Закрыть бургер-меню, если оно открыто (для мобильного меню)
            const burgerMenu = document.querySelector('.burger-menu.is-open');
            const burgerBtn = document.querySelector('.burger-btn.is-open');
            if (burgerMenu && burgerBtn) {
              burgerMenu.classList.remove('is-open');
              burgerBtn.classList.remove('is-open');
              document.body.classList.remove('no-scroll');
            }
          }
        }
      });
    });

    // Scrollspy: подсвечивать активный пункт меню при прокрутке
    window.addEventListener('scroll', () => this.updateActiveLink());
    // При загрузке страницы тоже
    this.updateActiveLink();
  }

  /**
   * Подсвечивает активный пункт меню в зависимости от скролла
   */
  updateActiveLink() {
    let currentSection = null;
    const scrollPosition = window.scrollY + 100; // +100 — чтобы учитывать высоту header

    this.sections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        currentSection = section;
      }
    });

    this.links.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.remove(this.activeClass);
      if (currentSection && href === `#${currentSection.id}`) {
        link.classList.add(this.activeClass);
      }
    });
  }
}
