// Requesito 2
const colorPallete = document.getElementById('color-palette');
let divPallete = document.createElement('div');

for (let divs = 0; divs < 4; divs += 1) {
  divPallete = document.createElement('div');
  divPallete.className = 'color';
  colorPallete.appendChild(divPallete);
}

// Requesito 4
function createBoard (x) {
  const boardSquares = [];
  for (let i = 0; i < x; i += 1) {
    boardSquares[i] = i;
  }
  const bigSquare = document.getElementById('pixel-board');
  let createLines = document.createElement('tr');
  let createCol = document.createElement('td');

  for (let j = 0; j < boardSquares.length; j += 1) {
    createLines = document.createElement('tr');
    createLines.className = 'table-lines';
    bigSquare.appendChild(createLines);
    for (let k = 0; k < boardSquares.length; k += 1) {
      let lineSquare = document.querySelectorAll('.table-lines');
      lineSquare = document.querySelectorAll('.table-lines');
      createCol = document.createElement('td');
      createCol.className = 'pixel';
      lineSquare[j].appendChild(createCol);
    }
  }
}

createBoard(5);

// Requesito 6

// https://www.geeksforgeeks.org/how-to-add-a-class-to-dom-element-in-javascript/ --> referência

const blackColor = document.querySelector('.color');
blackColor.classList.add('selected');

// Requesito 7 --> Recebi ajuda dos colegas Jonathan Souza e Alessandra Rezende

const allColors = document.getElementsByClassName('color');

for (let index = 0; index < allColors.length; index += 1) {
    allColors[index].addEventListener('click', function() {
      colorPallete.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    })    
}

// Requesito 8 --> https://zellwk.com/blog/css-values-in-js/ (referência) do getComputedStyle
const whiteSquare = document.querySelectorAll('.pixel');

for (let index = 0; index < whiteSquare.length; index += 1) {
  whiteSquare[index].addEventListener('click', function() {
    const pickColor = document.querySelector('.selected');
    whiteSquare[index].style.backgroundColor = getComputedStyle(pickColor).backgroundColor
  })
}

// Requesito 9

const buttonClear = document.querySelector('#clear-board');

function clearBorder() {
  for (let w = 0; w < whiteSquare.length; w += 1) {
    whiteSquare[w].style.backgroundColor = 'white';
  }
}
// Recebi ajuda do colega Gustavo Cerqueira.
buttonClear.addEventListener('click', clearBorder);