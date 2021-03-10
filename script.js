// ---------------------------------------------------
// CREATE NEW BOARD

// Criação da div .row
const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';
  pixelBoard.appendChild(rowDiv);
}
// Criação da div .pixel
const rowDiv = document.getElementsByClassName('row');

for (let i = 0; i < rowDiv.length; i += 1) {
  for (let j = 0; j < rowDiv.length; j += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    rowDiv[i].appendChild(pixelDiv);
  }
}

let pixels = document.querySelectorAll('.pixel');

// ---------------------------------------------------
// Mudança da Classe .selected

const selectedColor = document.getElementsByClassName('selected');
const black = document.querySelector('.black');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3s = document.querySelector('.color3');

function classChange() {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  this.classList.add('selected');
}

black.addEventListener('click', classChange);
color1.addEventListener('click', classChange);
color2.addEventListener('click', classChange);
color3s.addEventListener('click', classChange);

// ---------------------------------------------------
// Utilizando a classe .selected para pintar os pixels
// Referência: https://zellwk.com/blog/css-values-in-js/

function paintPixel() {
  const style = getComputedStyle(selectedColor[0]);
  const color = style.backgroundColor;
  this.style.backgroundColor = color;
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', paintPixel);
}
// ---------------------------------------------------
// Botão para limpar o board

const btn = document.querySelector('#clear-board');

function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

btn.addEventListener('click', clearBoard);

// ---------------------------------------------------
// CREATE NEW BOARD

// Criação da div .row
function createRows(n) {
  for (let i = 0; i < n; i += 1) {
    const newRowDiv = document.createElement('div');
    newRowDiv.className = 'row';
    pixelBoard.appendChild(newRowDiv);
  }
}
// Criação da div .pixel
function createPixels() {
  const newRowDiv = document.getElementsByClassName('row');

  for (let i = 0; i < newRowDiv.length; i += 1) {
    for (let j = 0; j < newRowDiv.length; j += 1) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      newRowDiv[i].appendChild(pixelDiv);
    }
  }
}

// Remoção do board anterior
function removeBoard() {
  pixelBoard.innerHTML = '';
}

// Criação do board
function createBoard(n) {
  removeBoard();
  createRows(n);
  createPixels();
  pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
}

// Ao clicar no botão, pegar o número no input e imprimir na função createBoard
let boardSize = document.getElementById('board-size').value;
const button = document.getElementById('generate-board');

function board() {
  boardSize = document.getElementById('board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  } else if (boardSize < 5) {
    createBoard(5);
  } else if (boardSize > 50) {
    createBoard(50);
  } else {
    createBoard(boardSize);
  }
}

button.addEventListener('click', board);

// ---------------------------------------------------
// CREATE NEW BOARD
// https://css-tricks.com/snippets/javascript/random-hex-color/
const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);

color1.style.backgroundColor = `#${randomColor1}`;
color2.style.backgroundColor = `#${randomColor2}`;
color3s.style.backgroundColor = `#${randomColor3}`;
