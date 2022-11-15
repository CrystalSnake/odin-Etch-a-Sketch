let gridSize = 16;

let button = document.createElement('button');
button.textContent = 'Change grid size';
document.body.appendChild(button);
button.setAttribute(
  'style',
  'display: block; margin: auto; margin-bottom: 20px;'
);
button.addEventListener(
  'click',
  () => (gridSize = +prompt('Enter grid size', 16))
);
button.addEventListener('click', redrawGrid);

let container = document.createElement('div');
container.className = 'container';
container.setAttribute(
  'style',
  'display: flex; flex-wrap: wrap; width: 640px; height: 640px; margin: auto;'
);

function drawGrid(gridSize) {
  for (let i = 0; i < gridSize ** 2; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.backgroundColor = 'lightgrey';
    cell.style.width = 640 / gridSize + 'px';
    cell.style.height = 640 / gridSize + 'px';
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.height = cell.style.height;
    overlay.style.transition = 'opacity .2s ease';
    overlay.style.backgroundColor = 'green';
    overlay.style.opacity = 0;
    cell.appendChild(overlay);
    container.appendChild(cell);
  }

  document.body.appendChild(container);

  container.onmouseover = handler;

  function handler(event) {
    event.target.style.opacity += 0.2;

    setTimeout(() => {
      event.target.style.opacity = 0;
    }, 1000);
  }
}

drawGrid(gridSize);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function redrawGrid() {
  removeAllChildNodes(container);
  drawGrid(gridSize);
}
