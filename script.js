function createDiv() {
  const paletteDiv = document.createElement('div');
  paletteDiv.className = 'color';
  return paletteDiv;
}

function spawn(element) {
  const elementMain = document.querySelector('main');
  elementMain.appendChild(element);
  return elementMain;
}

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
spawn(title);

const colorP = document.createElement('section');
colorP.id = 'color-palette';

for (let index = 0; index < 4; index += 1) {
  colorP.appendChild(createDiv());
}
spawn(colorP);

const black = document.querySelector('#color-palette').firstChild;
black.id = 'black';
const violet = document.querySelector('#color-palette').firstChild.nextSibling;
violet.id = 'violet';
const blue = document.querySelector('#color-palette').firstChild.nextSibling.nextSibling;
blue.id = 'blue';
const choco = document.querySelector('#color-palette').lastChild;
choco.id = 'choco';
document.querySelector('#black').classList = 'color selected';

const boardPixel = document.createElement('div');
boardPixel.id = 'pixel-board';

for (let column = 0; column < 5; column += 1) {
  const lineDiv = document.createElement('div');
  lineDiv.className = 'line';
  for (let line = 0; line < 5; line += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = 'white';
    lineDiv.appendChild(pixel);
  }
  boardPixel.appendChild(lineDiv);
}
spawn(boardPixel);

const divsColors = document.getElementsByClassName('color');
let idColor = '';
for (let index = 0; index < divsColors.length; index += 1) {
  divsColors[index].addEventListener('click', (event) => {
    divsColors[0].className = 'color';
    divsColors[1].className = 'color';
    divsColors[2].className = 'color';
    divsColors[3].className = 'color';
    if (event.target.className === 'color') {
      event.target.className = 'color selected';
      idColor = event.target.id;
    }
  });
}

const divsPixel = document.querySelectorAll('.pixel');

for (let index = 0; index < divsPixel.length; index += 1) {
  divsPixel[index].addEventListener('click', (event) => {
    if (idColor === '') {
      event.target.id = 'black';
    } else {
      event.target.id = idColor;
    }
  });
}
