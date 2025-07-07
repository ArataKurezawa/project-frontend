// src/scripts/modules/navigation.js

/**
 * Модуль Navigation для управления навигацией по секциям страницы.
 * Подсвечивает активный пункт меню при скролле и поддерживает плавный переход по якорям.
 *
 * Использование:
 * - Меню навигации: <nav class="sidebar-nav"> с <a href="#section-id" class="sidebar-nav__link">
 * - Для плавного скролла добавь класс .smooth-scroll (или используй SmoothScroll.js)
 * - Вызови new Navigation() после загрузки страницы.
 */

export default class Navigation {
  /**
   * @param {string} menuSelector - Селектор контейнера меню
   * @param {string} linkSelector - Селектор ссылок меню
   * @param {string} activeClass - Класс для активного пункта
   */
  constructor(
    menuSelector = '.sidebar-nav',
    linkSelector = '.sidebar-nav__link',
    activeClass = 'active'
  ) {
    this.menu = document.querySelector(menuSelector);
    this.links = this.menu ? this.menu.querySelectorAll(linkSelector) : [];
    this.activeClass = activeClass;
    this.sections = [];
    this._init();
  }

  /**
   * Инициализация навигации и событий
   */
  _init() {
    if (!this.menu || !this.links.length) return;

    // Собрать все секции, на которые ссылается меню
    this.sections = Array.from(this.links)
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    // Подсветка активного пункта при скролле
    window.addEventListener('scroll', () => this._highlightActiveLink());
    // Подсветить сразу при загрузке
    this._highlightActiveLink();

    // Плавный скролл (если не используешь отдельный SmoothScroll.js)
    this.links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  /**
   * Подсвечивает активный пункт меню в зависимости от текущей прокрутки
   */
  _highlightActiveLink() {
    const scrollY = window.scrollY || window.pageYOffset;
    let currentSectionIndex = 0;

    this.sections.forEach((section, i) => {
      if (section.offsetTop - 100 <= scrollY) {
        currentSectionIndex = i;
      }
    });

    this.links.forEach((link, i) => {
      if (i === currentSectionIndex) {
        link.classList.add(this.activeClass);
      } else {
        link.classList.remove(this.activeClass);
      }
    });
  }
}
