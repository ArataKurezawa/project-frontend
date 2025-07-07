// src/scripts/components/TypographySwitch.js
/**
 * Класс TypographySwitch для переключения режимов типографики (десктоп/мобильная)
 * в одном "окошке" с табами.
 *
 * Использование:
 * 1. В секции "Типографика" размести кнопки .typography-switch__btn с data-mode="desktop"/"mobile"
 * 2. Контент для каждого режима оберни в .typography-switch__content с data-mode="desktop"/"mobile"
 * 3. По умолчанию показывается "desktop"
 */

export default class TypographySwitch {
  /**
   * @param {string} btnSelector - Селектор кнопок-переключателей
   * @param {string} contentSelector - Селектор блоков с контентом
   * @param {string} [activeClass] - Класс для активного состояния кнопки и контента
   */
  constructor(
    btnSelector = '.typography-switch__btn',
    contentSelector = '.typography-switch__content',
    activeClass = 'active'
  ) {
    this.buttons = document.querySelectorAll(btnSelector);
    this.contents = document.querySelectorAll(contentSelector);
    this.activeClass = activeClass;
    this.currentMode = 'desktop';
    this.init();
  }

  /**
   * Инициализация событий для переключателей
   */
  init() {
    if (!this.buttons.length || !this.contents.length) return;

    // Установить начальное состояние
    this.showContent(this.currentMode);

    // Навесить обработчики на кнопки
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        if (mode && mode !== this.currentMode) {
          this.showContent(mode);
        }
      });
    });
  }

  /**
   * Показывает контент для выбранного режима и обновляет активную кнопку
   * @param {string} mode - 'desktop' или 'mobile'
   */
  showContent(mode) {
    this.currentMode = mode;

    // Переключаем активную кнопку
    this.buttons.forEach((btn) => {
      btn.classList.toggle(this.activeClass, btn.getAttribute('data-mode') === mode);
    });

    // Показываем только нужный контент
    this.contents.forEach((content) => {
      content.classList.toggle(this.activeClass, content.getAttribute('data-mode') === mode);
    });
  }
}
