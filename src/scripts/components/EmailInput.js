// src/scripts/components/EmailInput.js
export default function initEmailInput() {
  document.querySelectorAll('.ui-input').forEach(inputWrap => {
    const input = inputWrap.querySelector('.ui-input__control');
    const error = inputWrap.querySelector('.ui-input__error');

    input.addEventListener('input', () => {
      inputWrap.classList.remove('is-error');
      error.style.display = 'none';
      if (input.value && !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(input.value)) {
        inputWrap.classList.add('is-error');
        error.style.display = 'block';
        error.textContent = 'Введите корректный E-mail';
      }
    });

    input.addEventListener('blur', () => {
      if (input.value && !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(input.value)) {
        inputWrap.classList.add('is-error');
        error.style.display = 'block';
        error.textContent = 'Введите корректный E-mail';
      }
    });
  });
}
