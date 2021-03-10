function createPixelBoard(pixelBoardSize) {
  const pixelBoard = document.getElementById('pixel-board');

  while (pixelBoard.lastElementChild) {
    pixelBoard.removeChild(pixelBoard.lastElementChild);
  }

  for (let index = 0; index < pixelBoardSize; index += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);

    for (let index2 = 0; index2 < pixelBoardSize; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', function evento(event) {
    if (event.target.className.includes('color')) {
      const palette = document.getElementsByClassName('color');
      for (let index = 0; index < palette.length; index += 1) {
        palette[index].className = 'color';
      }
      event.target.className += ' selected';
    }
  })
}

function paintPixelBoard() {
  let pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', function evento(event) {
    if (event.target.className === 'pixel') {
      let selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  })
}

function clearPixelBoard() {
  let buttonClearBoard = document.getElementById('clear-board');
  buttonClearBoard.addEventListener('click', function clear() {
    let board = document.getElementsByClassName('pixel');
    for(let index = 0; index < board.length; index += 1) {
      board[index].style.backgroundColor = '';
    }
  })
}

function changeBoardSize() {
  let buttonInput = document.getElementById('generate-board');
  buttonInput.addEventListener('click', function() {
  let inputValue = document.getElementById('board-size').value;

  if (inputValue <= 5 && inputValue > 0) {
    createPixelBoard(5);
  }
  else if (inputValue >= 50) {
    createPixelBoard(50);
  }
  else if (inputValue > 5 && inputValue < 50){
    createPixelBoard(inputValue);
  }
  else {
    alert('Board inválido!');
  }
  })
}

function generateRandomColors() {
  let colorPalette = document.getElementsByClassName('color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    if (colorPalette[index].id === 'color1') {
      colorPalette[index].style.backgroundColor = 'black';
    }
    else {
      colorPalette[index].style.backgroundColor = 'RGB(' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ')';
    }
  }
}

clearPixelBoard();
createPixelBoard(5);
selectColor();
paintPixelBoard();
changeBoardSize();
generateRandomColors();
