// src/scripts/components/Radio.js

export default function initUIRadio() {
  document.querySelectorAll('.ui-radio').forEach(label => {
    const input = label.querySelector('.ui-radio__input');
    const defaultText = label.querySelector('.default-text');
    const hoverText = label.querySelector('.hover-text');
    const checkedText = label.querySelector('.checked-text');

    label.addEventListener('mouseenter', () => {
      if (!input.checked) {
        defaultText.style.display = 'none';
        hoverText.style.display = '';
        checkedText.style.display = 'none';
      }
    });
    label.addEventListener('mouseleave', () => {
      if (!input.checked) {
        defaultText.style.display = '';
        hoverText.style.display = 'none';
        checkedText.style.display = 'none';
      }
    });
    input.addEventListener('change', () => {
      if (input.checked) {
        defaultText.style.display = 'none';
        hoverText.style.display = 'none';
        checkedText.style.display = '';
      } else {
        defaultText.style.display = '';
        hoverText.style.display = 'none';
        checkedText.style.display = 'none';
      }
    });
    // Инициализация
    if (input.checked) {
      defaultText.style.display = 'none';
      hoverText.style.display = 'none';
      checkedText.style.display = '';
    } else {
      defaultText.style.display = '';
      hoverText.style.display = 'none';
      checkedText.style.display = 'none';
    }
  });
}
