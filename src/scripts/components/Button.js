// src/scripts/components/Button.js

/**
 * Класс Button для управления программным включением/выключением кнопки.
 * Визуальные состояния hover, active, disabled реализуются только через SCSS и стандартные HTML-атрибуты.
 * 
 * Использование:
 * 1. Для каждой кнопки добавь класс .ui-button
 * 2. Для неактивной кнопки добавь атрибут disabled
 * 3. Для программного управления состоянием кнопки — используй методы класса
 * 
 * Пример структуры:
 * <button class="ui-button">Отправить</button>
 * <button class="ui-button" disabled>Отправить</button>
 */

export default class Button {
  /**
   * @param {string} selector - CSS-селектор кнопок (например, '.ui-button')
   */
  constructor(selector = '.ui-button') {
    this.buttons = document.querySelectorAll(selector);
  }

  /**
   * Отключить кнопку программно
   * @param {Element} button - DOM-элемент кнопки
   */
  disable(button) {
    if (button && button.classList.contains('ui-button')) {
      button.disabled = true;
    }
  }

  /**
   * Включить кнопку программно
   * @param {Element} button - DOM-элемент кнопки
   */
  enable(button) {
    if (button && button.classList.contains('ui-button')) {
      button.disabled = false;
    }
  }

  /**
   * Отключить все кнопки (по селектору)
   */
  disableAll() {
    this.buttons.forEach(btn => btn.disabled = true);
  }

  /**
   * Включить все кнопки (по селектору)
   */
  enableAll() {
    this.buttons.forEach(btn => btn.disabled = false);
  }
}

