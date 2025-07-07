// src/scripts/components/Radio.js

/**
 * Класс Radio для программного управления кастомными радиобаттонами.
 * Визуальные состояния (checked, disabled, hover) реализуются только через SCSS и стандартные HTML-атрибуты.
 * 
 * Как использовать:
 * 1. Структура HTML:
 *    <label class="ui-radio">
 *      <input type="radio" name="group1" class="ui-radio__input" />
 *      <span class="ui-radio__circle"></span>
 *      <span class="ui-radio__label">Радиобаттон</span>
 *    </label>
 * 2. Для неактивного состояния добавьте атрибут disabled к input.
 * 3. Для отмеченного состояния используйте checked у input.
 * 4. Для группы радиокнопок используйте одинаковое name.
 */

export default class Radio {
  /**
   * @param {string} selector - CSS-селектор радиокнопок (например, '.ui-radio__input')
   */
  constructor(selector = '.ui-radio__input') {
    this.radios = document.querySelectorAll(selector);
  }

  /**
   * Отметить радиобаттон программно
   * @param {Element} radio - DOM-элемент <input type="radio">
   */
  check(radio) {
    if (radio && radio.classList.contains('ui-radio__input')) {
      radio.checked = true;
      // Снимаем checked у других радиобаттонов в группе
      if (radio.name) {
        document.querySelectorAll(`input[type="radio"][name="${radio.name}"]`).forEach((el) => {
          if (el !== radio) el.checked = false;
        });
      }
    }
  }

  /**
   * Отключить радиобаттон программно
   * @param {Element} radio - DOM-элемент <input type="radio">
   */
  disable(radio) {
    if (radio && radio.classList.contains('ui-radio__input')) {
      radio.disabled = true;
    }
  }

  /**
   * Включить радиобаттон программно
   * @param {Element} radio - DOM-элемент <input type="radio">
   */
  enable(radio) {
    if (radio && radio.classList.contains('ui-radio__input')) {
      radio.disabled = false;
    }
  }

  /**
   * Отключить все радиобаттоны
   */
  disableAll() {
    this.radios.forEach(radio => radio.disabled = true);
  }

  /**
   * Включить все радиобаттоны
   */
  enableAll() {
    this.radios.forEach(radio => radio.disabled = false);
  }

  /**
   * Снять отметку со всех радиобаттонов в группе
   * @param {string} groupName - name группы радиобаттонов
   */
  uncheckGroup(groupName) {
    document.querySelectorAll(`input[type="radio"][name="${groupName}"]`).forEach((el) => {
      el.checked = false;
    });
  }
}
