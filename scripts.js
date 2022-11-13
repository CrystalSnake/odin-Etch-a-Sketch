let gridSize = 16;

function drawGrid(gridSize) {
  let container = document.createElement('div');
  container.className = 'container';
  container.setAttribute(
    'style',
    'display: flex; flex-wrap: wrap; width: 640px; height: 640px; margin: auto;'
  );

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
}

drawGrid(gridSize);

let container = document.querySelector('.container');
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
