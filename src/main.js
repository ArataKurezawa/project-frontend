// src/main.js

import './styles/main.scss';
import Handlebars from 'handlebars';

// Хелпер range для шаблонов
Handlebars.registerHelper('range', function(n, block) {
  let accum = '';
  for (let i = 0; i < n; ++i) accum += block.fn(i + 1);
  return accum;
});

// Импорт шаблонов и partials
import mainTemplateStr from './templates/layouts/main.hbs?raw';
import headerPartial from './templates/partials/header.hbs?raw';
import sidebarPartial from './templates/partials/sidebar.hbs?raw';
import footerPartial from './templates/partials/footer.hbs?raw';
import introSection from './templates/sections/intro.hbs?raw';
import gridSection from './templates/sections/grid.hbs?raw';
import typographySection from './templates/sections/typography.hbs?raw';
import uiSection from './templates/sections/ui.hbs?raw';
import buttonComponent from './templates/components/button.hbs?raw';
import inputComponent from './templates/components/input.hbs?raw';
import selectComponent from './templates/components/select.hbs?raw';
import checkboxComponent from './templates/components/checkbox.hbs?raw';
import radioComponent from './templates/components/radio.hbs?raw';
import accordionComponent from './templates/components/accordion.hbs?raw';

// Импорт данных
import user from './data/user.json';
import content from './data/content.json';
import config from './data/config.json';

// Регистрация partials и компонентов
Handlebars.registerPartial('partials/header', headerPartial);
Handlebars.registerPartial('partials/sidebar', sidebarPartial);
Handlebars.registerPartial('partials/footer', footerPartial);
Handlebars.registerPartial('sections/intro', introSection);
Handlebars.registerPartial('sections/grid', gridSection);
Handlebars.registerPartial('sections/typography', typographySection);
Handlebars.registerPartial('sections/ui', uiSection);
Handlebars.registerPartial('components/button', buttonComponent);
Handlebars.registerPartial('components/input', inputComponent);
Handlebars.registerPartial('components/select', selectComponent);
Handlebars.registerPartial('components/checkbox', checkboxComponent);
Handlebars.registerPartial('components/radio', radioComponent);
Handlebars.registerPartial('components/accordion', accordionComponent);

// Данные для UI-компонентов (если нужно)
const ui = {
  button: { label: 'Отправить' },
  input: { label: 'E-mail', hint: 'Текст ошибки' },
  checkbox: { label: 'Чекбокс' },
  radio: { label: 'Радиобаттон' },
  select: {
    placeholder: 'Выберите что-нибудь',
    selectedLabel: 'Выбранный пункт',
    options: [
      { value: '1', label: 'Первый стул' },
      { value: '2', label: 'Второй стул' },
      { value: '3', label: 'Выбранный пункт', selected: true }
    ]
  },
  accordion: {
    items: [
      { title: 'Аккордеон 1', content: 'Текст внутри аккордеона 1.' },
    ]
  }
};

// Рендерим шаблон
const template = Handlebars.compile(mainTemplateStr);
const html = template({
  user,
  content,
  config,
  ui
});
document.getElementById('app').innerHTML = html;

// Импорт и инициализация JS-компонентов

import initBurgerMenu from './scripts/components/BurgerMenu.js';
initBurgerMenu();

import SmoothScroll from './scripts/components/SmoothScroll.js';
import initTypographySwitch from './scripts/components/TypographySwitch.js';
initTypographySwitch();
import initEmailInput from './scripts/components/EmailInput.js';
initEmailInput();
import initCustomSelect from './scripts/components/CustomSelect.js';
initCustomSelect();
import initUIButton from './scripts/components/Button.js';
initUIButton();
import initUICheckbox from './scripts/components/Checkbox.js';
import initUIRadio from './scripts/components/Radio.js';
initUICheckbox();
initUIRadio();
import initAccordion from './scripts/components/Accordion.js';
initAccordion();



// Импорт логических модулей (Navigation — для scrollspy/sidebar)
import Navigation from './scripts/modules/navigation.js';
// import Typography from './scripts/modules/typography.js'; // НЕ нужен для ручного переключения!

document.addEventListener('DOMContentLoaded', () => {
  
  new SmoothScroll('.smooth-scroll');
  new Navigation(); 
  
});

// Экспорт для тестирования (опционально)
export {};
