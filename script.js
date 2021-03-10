const colorPallete = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const clearBoardButton = document.querySelector('#clear-board');
const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');

// Criando core aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

// Criando e adicionando cores a paleta
function createColorPalette(numberOfColors) {
  for (let i = 0; i < numberOfColors; i += 1) {
    const colorPixel = document.createElement('div');
    colorPixel.className = 'color';
    colorPixel.style.backgroundColor = randomColor();
    colorPallete.appendChild(colorPixel);
  }
}

// Desenhando no quadro
function drawPixel() {
  const colorSelected = document.querySelector('.selected').style
    .backgroundColor;
  this.style.backgroundColor = colorSelected;
}

// Criando quadro
function createRow(size) {
  const row = document.createElement('tr');
  row.className = 'row';
  for (let i = 0; i < size; i += 1) {
    const pixel = document.createElement('td');
    pixel.className = 'pixel';
    pixel.addEventListener('click', drawPixel);
    row.appendChild(pixel);
  }
  return row;
}

function createBoard(size) {
  pixelBoard.innerHTML = '';
  for (let i = 0; i < size; i += 1) {
    pixelBoard.appendChild(createRow(size));
  }
}

// Definindo cor preta como inicial
function defaultColor() {
  colorPallete.firstElementChild.classList.add('selected');
  colorPallete.firstElementChild.style.backgroundColor = 'black';
}

// Selecionando uma cor quando clicar em cima dela na paleta de cores
function selectColor() {
  const children = colorPallete.childNodes;
  children.forEach((child) => {
    child.addEventListener('click', (event) => {
      for (let i = 0; i < children.length; i += 1) {
        children[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  });
}

// Limpando o quadro
function clearBoard() {
  clearBoardButton.addEventListener('click', () => {
    const board = document.querySelectorAll('.pixel');
    console.log(board);
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  });
}

function resizeBoard() {
  generateBoard.addEventListener('click', () => {
    let size = boardSize.value;
    if (!size) return alert('Board inválido!');
    if (size < 5) size = 5;
    if (size > 50) size = 50;
    createBoard(size);
  });
}

window.onload = () => {
  createColorPalette(4);
  defaultColor();
  createBoard(5);
  selectColor();
  clearBoard();
  resizeBoard();
};
