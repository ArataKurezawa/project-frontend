// src/scripts/components/TypographySwitch.js
export default function initTypographySwitch() {
  const btns = document.querySelectorAll('.typography-switch-btn');
  const contents = document.querySelectorAll('.typography-section__content');
  const indicator = document.querySelector('.typography-section__switcher-indicator');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const type = btn.dataset.type;
      contents.forEach(content => {
        content.style.display = content.dataset.type === type ? '' : 'none';
      });
      // Сдвиг индикатора
      if (indicator) {
        indicator.style.left = type === 'desktop' ? '0%' : '50%';
        indicator.style.background = type === 'desktop' ? 'var(--color-accent, #7c3aed)' : 'var(--color-accent, #7c3aed)';
      }
    });
  });
}
