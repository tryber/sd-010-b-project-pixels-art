/* Criado cores randomicas para a paleta */

function getRandomRGB() {
  let rgb = 'rgb(';
  for (let index = 0; index < 3; index += 1) {
    rgb += Math.ceil(Math.random() * 255);
    if (index === 2) {
      rgb += ')';
    } else {
      rgb += ',';
    }
  }
  return rgb;
}

const spanSecond = document.getElementById('second-color');

const spanThird = document.getElementById('third-color');

const spanFouth = document.getElementById('fourth-color');

spanSecond.style.backgroundColor = getRandomRGB();
spanThird.style.backgroundColor = getRandomRGB();
spanFouth.style.backgroundColor = getRandomRGB();

const dataSetColor = 'data-color';
function changeSecondColor(element) {
  spanSecond.setAttribute(dataSetColor, element.target.value);
  spanSecond.style.backgroundColor = element.target.value;
}

function changeThirdColor(element) {
  spanThird.setAttribute(dataSetColor, element.target.value);
  spanThird.style.backgroundColor = element.target.value;
}

function changeFourthColor(element) {
  spanFouth.setAttribute(dataSetColor, element.target.value);
  spanFouth.style.backgroundColor = element.target.value;
}

let inpSecond = null;
inpSecond = document.getElementById('input-second');

let inpThird = null;
inpThird = document.getElementById('input-third');

let inpFourth = null;
inpFourth = document.getElementById('input-fourth');

inpSecond.addEventListener('change', changeSecondColor);
inpThird.addEventListener('change', changeThirdColor);
inpFourth.addEventListener('change', changeFourthColor);

function getPaletteItems() {
  return document.getElementsByClassName('color');
}

function addColorInPixel() {
  const colorPalette = document.getElementsByClassName('selected')[0];
  this.style.backgroundColor = colorPalette.style.backgroundColor;
}

/* Criando quadro de pixels dinamicamente: */

function generateBoard(number) {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.width = `${(number * 43)}px`;
  pixelBoard.innerHTML = '';
  for (let index = 0; index < number * number; index += 1) {
    let pixel = null;
    pixel = document.createElement('span');
    pixel.setAttribute('id', index + 1);
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.addEventListener('click', addColorInPixel);
    pixelBoard.appendChild(pixel);
  }
}

window.onload = () => {
  const primaryColor = document.getElementsByClassName('selected')[0];
  primaryColor.style.backgroundColor = 'rgb(0, 0, 0)';
  generateBoard(5);
};
/* Fazendo com que um elemento da palheta de cores marque selected caso um deles for clicado */
let paletterItems = [];
paletterItems = getPaletteItems();

function markAllWithNotSelected() {
  for (let index = 0; index < paletterItems.length; index += 1) {
    paletterItems[index].className = 'color';
  }
}

function markSelected(element) {
  markAllWithNotSelected();
  element.target.setAttribute('class', 'color selected');
}

for (let index = 0; index < paletterItems.length; index += 1) {
  paletterItems[index].addEventListener('click', markSelected);
}
console.log(getPaletteItems());

/* Criando botão para limpar todo o quadro de pixels: */

const buttonClearBoard = document.getElementById('clear-board');

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

buttonClearBoard.addEventListener('click', clearBoard);

/* Desafio 10: */
const buttonGenerateBoard = document.getElementById('generate-board');
function generateBoardByInput() {
  const inputBoardSize = document.getElementById('board-size');
  let number = parseInt(inputBoardSize.value, 10);
  if (inputBoardSize.value === '' || number <= 0) {
    alert('Board inválido!');
  } else if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  generateBoard(number);
}

buttonGenerateBoard.addEventListener('click', generateBoardByInput);
