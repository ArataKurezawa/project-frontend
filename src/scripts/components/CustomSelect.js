// src/scripts/components/CustomSelect.js
export default function initCustomSelect() {
  document.querySelectorAll('.ui-select').forEach(select => {
    const field = select.querySelector('.ui-select__field');
    const value = select.querySelector('.ui-select__value');
    const dropdown = select.querySelector('.ui-select__dropdown');
    const options = select.querySelectorAll('.ui-select__option');
    const arrow = select.querySelector('.ui-select__arrow');

    // Открытие/закрытие
    field.addEventListener('click', (e) => {
      select.classList.toggle('is-open');
    });

    // Клик вне — закрыть
    document.addEventListener('click', (e) => {
      if (!select.contains(e.target)) select.classList.remove('is-open');
    });

    // Выбор опции (все пункты выбираемы, включая .is-recommend)
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        options.forEach(o => o.classList.remove('is-selected'));
        option.classList.add('is-selected');
        value.textContent = option.textContent;
        select.classList.remove('is-open');
      });
    });

    // Клавиатура: Esc закрыть
    select.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') select.classList.remove('is-open');
    });
  });
}
