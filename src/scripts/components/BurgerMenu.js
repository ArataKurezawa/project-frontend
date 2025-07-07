export default function initBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const menu = document.querySelector('.burger-menu');
  if (!burgerBtn || !menu) return;

  burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll', menu.classList.contains('is-open'));
  });

  // Закрытие по клику вне белого квадрата
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menu.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });

  // Закрытие по клавише ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      menu.classList.remove('is-open');
      burgerBtn.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
}

