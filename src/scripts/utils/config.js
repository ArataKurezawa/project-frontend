// src/scripts/utils/config.js

/**
 * Конфигурация сетки и типографики для проекта.
 * Используй эти параметры в компонентах и для генерации SCSS-переменных.
 */

const GRID = {
  desktop: {
    columns: 12,
    gutter: 32,
    contentMin: 1072,
    contentMax: 1312
  },
  tablet: {
    columns: 8,
    gutter: 32,
    contentMin: 672,
    contentMax: 928
  },
  mobile: {
    columns: 4,
    gutter: 24,
    contentMin: 296,
    contentMax: 424
  }
};

const TYPOGRAPHY = {
  desktop: {
    h1: { size: 48, lineHeight: 56, weight: 'bold' },
    h2: { size: 32, lineHeight: 40, weight: 'bold' },
    h3: { size: 24, lineHeight: 32, weight: 'medium' },
    h4: { size: 18, lineHeight: 28, weight: 'medium' },
    lead: { size: 24, lineHeight: 32, weight: 'regular' },
    p18: { size: 18, lineHeight: 28, weight: 'regular' },
    p16: { size: 16, lineHeight: 24, weight: 'regular' },
    p14: { size: 14, lineHeight: 20, weight: 'regular' }
  },
  mobile: {
    h1: { size: 32, lineHeight: 40, weight: 'bold' },
    h2: { size: 28, lineHeight: 36, weight: 'bold' },
    h3: { size: 20, lineHeight: 28, weight: 'medium' },
    h4: { size: 18, lineHeight: 28, weight: 'medium' },
    lead: { size: 20, lineHeight: 28, weight: 'regular' },
    p18: { size: 18, lineHeight: 28, weight: 'regular' },
    p16: { size: 16, lineHeight: 24, weight: 'regular' },
    p14: { size: 14, lineHeight: 20, weight: 'regular' }
  }
};

const BREAKPOINTS = {
  desktop: 1200,
  tablet: 736,
  mobile: 320
};

const FONT_FAMILY = 'Graphik, Arial, sans-serif';

export { GRID, TYPOGRAPHY, BREAKPOINTS, FONT_FAMILY };
