const square = document.getElementById('movable-square');

function getRandomPosition() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randomX = Math.random() * (windowWidth - 50); // Restamos el tamaño del cuadrado
  const randomY = Math.random() * (windowHeight - 50);

  return { x: randomX, y: randomY };
}

square.addEventListener('mouseover', () => {
  const { x, y } = getRandomPosition();
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
});
