let selectedColor = 'black';
let oldColor;

function getBoard() {
  const board = document.getElementById('pixel-board');
  return board;
}

function genBoard(tamanho) {
  const board = getBoard();
  for (let i = 1; i <= tamanho; i += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-board-tr';
    board.appendChild(pixelRow);
    for (let i2 = 1; i2 <= tamanho; i2 += 1) {
      const lastRow = document.getElementById('pixel-board').lastChild;
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lastRow.appendChild(pixel);
    }
  }
}

function delBoard() {
  const board = getBoard();
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
}

document.addEventListener('click', (e) => {
  const event = e;
  if (event.target.classList.contains('color')) {
    oldColor = document.getElementById(selectedColor);
    oldColor.classList.remove('selected');
    selectedColor = event.target.id;
    event.target.classList.add('selected');
  } else if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor;
  }
});

document.getElementById('clear-board').onclick = () => {
  const board = document.getElementsByClassName('pixel');
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
};

document.getElementById('generate-board').onclick = () => {
  const sizeInput = document.getElementById('board-size');
  let boardSize = sizeInput.value;
  if (boardSize !== '') {
    if (boardSize > 50) {
      boardSize = 50;
      sizeInput.value = 50;
    } else if (boardSize < 5) {
      boardSize = 5;
      sizeInput.value = 5;
    }
    delBoard();
    genBoard(boardSize);
  } else {
    alert('Board inválido!');
  }
};

genBoard(5);
