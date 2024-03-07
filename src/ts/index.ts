import { FloatingBubbles } from './FloatingBubbles';

const backgroundContainer = document.querySelector(
  '.FB-Background'
) as HTMLElement;

window.addEventListener('DOMContentLoaded', () => {
  new FloatingBubbles(backgroundContainer);
});
