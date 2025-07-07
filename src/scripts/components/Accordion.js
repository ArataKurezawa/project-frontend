// src/scripts/components/Accordion.js

/**
 * Класс Accordion для управления раскрывающимися блоками (аккордеонами)
 * Использование:
 *   - Контейнер: .ui-accordion
 *   - Элемент: .ui-accordion__item
 *   - Заголовок: .ui-accordion__header
 *   - Контент: .ui-accordion__body
 */

export default class Accordion {
  /**
   * @param {string} selector - CSS-селектор аккордеона (например, '.ui-accordion')
   */
  constructor(selector = '.ui-accordion') {
    this.accordions = document.querySelectorAll(selector);
    this.init();
  }

  /**
   * Инициализация всех аккордеонов на странице
   */
  init() {
    this.accordions.forEach((accordion) => {
      const items = accordion.querySelectorAll('.ui-accordion__item');

      items.forEach((item) => {
        const header = item.querySelector('.ui-accordion__header');
        const body = item.querySelector('.ui-accordion__body');

        if (!header || !body) return;

        // Скрываем body по умолчанию
        body.style.maxHeight = '0px';
        body.style.overflow = 'hidden';
        body.style.transition = 'max-height 0.3s cubic-bezier(0.4,0,0.2,1), padding 0.3s';

        header.addEventListener('click', () => {
          const isOpen = item.classList.contains('is-open');
          this.closeAll(items, item); // Открыт только один

          if (!isOpen) {
            item.classList.add('is-open');
            body.style.maxHeight = body.scrollHeight + 'px';
            body.style.padding = '8px 0 16px 0';
          } else {
            item.classList.remove('is-open');
            body.style.maxHeight = '0px';
            body.style.padding = '0 0';
          }
        });
      });
    });
  }

  /**
   * Закрывает все аккордеоны, кроме текущего (если нужно поведение "только один открыт")
   * @param {NodeList} items - Все элементы аккордеона
   * @param {Element} currentItem - Текущий открываемый элемент
   */
  closeAll(items, currentItem) {
    items.forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove('is-open');
        const body = item.querySelector('.ui-accordion__body');
        if (body) {
          body.style.maxHeight = '0px';
          body.style.padding = '0 0';
        }
      }
    });
  }
}
