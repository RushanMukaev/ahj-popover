export default class Popover {
  constructor(container) {
    this.container = container;
    this.show = false;
  }

  initPopover() {
    this.bindToDOM();
    this.btn = document.querySelector('.btnPopover');
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.showTooltip();
    });
  }

  static get markUp() {
    return `
        <div class="popover hidden">
           <h3 class="title">А вот и подсказка!</h3>
          <p class="text">А тут должен быть текст подсказки</p>
        </div>
    `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML('beforeend', this.constructor.markUp);
  }

  get popover() {
    return this.container.querySelector('.popover');
  }

  showTooltip() {
    this.popover.classList.toggle('hidden');
    this.show = !this.popover.classList.contains('hidden');
  }
}
