// src/scripts/components/Checkbox.js

/**
 * Класс Checkbox для программного управления состоянием чекбоксов.
 * Визуальные состояния (checked, disabled, hover) реализуются только через SCSS и стандартные HTML-атрибуты.
 * 
 * Использование:
 * 1. Для чекбокса используйте структуру:
 *    <label class="ui-checkbox">
 *      <input type="checkbox" class="ui-checkbox__input" />
 *      <span class="ui-checkbox__box"></span>
 *      <span class="ui-checkbox__label">Чекбокс</span>
 *    </label>
 * 2. Для неактивного состояния добавьте атрибут disabled к input.
 * 3. Для состояния "отмечен" используйте свойство checked у input.
 */

export default class Checkbox {
  /**
   * @param {string} selector - CSS-селектор чекбоксов (например, '.ui-checkbox__input')
   */
  constructor(selector = '.ui-checkbox__input') {
    this.checkboxes = document.querySelectorAll(selector);
  }

  /**
   * Отметить чекбокс программно
   * @param {Element} checkbox - DOM-элемент <input type="checkbox">
   */
  check(checkbox) {
    if (checkbox && checkbox.classList.contains('ui-checkbox__input')) {
      checkbox.checked = true;
    }
  }

  /**
   * Снять отметку с чекбокса программно
   * @param {Element} checkbox - DOM-элемент <input type="checkbox">
   */
  uncheck(checkbox) {
    if (checkbox && checkbox.classList.contains('ui-checkbox__input')) {
      checkbox.checked = false;
    }
  }

  /**
   * Отключить чекбокс программно
   * @param {Element} checkbox - DOM-элемент <input type="checkbox">
   */
  disable(checkbox) {
    if (checkbox && checkbox.classList.contains('ui-checkbox__input')) {
      checkbox.disabled = true;
    }
  }

  /**
   * Включить чекбокс программно
   * @param {Element} checkbox - DOM-элемент <input type="checkbox">
   */
  enable(checkbox) {
    if (checkbox && checkbox.classList.contains('ui-checkbox__input')) {
      checkbox.disabled = false;
    }
  }

  /**
   * Отметить все чекбоксы
   */
  checkAll() {
    this.checkboxes.forEach(cb => cb.checked = true);
  }

  /**
   * Снять отметку со всех чекбоксов
   */
  uncheckAll() {
    this.checkboxes.forEach(cb => cb.checked = false);
  }

  /**
   * Отключить все чекбоксы
   */
  disableAll() {
    this.checkboxes.forEach(cb => cb.disabled = true);
  }

  /**
   * Включить все чекбоксы
   */
  enableAll() {
    this.checkboxes.forEach(cb => cb.disabled = false);
  }
}
