const colors = ['black', 'tomato', 'green', 'blue', 'yellow', 'red', 'orange', 'pink', 'violet'];
let rowsAndCols = 5;
const numberOfColors = 4;
const pixelBoard = document.getElementById('pixel-board');

[sessionStorage.color] = colors;

const h1 = document.getElementById('title');
h1.insertAdjacentHTML('afterend', '<div id="color-palette"></div>');

function currentColorSelected(e) {
  const color = document.querySelector('.selected');
  color.className = 'color'; // ou color.classList.remove('selected');
  sessionStorage.color = e.target.style.backgroundColor;
  e.target.className = 'color selected'; // ou e.target.className.add('selected'); ou ainda: e.target.className += ' selected'
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

const btn = document.getElementById('clear-board');
btn.addEventListener('click', clearBoard);

function pixelColor() {
  const bgColor = document.getElementsByClassName('color');
  [bgColor[0].style.backgroundColor] = colors;
  for (let i = 1; i < numberOfColors; i += 1) {
    const color = Math.ceil(Math.random() * (colors.length - 1)); // ceil fará com que a posição 0 nunca seja obtida.
    bgColor[i].style.backgroundColor = colors[color];
    colors.splice(color, 1);
  }
}

function fillRowColor() {
  const colorPalette = document.getElementById('color-palette');
  for (let i = 0; i < numberOfColors; i += 1) {
    const color = document.createElement('div');
    color.className = (i !== 0 ? 'color' : 'color selected');
    colorPalette.appendChild(color);
    color.addEventListener('click', currentColorSelected);
  }
  pixelColor();
}
fillRowColor();

function pixelColorChange(e) {
  e.target.style.backgroundColor = sessionStorage.color;
}

function fillLinePixel() {
  for (let i = 0; i < rowsAndCols ** 2; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
    pixel.addEventListener('click', pixelColorChange);
  }
}
fillLinePixel();

function rowsAndColsDefine() {
  if (rowsAndCols < 5) {
    rowsAndCols = 5;
  } else if (rowsAndCols > 50) {
    rowsAndCols = 50;
  }
}

function generateBoard() {
  rowsAndCols = document.getElementById('board-size').value;
  if (rowsAndCols !== '') {
    rowsAndColsDefine();
    pixelBoard.innerHTML = '';
    pixelBoard.style.width = `${rowsAndCols * 42}px`;
    fillLinePixel();
  } else {
    alert('Board inválido!');
  }
}

const btnVQV = document.getElementById('generate-board');
btnVQV.addEventListener('click', generateBoard);
