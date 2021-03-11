function randomizaPaleta() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

const corPaleta = document.querySelectorAll('.color');
function pintaPaleta() {
  for (let index = 0; index < corPaleta.length; index += 1) {
    if (index === 0) {
      corPaleta[index].style.backgroundColor = 'black';
      corPaleta[index].className = 'color selected';
    } else if (index === 1 || index === 2 || index === 3) {
      corPaleta[index].style.backgroundColor = randomizaPaleta();
    }
  }
}
pintaPaleta();

const pixelBoard = document.querySelector('#pixel-board');
function createBoard(height, width) {
  for (let boardHeight = 0; boardHeight < height; boardHeight += 1) {
    const boardLine = document.createElement('tr');
    pixelBoard.appendChild(boardLine);
    for (let boardWidth = 0; boardWidth < width; boardWidth += 1) {
      const addLine = pixelBoard.lastElementChild;
      const addPixel = document.createElement('td');
      addPixel.className = 'pixel';
      addPixel.style.background = 'white';
      addLine.appendChild(addPixel);
    }
  }
}
createBoard(5,5);

const generateBoard = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');

function randomicGrid() {
  generateBoard.addEventListener('click', function () {
    if (boardSize.value !== "") {
      const removeGrid = pixelBoard.childElementCount;
      for (let i = 0; i < removeGrid; i += 1) {
        pixelBoard.removeChild(pixelBoard.lastElementChild);
      }
      if (boardSize.value < 5) {
        boardSize.value = 5;
      }
      if (boardSize.value > 50) {
        boardSize.value = 50;
      }
      createBoard(boardSize.value, boardSize.value);
    } else {
      alert('Board inválido!');
    };
  });
}
randomicGrid();

function selecionaCor() {
  for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].addEventListener('click', function () {
      const lastColor = document.querySelector('.selected');
      lastColor.className = lastColor.className.replace('color selected', 'color');
      corPaleta[index].className = 'color selected';
    });
  };
}
selecionaCor();

pixelBoard.addEventListener('click', function (event) {
  const corSelecionada = document.querySelector('.selected');
  const evento = event.target;
  evento.style.backgroundColor = corSelecionada.style.backgroundColor;
})

const buttonClean = document.getElementById('clear-board');
buttonClean.addEventListener('click', function () {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  };
})
