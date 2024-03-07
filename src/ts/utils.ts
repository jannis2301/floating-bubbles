export const generateBubbles = (el: HTMLElement) => {
  const amountOfBubbles = Math.floor(Math.random() * 5) + 5; // Random amount between 5 & 15
  const bubbleArray = Array.from({ length: amountOfBubbles });

  for (const _bubble of bubbleArray) {
    const newBubble = document.createElement('div');
    newBubble.classList.add('FB-Bubble');
    // Set random size and position for the bubble
    const bubbleSize = Math.floor(Math.random() * 100) + 50; // Random size between 50px & 150px
    const bubblePosition = Math.floor(Math.random() * 91) + 10; // Random position between 10% & 90%
    const animationDuration = Math.floor(Math.random() * 4) + 7; // Random animation time between 7s & 10s
    const animationDelay = Math.floor(Math.random() * 6); // Random animation delay between 0s & 5s
    newBubble.style.setProperty('--bubble-size', `${bubbleSize}px`);
    newBubble.style.setProperty('--bubble-position', `${bubblePosition}%`);
    newBubble.style.setProperty(
      '--animation-duration',
      `${animationDuration}s`
    );
    newBubble.style.setProperty('animation-delay', `${animationDelay}s`);
    el.appendChild(newBubble);
  }
};
