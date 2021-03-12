window.onload = function () {
  document.querySelector('#black').className += ' selected';
  document.querySelector('#black').style.backgroundColor = 'black';
};

const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('.colorPalette');
const numberSquare = document.querySelector('#board-size');
const btnErase = document.querySelector('#clear-board');

let atualNumber = 5;

function randomColor() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}

function setColor() {
  document.querySelector('#black').style.backgroundColor = 'black';
  document.querySelector('#red').style.backgroundColor = randomColor();
  document.querySelector('#blue').style.backgroundColor = randomColor();
  document.querySelector('#green').style.backgroundColor = randomColor();
}

function linePixels(line, numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
  atualNumber = numbers;
}

function boxPixels(numbers) {
  for (let index = 0; index < numbers; index += 1) {
    const pixelLine = document.createElement('div');
    linePixels(pixelLine, numbers);
    pixelLine.className = 'linePixel';
    pixelBoard.appendChild(pixelLine);
  }
}

function boxSize() {
  let rightSize = parseInt(numberSquare.value, 10);
  if (rightSize < 5) {
    rightSize = 5;
  } else if (rightSize > 50) {
    rightSize = 50;
  }
  boxPixels(rightSize);
}

function boxSquare() {
  if (numberSquare.value === '') {
    alert('Board inválido!');
  } else {
    const childrenPixel = document.querySelectorAll('.linePixel');
    for (let index = 0; index < atualNumber; index += 1) {
      pixelBoard.removeChild(childrenPixel[index]);
    }
    boxSize();
  }
}

function numbersSquares() {
  const generateSquare = document.querySelector('#generate-board');
  generateSquare.addEventListener('click', boxSquare);
}

function changePixelColor(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  const eve = event;
  eve.target.style.backgroundColor = color;
}

function colorizePixels() {
  pixelBoard.addEventListener('click', changePixelColor);
}

function selectPalette(event) {
  const pad1 = document.querySelector('#black');
  pad1.className = 'color';
  const pad2 = document.querySelector('#red');
  pad2.className = 'color';
  const pad3 = document.querySelector('#blue');
  pad3.className = 'color';
  const pad4 = document.querySelector('#green');
  pad4.className = 'color';
  const eve = event;
  eve.target.className = 'color selected';
}

function setSelected() {
  colorPalette.addEventListener('click', selectPalette);
}

function eraseAll() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function eraseScrean() {
  btnErase.addEventListener('click', eraseAll);
}

boxPixels(5);
setColor();
colorizePixels();
setSelected();
eraseScrean();
numbersSquares();
