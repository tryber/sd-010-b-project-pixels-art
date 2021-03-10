// Funções utilizadas

// Array de cores para a paleta
const colors = ['yellow', 'blue', 'green', 'red',
  'orange', 'brown', 'grey', 'aqua', 'khaki', 'lime',
  'beige', 'coral', 'cyan', 'crimson', 'gray', 'ivory',
  'lavender', 'magenta', 'linen', 'maroon', 'moccasin',
  'navy', 'olive', 'orchid', 'pink', 'plum', 'peru',
  'purple', 'salmon', 'sienna', 'silver', 'tan',
  'thistle', 'teal', 'tomato', 'turquoise', 'violet', 'wheat'];

function createPalette() {
  const paletteDiv = document.getElementById('color-palette');
  const paletteBlack = document.createElement('div');
  paletteBlack.className = 'color selected';
  paletteBlack.style.backgroundColor = 'black';
  paletteDiv.appendChild(paletteBlack);
  for (let index = 0; index < 3; index += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';
    const number = Math.ceil((Math.random()) * colors.length);
    console.log(number);
    palette.style.backgroundColor = colors[number];
    paletteDiv.appendChild(palette);
  }
}

function createGrid(size) {
  const board = document.getElementById('pixel-board');
  for (let index = 0; index < size; index += 1) {
    const row = document.createElement('TR');
    row.id = `row${index}`;
    board.appendChild(row);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const cell = document.createElement('TD');
      cell.className = 'pixel';
      cell.style.backgroundColor = 'white';
      row.appendChild(cell);
    }
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function resizeMinMax(parameter) {
  if (parameter < 5) {
    return 5;
  }
  if (parameter > 50) {
    return 50;
  }
  return parameter;
}
function clearBoard() {
  const pixelList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}
function paintPixel(pixel) {
  const selected = document.getElementsByClassName('selected');
  const modified = pixel;
  modified.style.backgroundColor = selected[0].style.backgroundColor;
}
function selectColor(selected) {
  document.querySelectorAll('.selected')[0].className = 'color';
  const modified = selected;
  modified.className = 'color selected';
}
function recreateBoard(size) {
  const newSize = resizeMinMax(size);
  const parent = document.getElementById('pixel-board');
  removeAllChildNodes(parent);
  createGrid(Number(newSize));
}
window.onload = function () {
  createPalette();
  createGrid(5);
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color') && !event.target.classList.contains('selected')) {
      selectColor(event.target);
    }
    if (event.target.classList.contains('pixel')) { paintPixel(event.target); }
    if (event.target.id === 'clear-board') { clearBoard(); }
    if (event.target.id === 'generate-board') {
      const size = document.getElementById('board-size');
      if (size.value && size.value > 0) {
        recreateBoard(size.value);
      } else { alert('Board inválido!'); }
    }
  }, false);
};
