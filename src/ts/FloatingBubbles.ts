import { generateBubbles } from './utils';

export class FloatingBubbles {
  private el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
    this.init();
  }

  private init() {
    generateBubbles(this.el);
  }
}
