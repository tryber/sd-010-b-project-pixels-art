const color2 = parseInt(Math.random() * 255, 0);
const color3 = parseInt(Math.random() * 255, 0);
const color4 = parseInt(Math.random() * 255, 0);
const individualColor = document.getElementsByClassName('color');
const paletteColors = document.querySelector('#color-palette');
const buttonClear = document.getElementById('clear-board');

const generateButton = document.getElementById('generate-board');
const tBodyPixelsBoard = document.getElementById('table-body');

function createPaletteColors() {
  const createBoxColor = document.createElement('div');
  createBoxColor.className = 'color';
  const colors = ['black', `rgba(${color2}, ${color3}, ${color4})`,
    `rgba(${color2}, ${color4}, ${color3})`,
    `rgba(${color4}, ${color2}, ${color3})`];
  for (let index = 0; index < individualColor.length; index += 1) {
    individualColor[index].style.backgroundColor = colors[index];
  }
}
createPaletteColors();

window.onload = function initializeColorBlack() {
  const boxColorBlack = document.querySelectorAll('.color')[0];
  boxColorBlack.className = 'color selected';
  const backgroundColorBoxBlack = boxColorBlack.style.backgroundColor;
  localStorage.setItem('color', backgroundColorBoxBlack);
};

function selectedPalette() {
  paletteColors.addEventListener('click', (event) => {
    const element = event;
    document.querySelector('.selected').className = 'color';
    element.target.className = 'color selected';
  });
}
selectedPalette();

function draw() {
  const table = document.querySelector('#pixel-board');
  table.addEventListener('click', (event) => {
    const element = event;
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    element.target.style.backgroundColor = colorSelected;
  });
}
draw();

function clear() {
  const pixelsBoard = document.querySelectorAll('.pixel');
  buttonClear.addEventListener('click', () => {
    for (let index = 0; index < pixelsBoard.length; index += 1) {
      pixelsBoard[index].style.backgroundColor = 'white';
    }
  });
}
clear();

generateButton.addEventListener('click', () => {
  let inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
  } else if (inputValue > 50) {
    inputValue = 50;
  } else if (inputValue < 5) {
    inputValue = 5;
  }
  if ((inputValue >= 1 && inputValue <= 50)) {
    tBodyPixelsBoard.innerText = '';
    for (let index = 1; index <= inputValue; index += 1) {
      const createTr = document.createElement('tr');
      createTr.className = 'line';
      tBodyPixelsBoard.appendChild(createTr);
      for (let index2 = 1; index2 <= inputValue; index2 += 1) {
        const createTd = document.createElement('td');
        createTd.className = 'pixel';
        createTr.appendChild(createTd);
      }
    }
    clear();
  }
});
