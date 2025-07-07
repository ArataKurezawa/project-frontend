// src/scripts/components/BurgerMenu.js

/**
 * Класс BurgerMenu для управления бургер-меню
 *
 * Как использовать:
 * - Кнопка: <button class="burger-btn"></button>
 * - Меню (overlay): <div class="burger-menu">...</div>
 * - Оверлей: <div class="burger-menu__overlay"></div> (по желанию)
 *
 * Для корректной работы меню должно быть вне потока (position: fixed)
 */

export default class BurgerMenu {
  /**
  @param {Object} options
  @param {string} options.toggleSelector - Селектор кнопки-бургера
  @param {string} options.menuSelector - Селектор меню (overlay)
  @param {string} [options.overlaySelector] - Селектор оверлея (если есть)
  @param {string} [options.activeClass] - Класс для активного состояния
  */
  
  constructor({
    toggleSelector = '.burger-btn',
    menuSelector = '.burger-menu',
    overlaySelector = '.burger-menu__overlay',
    activeClass = 'is-open'
  } = {}) {
    this.toggle = document.querySelector(toggleSelector);
    this.menu = document.querySelector(menuSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.activeClass = activeClass;

    this._bindEvents();
  }

  _bindEvents() {
    if (!this.toggle || !this.menu) return;

    // Открытие/закрытие по клику на бургер
    this.toggle.addEventListener('click', () => {
      this.toggleMenu();
    });

    // Клик по оверлею — закрыть меню
    if (this.overlay) {
      this.overlay.addEventListener('click', () => {
        this.closeMenu();
      });
    }

    // Закрытие меню по ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMenu();
    });
  }

  openMenu() {
    this.menu.classList.add(this.activeClass);
    this.toggle.classList.add(this.activeClass);
    if (this.overlay) this.overlay.classList.add(this.activeClass);
    document.body.classList.add('no-scroll');
  }

  closeMenu() {
    this.menu.classList.remove(this.activeClass);
    this.toggle.classList.remove(this.activeClass);
    if (this.overlay) this.overlay.classList.remove(this.activeClass);
    document.body.classList.remove('no-scroll');
  }

  toggleMenu() {
    if (this.menu.classList.contains(this.activeClass)) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }
}
