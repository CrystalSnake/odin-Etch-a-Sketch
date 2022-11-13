let gridSize = 16;

function drawGrid(gridSize) {
  let container = document.createElement('div');
  container.classList.add('container');

  for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement('div');
    cell.textContent = i + 1;
    container.appendChild(cell);
  }

  document.body.appendChild(container);
}

drawGrid(gridSize);
