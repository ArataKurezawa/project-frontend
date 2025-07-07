// src/scripts/components/Button.js

export default function initUIButton() {
  document.querySelectorAll('.ui-btn').forEach(btn => {
    // Если кнопка disabled, ничего не делаем
    if (btn.disabled || btn.classList.contains('is-disabled')) return;

    // Добавляем/убираем класс is-active для анимации нажатия (если нужно вручную)
    btn.addEventListener('mousedown', () => {
      btn.classList.add('is-active');
    });
    btn.addEventListener('mouseup', () => {
      btn.classList.remove('is-active');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('is-active');
    });
    // Если нужна логика "неактивна после отжатия" (например, после отправки)
    btn.addEventListener('click', () => {
      // btn.disabled = true; // стандартный способ
      btn.classList.add('is-disabled');
      btn.setAttribute('disabled', 'disabled');
    });
  });
}
