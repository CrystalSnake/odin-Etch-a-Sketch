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
    cell.setAttribute(
      'style',
      'color: blue; background: lightgrey; width: 40px; height: 40px;'
    );
    container.appendChild(cell);
  }

  document.body.appendChild(container);

  container.addEventListener(
    'mouseover',
    (event) => {
      // highlight the mouseenter target
      event.target.style.background = 'purple';

      setTimeout(() => {
        event.target.style.background = 'lightgrey';
      }, 500);
    },
    false
  );
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
