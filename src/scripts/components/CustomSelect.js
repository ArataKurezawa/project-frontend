// src/scripts/components/CustomSelect.js

/**
 * Класс CustomSelect для управления кастомными выпадающими списками с подсказкой (советом).
 * 
 * Как использовать:
 * 1. Структура HTML:
 *   <div class="ui-select">
 *     <button class="ui-select__toggle" type="button">Выберите что-нибудь</button>
 *     <ul class="ui-select__dropdown">
 *       <li class="ui-select__option" data-value="1">Первый стул</li>
 *       <li class="ui-select__option" data-value="2">Второй стул</li>
 *       <li class="ui-select__option" data-value="3">Выбранный пункт</li>
 *       <li class="ui-select__hint" tabindex="-1">Совет: выбери пункт!</li>
 *     </ul>
 *   </div>
 * 2. Активный пункт отмечается классом .selected
 * 3. Выбранное значение можно получить через data-value
 */

export default class CustomSelect {
  /**
   * @param {string} selector - CSS-селектор кастомных селектов (например, '.ui-select')
   */
  constructor(selector = '.ui-select') {
    this.selects = document.querySelectorAll(selector);
    this.init();
  }

  /**
   * Инициализация всех селектов на странице
   */
  init() {
    this.selects.forEach((select) => {
      const toggle = select.querySelector('.ui-select__toggle');
      const dropdown = select.querySelector('.ui-select__dropdown');
      const options = select.querySelectorAll('.ui-select__option');
      const hint = select.querySelector('.ui-select__hint');

      if (!toggle || !dropdown || !options.length) return;

      // Открытие/закрытие выпадающего списка
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeAll(select);
        select.classList.toggle('open');
        dropdown.style.display = select.classList.contains('open') ? 'block' : 'none';
        // Подсказка всегда видна при открытом селекте
        if (hint) hint.style.display = select.classList.contains('open') ? 'block' : 'none';
      });

      // Выбор опции
      options.forEach((option) => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          options.forEach((opt) => opt.classList.remove('selected'));
          option.classList.add('selected');
          toggle.textContent = option.textContent;
          select.classList.remove('open');
          dropdown.style.display = 'none';
          if (hint) hint.style.display = 'none';
        });
      });

      // Навигация по клавиатуре (Enter, ArrowDown, ArrowUp, Escape)
      toggle.addEventListener('keydown', (e) => {
        if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) {
          e.preventDefault();
          let current = Array.from(options).findIndex(opt => opt.classList.contains('selected'));
          if (current === -1) current = 0;
          else if (e.key === 'ArrowDown') current = (current + 1) % options.length;
          else if (e.key === 'ArrowUp') current = (current - 1 + options.length) % options.length;
          options.forEach(opt => opt.classList.remove('selected'));
          options[current].classList.add('selected');
          toggle.textContent = options[current].textContent;
          if (e.key === 'Enter' || e.key === 'Escape') {
            select.classList.remove('open');
            dropdown.style.display = 'none';
            if (hint) hint.style.display = 'none';
          }
        }
      });

      // Клик вне селекта — закрыть все селекты
      document.addEventListener('click', () => {
        select.classList.remove('open');
        dropdown.style.display = 'none';
        if (hint) hint.style.display = 'none';
      });
    });
  }

  /**
   * Закрывает все селекты, кроме текущего
   * @param {Element} currentSelect
   */
  closeAll(currentSelect) {
    this.selects.forEach((select) => {
      if (select !== currentSelect) {
        select.classList.remove('open');
        const dropdown = select.querySelector('.ui-select__dropdown');
        const hint = select.querySelector('.ui-select__hint');
        if (dropdown) dropdown.style.display = 'none';
        if (hint) hint.style.display = 'none';
      }
    });
  }
}
