const colorPalette = document.createElement('table');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);

const sizePalette = 4;

function createPalette() {
  for (let index = 0; index < sizePalette; index += 1) {
    const square = document.createElement('td');
    square.className = 'color';
    colorPalette.appendChild(square);
  }
}

function colorSquare() {
  const square = document.querySelectorAll('.color');
  square[0].className = 'color selected';
  square[0].style.backgroundColor = 'black';
  square[1].style.backgroundColor = 'blue';
  square[2].style.backgroundColor = 'green';
  square[3].style.backgroundColor = 'red';
}

const pixelBoard = document.createElement('table');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);

const sizeBoard = 5;

function createColorBoard() {
  for (let index1 = 0; index1 < sizeBoard; index1 += 1) {
    const boardLine = document.createElement('tr');
    for (let index2 = 0; index2 < sizeBoard; index2 += 1) {
      const lineElement = document.createElement('td');
      lineElement.className = 'pixel';
      boardLine.appendChild(lineElement);
      pixelBoard.appendChild(boardLine);
    }
  }
}

function reselectColor() {
  const select = document.getElementsByClassName('color');
  for (let index = 0; index < select.length; index += 1) {
    select[index].addEventListener('click', function (event) {
      select[0].classList.remove('selected');
      select[1].classList.remove('selected');
      select[2].classList.remove('selected');
      select[3].classList.remove('selected');
      event.target.className = 'color selected';
    });
  }
}

function printSquare() {
  const color = document.getElementsByClassName('color');
  const pixel = document.getElementsByClassName('pixel');
  const color1 = color[0]; 
  const color2 = color[1];
  const color3 = color[2];
  const color4 = color[3];
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      if (color1.className === 'color selected') {
        event.target.style.backgroundColor = 'black';
      } else if (color2.className === 'color selected') {
        event.target.style.backgroundColor = 'blue';
      } else if ( color3.className === 'color selected') {
        event.target.style.backgroundColor = 'green';
      } else if (color4.className === 'color selected') {
        event.target.style.backgroundColor = 'red';
      }
    });
  }
}

function createButton() {
  const button = document.createElement('button');
  const place = document.getElementById('color-palette');
  button.id = 'clear-board';
  button.innerHTML = 'Limpar';
  document.body.insertBefore(button, place.nextSibling);
  button.addEventListener('click', function () {
    const board = document.getElementsByClassName('pixel');
    for (let index = 0 ; index < board.length; index += 1) {
      board[index].style.backgroundColor = 'white';
    }
  });
}

createPalette();
createButton();
colorSquare();
createColorBoard();
reselectColor();
printSquare();
