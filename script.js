const btnColor = document.querySelectorAll('.color');
const btnClear = document.querySelector('#clear-board');
const inputBoardSize = document.querySelector('#board-size');
const btnBoardSIze = document.querySelector('#generate-board');

const setColor = () => {
  for (let i = 0; i < btnColor.length; i += 1) {
    const [first, second, third] = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];

    btnColor[0].style.backgroundColor = 'black';

    btnColor[i].style.backgroundColor = `rgb(${first},${second},${third})`;

    btnColor[i].addEventListener('click', (e) => {
      for (let j = 0; j < btnColor.length; j += 1) {
        btnColor[j].classList.remove('selected');
      }
      e.target.classList.add('selected');
    });
  }
};

setColor();

const paintPixel = (pixel) => {
  const element = pixel;
  for (let i = 0; i < btnColor.length; i += 1) {
    if (btnColor[i].className === 'color selected') {
      element.style.backgroundColor = btnColor[i].style.backgroundColor;
    }
  }
};

const checkEmptyValue = (value) => {
  const valor = value === '' ? alert('Board inválido!') : null;
  return valor;
};

const createRow = (value) => {
  const board = document.getElementById('pixel-board');
  board.innerText = '';

  for (let i = 0; i < value; i += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    board.appendChild(newRow);

    for (let j = 0; j < value; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      newRow.appendChild(pixel);
      pixel.addEventListener('click', () => {
        paintPixel(pixel);
      });
    }
  }
};

const setSize = (value) => {
  checkEmptyValue(value);

  let valor = value;
  if (value > 50) {
    valor = 50;
  } else if (value < 5) {
    valor = 5;
  }

  createRow(valor);
};

btnBoardSIze.addEventListener('click', () => {
  setSize(inputBoardSize.value);
});
// Clears the board ==================================== //

const clearBoard = () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
};

btnClear.addEventListener('click', clearBoard);

// clearBoard();

window.onload = () => {
  setSize(5);
};
