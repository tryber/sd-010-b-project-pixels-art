const colorPixels = document.querySelectorAll('.color');
const color = ['black', 'red', 'blue', 'green'];
const colorPallete = document.querySelector('#color-palette');
const colorsPalette = ['black', 'red', 'blue', 'green'];
const pixelBoard = document.querySelector('#pixel-board');

for (let i = 0; i < colorPixels.length; i += 1) {
  colorPixels[i].style.backgroundColor = colors[i];
}

function createColorPalette(colors) {
  for (let i = 0; i < colors.length; i += 1) {
    const colorPixels = document.createElement('div'); 
    colorPixels.className = 'color';
    colorPixels.style.backgroundColor = colors[i];
    colorPixels.addEventListener('click', changeSelected);
    firstSelect(colorPixels)
    colorPallete.appendChild(colorPixels);
  }
}
createColorPalette(colorsPalette);

function createPixels(size) {
  const pixels = document.createElement('tr');
  pixels.className = 'pixels';
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    pixel.addEventListener('click', paint);
    pixels.appendChild(pixel);
  }
  return pixels;
}

function createBoard(size) {
  for (let i = 0; i < size; i += 1) {
    pixelBoard.appendChild(createPixels(size));
  }
}
createBoard(5);

function firstSelect(element) {
  if (element.style.backgroundColor === 'black') {
    element.className = 'color selected';
  }
}

function changeSelected(event) {
  let lastSelected = document.querySelector('.selected')
  lastSelected.className = 'color';
  let newSelected = event.target;
  newSelected.className = 'color selected';
}

function paint(event) {
let selectedColor = document.querySelector('.selected');
let color = selectedColor.style.backgroundColor;
let selectedPixel = event.target;
selectedPixel.style.backgroundColor = color;
}
