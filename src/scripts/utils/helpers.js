// src/scripts/utils/helpers.js

/**
 * Универсальные вспомогательные функции для проекта.
 * Импортируй нужные функции в своих компонентах.
 */

/**
 * Debounce — ограничивает частоту вызова функции.
 * @param {Function} func - функция
 * @param {number} wait - задержка в мс
 * @returns {Function}
 */
export function debounce(func, wait = 200) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Throttle — вызывает функцию не чаще, чем раз в delay мс.
 * @param {Function} func
 * @param {number} delay
 * @returns {Function}
 */
export function throttle(func, delay = 200) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

/**
 * Проверка валидности email (простая)
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Генерация уникального id (например, для input/label)
 * @param {string} prefix
 * @returns {string}
 */
export function uniqueId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Добавить класс к элементу (без дублей)
 * @param {Element} el
 * @param {string} className
 */
export function addClass(el, className) {
  if (el && !el.classList.contains(className)) el.classList.add(className);
}

/**
 * Удалить класс у элемента
 * @param {Element} el
 * @param {string} className
 */
export function removeClass(el, className) {
  if (el && el.classList.contains(className)) el.classList.remove(className);
}

/**
 * Переключить класс у элемента
 * @param {Element} el
 * @param {string} className
 */
export function toggleClass(el, className) {
  if (el) el.classList.toggle(className);
}

/**
 * Получить родителя с определённым классом
 * @param {Element} el
 * @param {string} className
 * @returns {Element|null}
 */
export function closest(el, className) {
  while (el && el !== document.body) {
    if (el.classList && el.classList.contains(className)) return el;
    el = el.parentElement;
  }
  return null;
}
