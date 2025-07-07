// src/scripts/components/Checkbox.js

export default function initUICheckbox() {
  document.querySelectorAll('.ui-checkbox').forEach(label => {
    const input = label.querySelector('.ui-checkbox__input');
    const defaultText = label.querySelector('.default-text');
    const checkedText = label.querySelector('.checked-text');

    function updateText() {
      if (input.checked) {
        defaultText.style.display = 'none';
        checkedText.style.display = '';
      } else {
        defaultText.style.display = '';
        checkedText.style.display = 'none';
      }
    }
    input.addEventListener('change', updateText);
    updateText();
  });
}
