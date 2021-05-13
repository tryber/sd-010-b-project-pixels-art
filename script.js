function Quadro() {
  const maxPixel = 25;
  for (let index = 1; index <= maxPixel; index += 1) {
    const getTable = document.getElementById('pixel-board');
    const createBlock = document.createElement('div');
    createBlock.className = 'pixel';
    getTable.appendChild(createBlock);
  }
}
Quadro();
// Agradecimentos ao Renato GSolza Turma 10 - Tribo B, por ter me auxiliado a entender melhor o objetivo do desafio 7;
function clickNasPaletas(event) {
  const getSelected = document.getElementsByClassName('selected')[0];
  getSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const getColor = document.getElementsByClassName('color');
for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', clickNasPaletas);
}

let getPixel = document.getElementsByClassName('pixel');
const selectedColor = document.getElementsByClassName('color');

for (let pixelIndex = 0; pixelIndex < getPixel.length; pixelIndex += 1) {
  getPixel[pixelIndex].addEventListener('click', (event) => {
    if (selectedColor[0].classList.contains('selected')) {
      event.target.style.background = 'black';
    } else if (selectedColor[1].classList.contains('selected')) {
      event.target.style.background = 'red';
    } else if (selectedColor[2].classList.contains('selected')) {
      event.target.style.background = 'blue';
    } else if (selectedColor[3].classList.contains('selected')) {
      event.target.style.background = 'green';
    }
  });
}
// remover

const getButton = document.getElementById('clear-board');
getButton.addEventListener('click', () => {
  getPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].style.backgroundColor = 'white';
  }
});

// adicionar el

let rowsAndCols = 5;
let pixelBoard = document.getElementById('pixel-board');

function generateBoard() {
  rowsAndCols = document.getElementById('board-size').value;
  if (rowsAndCols !== '') {
    pixelBoard.innerHTML = '';
    pixelBoard.style.width = (rowsAndCols * 42) + 'px';
    Quadro();
  } else {
    alert('Board inválido!');
  }

}

let btnVQV = document.getElementById('generate-board');
btnVQV.addEventListener('click', generateBoard);