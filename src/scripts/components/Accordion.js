// src/scripts/components/Accordion.js

export default function initAccordion() {
  document.querySelectorAll('.ui-accordion').forEach(acc => {
    const header = acc.querySelector('.ui-accordion__header');
    header.addEventListener('click', () => {
      acc.classList.toggle('is-open');
    });
  });
}
