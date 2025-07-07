// src/scripts/modules/typography.js

/**
 * Модуль Typography для автоматического применения классов типографики к <body> или <main>
 * по ширине экрана (НЕ нужен для ручного переключения через TypographySwitch.js)
 */
export default class Typography {
  constructor({
    targetSelector = 'body',
    tabletBreakpoint = 736,
    desktopBreakpoint = 1200
  } = {}) {
    this.target = document.querySelector(targetSelector);
    this.tabletBreakpoint = tabletBreakpoint;
    this.desktopBreakpoint = desktopBreakpoint;
    this._onResize = this._onResize.bind(this);
    this.init();
  }

  init() {
    if (!this.target) return;
    window.addEventListener('resize', this._onResize);
    this._onResize();
  }

  _onResize() {
    const width = window.innerWidth;
    let mode = 'mobile';
    if (width >= this.desktopBreakpoint) mode = 'desktop';
    else if (width >= this.tabletBreakpoint) mode = 'tablet';
    this.target.classList.remove('typography--desktop', 'typography--tablet', 'typography--mobile');
    this.target.classList.add(`typography--${mode}`);
  }
}
