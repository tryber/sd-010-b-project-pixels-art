const paleteCreation = () => {
  const colorPalete = document.querySelector('#color-palette');
  const tr = document.createElement('tr');
  colorPalete.appendChild(tr);
  for (let index = 0; index < 4; index += 1) {
    const td = document.createElement('td');
    td.className = 'color';
    tr.appendChild(td);
  }
};

const setSelectedColorToBlack = () => {
  document.querySelectorAll('.color')[0].className += ' selected';
};

const pixelBoardCreation = () => {
  const boardSize = 5;
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < boardSize; index += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let count = 0; count < boardSize; count += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
};

const setingEventListenersToPalette = () => {
  const paleta = document.querySelectorAll('.color');
  for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', (event) => {
      const corEscolhida = document.querySelector('.selected');
      corEscolhida.className = 'color';
      const evento = event;
      evento.target.className += ' selected';
    });
  }
};

const RGBColors = () => {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const corAleatoria = () => {
  for (let i = 1; i < 4; i += 1) {
    document.getElementsByClassName('color')[i].style.backgroundColor = RGBColors();
  }
};

const addEventClickTds = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const evento = event;
      evento.target.className = 'pixel pselected';
      const colorSelected = document.querySelector('.selected');
      const style = getComputedStyle(colorSelected);
      const bgColorSelected = style.backgroundColor;
      evento.target.style.backgroundColor = bgColorSelected;
    });
  }
};
/* A função acima do código que é para resolução do requisito 8 só consegui completar
por causa da ajuda do Lucas Martins da Silva e do Matheus Henrique de Gois */

const createClearButton = () => {
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', () => {
    const allPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < allPixel.length; index += 1) {
      allPixel[index].style.backgroundColor = 'white';
    }
  });
};

const generateNewBoard = (param) => {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  let myParam = param;
  if (myParam < 5) {
    myParam = 5;
  } if (myParam > 50) {
    myParam = 50;
  }
  for (let index = 0; index < myParam; index += 1) {
    const tr = document.createElement('tr');
    pixelBoard.appendChild(tr);
    for (let count = 0; count < myParam; count += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      tr.appendChild(td);
    }
  }
};

const buttonVQVNewBoard = () => {
  const generateBoard = document.querySelector('#generate-board');
  const boardSize = document.querySelector('#board-size');
  generateBoard.addEventListener('click', () => {
    if (boardSize.value.length === 0) {
      alert('Board inválido!');
    }
    generateNewBoard(boardSize.value);
    addEventClickTds();
  });
};

window.onload = () => {
  paleteCreation();
  setSelectedColorToBlack();
  pixelBoardCreation();
  setingEventListenersToPalette();
  RGBColors();
  corAleatoria();
  addEventClickTds();
  createClearButton();
  buttonVQVNewBoard();
};
