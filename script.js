// Generic Create Element function

const createGenElement = (
  elName,
  className = '',
  contentText = '',
  idValue = '',
) => {
  const elementCreated = document.createElement(elName);
  elementCreated.textContent = contentText;
  if (className.length > 0) elementCreated.setAttribute('class', className);
  if (idValue.length > 0) elementCreated.setAttribute('id', idValue);
  return elementCreated;
};

// Elements

const palletes = Array.from(document.querySelectorAll('.color'));
const pixelBoard = document.querySelector('#pixel-board');
const clearBtn = document.querySelector('#clear-board');
const boardSize = document.querySelector('#board-size');
const generateBoardBtn = document.querySelector('#generate-board');

// Setting pallete colors

const setPalleteColors = () => {
  let r = Math.ceil(Math.random() * 84);
  let g = Math.ceil(Math.random() * 84);
  let b = Math.ceil(Math.random() * 84);
  palletes.forEach((pallete, index) => {
    const memoryPallete = pallete;
    if (!index) {
      memoryPallete.style.backgroundColor = 'black';
    } else {
      memoryPallete.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r += 84;
      g += 84;
      b += 84;
    }
  });
};

// paint pixels
function paintPixels() {
  const pixels = Array.from(document.querySelectorAll('.pixel'));
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const element = event.target;
      const color = document.querySelector('.selected').style.backgroundColor;
      element.style.backgroundColor = color;
    });
  });
}

// Set Pixel Grid by x Amount

const setPixelGrid = (size) => {
  pixelBoard.innerHTML = '';
  for (let row = 0; row < size; row += 1) {
    const tr = document.createElement('tr');

    for (let column = 0; column < size; column += 1) {
      const td = createGenElement('td', 'pixel');
      // if (column > 0) {
      //   td.style.borderLeft = 0;
      // }
      // if (row > 0) {
      //   td.style.borderTop = 0;
      //   // td.style.height = '39px';
      // }
      tr.appendChild(td);
    }
    pixelBoard.appendChild(tr);
    paintPixels();
  }
};

// select color

function selectColor() {
  palletes.forEach((pallete) => {
    pallete.addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  });
}

// limpar

function clearAllPixels() {
  const pixels = Array.from(document.querySelectorAll('.pixel'));
  pixels.forEach((pixel) => {
    const pixelElement = pixel;
    pixelElement.style.backgroundColor = 'white';
  });
}

function setClearAllBtn() {
  clearBtn.addEventListener('click', () => clearAllPixels());
}

// board size

function setGenerateBoardBtn() {
  generateBoardBtn.addEventListener('click', () => {
    let size = boardSize.value;
    if (!size) {
      alert('Board inválido!');
      return;
    }
    if (size < 5) size = 5;
    if (size > 50) size = 50;
    setPixelGrid(size);
    clearAllPixels();
  });
}

function start() {
  setPalleteColors();
  setPixelGrid(5);
  selectColor();
  paintPixels();
  setClearAllBtn();
  setGenerateBoardBtn();
}

window.onload = () => {
  start();
};
