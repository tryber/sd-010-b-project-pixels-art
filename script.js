// variables
const colors = document.querySelectorAll('.color');
const generateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');
const clearButton = document.getElementById('clear-board');

// define cor aleatória
function randomColors() {
  for (let index = 0; index < colors.length; index += 1) {
    const random = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    colors[index].style.background = random;
  }
  colors[0].style.background = 'black';
}

// cria os containers span para inserir os pixels
function createPixels() {
  const pixel = document.createElement('span');
  pixel.className = 'pixel';
  return pixel;
}

// adiciona os spans criados como filho de pixelBoard
for (let index = 0; index < 25; index += 1) {
  pixelBoard.appendChild(createPixels());
}

let pixelsClass = document.querySelectorAll('.pixel');

// adiciona e remove os elementos clicados para a classe selected
function newElement(element) {
  colors.forEach((x) => x.classList.remove('selected'));
  element.classList.add('selected');
}

// adiciona a cor em background nos pixels
function newPixel(pixel) {
  const pixelAux = pixel;
  const pixelSelected = document.querySelector('.selected');
  pixelAux.style.backgroundColor = pixelSelected.style.backgroundColor;
}

// limpa o Board (tabuleiro)
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((x) => { x.style.backgroundColor = 'white'; });
}

// função para criar nova Board
// essa função foi criada com ajuda de pesquisas no Stack Overflow
// https://stackoverflow.com/questions/25999747/how-to-create-board-nxn-using-javascript-and-jquery
// somando pesquisas em outras formas de realizar este script
function createNewBoard(width) {
  pixelBoard.style.gridTemplateColumns = `repeat(${width}, 40px)`; 
  pixelBoard.style.gridTemplateRows = `repeat(${width}, 40px)`;

  for (let index = 0; index < width ** 2; index += 1) {
    pixelBoard.appendChild(createPixels());
  }
  pixelsClass = document.querySelectorAll('.pixel');
  pixelsClass.forEach((px) => px.addEventListener('click', (e) => newPixel(e.target)));
}

// função para gerar a nova board criada, basicamente faz testes sobre o tamanho da "tabela" criada e aplica o valor à função anterior
function generateNewBoard() {
  let sizeValue = boardSize.valueAsNumber || 5;
  if (sizeValue < 5) sizeValue = 5;
  if (sizeValue > 50) sizeValue = 50;

  if (boardSize.value === '') {
    window.alert('Board inválido!');
  } else {
    pixelsClass.forEach((px) => px.remove());
    createNewBoard(sizeValue);
  }
}

// funções que serão carregadas ao início do carregamento da página
window.onload = function init() {
  randomColors();
  colors.forEach((elementAux) => elementAux.addEventListener('click', (e) => newElement(e.target)));
  pixelsClass.forEach((px) => px.addEventListener('click', (e) => newPixel(e.target)));
  generateBoard.addEventListener('click', generateNewBoard);
  clearButton.addEventListener('click', clearBoard);
};
