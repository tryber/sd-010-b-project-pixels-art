const colorPalette = 'color-palette';
const pixelBoard = 'pixel-board';

// Cria uma tabela de caixas
function createBoxTable(numOfItems, itemClass, parentId, numOfLines = 1) {
  const paletteBox = document.getElementById(parentId);
  const boxTable = document.createElement('table');

  paletteBox.appendChild(boxTable);
  for (let line = 1; line <= numOfLines; line += 1) {
    const boxLine = document.createElement('tr');
    boxTable.appendChild(boxLine);
    for (let item = 1; item <= numOfItems; item += 1) {
      const boxItem = document.createElement('td');
      boxLine.appendChild(boxItem);
      boxItem.classList.add(itemClass);
    }
  }
}

// Adiciona uma classe para cada box da paleta.
function addClassToPaletteBox() {
  const boxes = document.getElementsByClassName('color');
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].classList.add(`color${index + 1}`);
    if (getComputedStyle(boxes[index]).backgroundColor === 'rgb(0, 0, 0)') {
      boxes[index].classList.add('selected');
    }
  }
}

// Faz cada box ser clicavel
function clickPaletteBox(event) {
  const selectedBox = document.querySelector('.selected');
  selectedBox.classList.remove('selected');
  event.target.classList.add('selected');
}

// Adiciona o evento de click à box.
function addPaletteBoxClickEvent() {
  const boxes = document.getElementsByClassName('color');
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].addEventListener('click', clickPaletteBox);
  }
}

// Muda a cor de fundo do elemento vinculado.
function changeBgColor(event, color) {
  const element = event;
  element.target.style.backgroundColor = color;
}

// Adiciona um evento de click para cada pixel
function addPixelClickEvent(eventFunction) {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', eventFunction);
  }
}

// Limpa a tabela de pixels
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

// Cria um evento para o botão que limpa a tabela de pixels
function clearBoardButton() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearBoard);
}

function rangeLimit(size) {
  let value = parseInt(size, 10);
  if (value < 5) {
    value = 5;
  }
  if (value > 50) {
    value = 50;
  }
  return value;
}

function changeBoardSize(inputSize) {
  const size = rangeLimit(inputSize);
  if (Number.isInteger(parseInt(size, 10))) {
    const pixelBoardElement = document.getElementById(pixelBoard);
    const table = pixelBoardElement.children[0];
    pixelBoardElement.removeChild(table);
    createBoxTable(size, 'pixel', pixelBoard, size);
    addPaletteBoxClickEvent();
    addPixelClickEvent((event) => {
      const selectedColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
      changeBgColor(event, selectedColor);
    });
  } else {
    alert('Board inválido!');
  }
}

function inputEvent() {
  const input = document.getElementById('board-size');
  input.addEventListener('change', () => {
    changeBoardSize(input.value);
  });
}

function inputButtonEvent() {
  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  button.addEventListener('click', () => {
    changeBoardSize(input.value);
  });
}

function randomizeColorBox() {
  const boxes = document.getElementsByClassName('color');
  for (let index = 1; index < boxes.length; index += 1) {
    const red = Math.floor(Math.random() * 254);
    const green = Math.floor(Math.random() * 254);
    const blue = Math.floor(Math.random() * 254);
    boxes[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
}

createBoxTable(4, 'color', colorPalette);
createBoxTable(5, 'pixel', pixelBoard, 5);

window.onload = () => {
  addClassToPaletteBox();
  inputEvent();
  addPaletteBoxClickEvent();
  addPixelClickEvent((event) => {
    const selectedColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
    changeBgColor(event, selectedColor);
  });
  clearBoardButton();
  inputButtonEvent();
  randomizeColorBox();
};
