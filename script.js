const colorItems = document.querySelectorAll('.color'); // color palette
const pixelBoard = document.querySelector('#pixel-board'); // this gets the whole board
const colorPalette = document.querySelector('#color-palette'); // get the color-palette section
const clearButton = document.querySelector('#clear-board'); // gets Limpar button
const vqvButton = document.querySelector('#generate-board'); // gets VQV button
// import event from "event-module";

function randomRGB() {
  const r = Math.ceil(Math.random() * 256);
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);

  return [r, g, b];
}

// set colorItems, from colorsList, to color palette
function buttonColor() {
  colorItems[0].style.backgroundColor = 'black';
  for (let i = 1; i < colorItems.length; i += 1) {
    const rgb = randomRGB();
    colorItems[i].style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
}

// Paints the single pixel selected
// I found this logic on Gustavo Cerqueira's project: @gmcerqueira
function paintPixel() {
  const pencil = document.querySelector('.selected').style.backgroundColor; // gets background color style from selected color
  this.style.backgroundColor = pencil;
}

// creates a single pixel
function createPixel(rowNumber) {
  const pixel = document.createElement('td');
  const row = document.querySelectorAll('#pixel-board>tr');
  pixel.className = 'pixel';
  pixel.addEventListener('click', paintPixel); // I  this solution at Gustavo Cerqueira's Project: @gmcerqueira
  row[rowNumber].appendChild(pixel);
}

// creates a row of pixels
function createRow(rowNumber, colNumber) {
  const row = document.createElement('tr');
  pixelBoard.appendChild(row);
  for (let i = 0; i < colNumber; i += 1) {
    createPixel(rowNumber);
  }
}

// creates the pixel board
function createBoard(boardSize) {
  pixelBoard.innerHTML = '';
  for (let i = 0; i < boardSize; i += 1) {
    createRow(i, boardSize);
  }
}

// sets the board to the size the user wants
function setBoardSize() {
  vqvButton.addEventListener('click', () => {
    const boardSize = document.querySelector('#board-size').value;
    if (boardSize === '') {
      alert('Board inválido!');
    } else if (boardSize < 5) {
      createBoard(5);
      alert('Valor mínimo do board: 5');
    } else if (boardSize > 50) {
      createBoard(50);
      alert('Valor máximo do board: 50');
    } else {
      createBoard(boardSize);
    }
  });
}

// sets black as the selected color
// I took this code block from Gustavo Cerqueira's project at https://github.com/tryber/sd-010-b-project-pixels-art/blob/gmcerqueira-project-pixels-art/script.js
function setDefaultColor() {
  colorPalette.firstElementChild.classList.add('selected');
}

// selects the color to paint pixels
function changeColorPencil() {
  for (let i = 0; i < colorItems.length; i += 1) {
    colorItems[i].addEventListener('click', (event) => {
      for (let j = 0; j < colorItems.length; j += 1) {
        colorItems[j].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}

// clears all painted pixels
function clearBoard() {
  clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel'); // gets all pixels
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style = '';
    }
  });
}

window.onload = () => {
  buttonColor();
  createBoard(5);
  setBoardSize();
  setDefaultColor();
  changeColorPencil();
  clearBoard();
};
