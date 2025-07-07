// src/scripts/components/EmailInput.js

/**
 * Класс EmailInput для поля e-mail с анимированным label и валидацией.
 */
export default class EmailInput {
  /**
   * @param {string} selector - CSS-селектор контейнера email (например, '.ui-email')
   */
  constructor(selector = '.ui-email') {
    this.containers = document.querySelectorAll(selector);
    this.init();
  }

  /**
   * Инициализация событий для всех email-полей на странице
   */
  init() {
    this.containers.forEach((container) => {
      const input = container.querySelector('.ui-email__input');
      const label = container.querySelector('.ui-email__label');
      const error = container.querySelector('.ui-email__error');

      if (!input || !label || !error) return;

      // Анимация label
      input.addEventListener('focus', () => {
        container.classList.add('focused');
      });
      input.addEventListener('blur', () => {
        container.classList.remove('focused');
        this.validate(input, container, error, true); // Показываем ошибку на blur
      });
      input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
          container.classList.add('has-value');
        } else {
          container.classList.remove('has-value');
        }
        this.validate(input, container, error, false); // Скрываем ошибку при вводе
      });

      // Инициализация состояния при загрузке (на случай автозаполнения)
      if (input.value.trim() !== '') {
        container.classList.add('has-value');
      }
      // Сразу валидируем (например, если автозаполнено невалидно)
      this.validate(input, container, error, false);
    });
  }

  /**
   * Валидация email-поля
   * @param {HTMLInputElement} input 
   * @param {HTMLElement} container 
   * @param {HTMLElement} error 
   * @param {boolean} showError 
   */
  validate(input, container, error, showError = true) {
    const value = input.value.trim();
    const isValid = this.isValidEmail(value);
    if (!isValid && value !== '') {
      container.classList.add('invalid');
      if (showError) error.style.display = 'block';
      else error.style.display = 'none';
    } else {
      container.classList.remove('invalid');
      error.style.display = 'none';
    }
  }

  /**
   * Проверка валидности e-mail
   * @param {string} email 
   * @returns {boolean}
   */
  isValidEmail(email) {
    // Простой паттерн для e-mail
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
