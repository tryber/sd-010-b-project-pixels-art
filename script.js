function createBoard(numberPixels) {
  for (let pixelRows = 0; pixelRows < numberPixels; pixelRows += 1) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    document.getElementById('pixel-board').appendChild(pixelRow);
    for (let pixelColumns = 0; pixelColumns < numberPixels; pixelColumns += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      document.querySelectorAll('.pixel-row')[pixelRows].appendChild(pixel);
    }
  }
}
createBoard (5);

let firstPalette = document.getElementById('black');
let secondPalette = document.getElementById('secondPalette');
let thirdPalette = document.getElementById('thirdPalette');
let fourthPalette = document.getElementById('fourthPalette');

// Achei a função neste site: https://www.w3schools.com/howto/howto_js_remove_class.asp
function removeSelectedClass() {
  let selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
}

function getFirstPaletteColor() {
  removeSelectedClass();
  firstPalette.classList.add('selected');
}

function getSecondPaletteColor(){
  removeSelectedClass();
  secondPalette.classList.add('selected');
}

function getThirdPaletteColor(){
  removeSelectedClass();
  thirdPalette.classList.add('selected');
}

function getFourthPaletteColor(){
  removeSelectedClass();
  fourthPalette.classList.add('selected');
}

firstPalette.addEventListener('click', getFirstPaletteColor);
secondPalette.addEventListener('click', getSecondPaletteColor);
thirdPalette.addEventListener('click', getThirdPaletteColor);
fourthPalette.addEventListener('click', getFourthPaletteColor);

function eventListenerPixels(){
  let getPixels = document.getElementsByClassName('pixel');
  for(let index = 0; index < getPixels.length; index += 1){
    getPixels[index].addEventListener('click', function(){chosenPixel(getPixels[index])});
  }
}
eventListenerPixels();

function chosenPixel(pixel){
  let selectedClass = document.querySelector('.selected');
  pixel.style.backgroundColor = selectedClass.style.backgroundColor;
}

function clearBoard(){
  let numberPixels = document.getElementsByClassName('pixel');
  for(let index = 0; index < numberPixels.length; index += 1){
    numberPixels[index].style.backgroundColor = 'white';
  }
}

let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

function generateDynamicBoard (numberPixels){
  document.getElementById('pixel-board').innerHTML = '';
  createBoard (numberPixels);
  eventListenerPixels();
}

let generateBoard = document.getElementById('generate-board');
let inputBoardSize = document.getElementById('board-size');
generateBoard.addEventListener('click', function(){
  if(inputBoardSize.value === ''){
    alert('Board inválido!');
  } else if(inputBoardSize.value < 5){
    generateDynamicBoard(5);
  } else if(inputBoardSize.value > 50){
    generateDynamicBoard(50);
  } else {
    generateDynamicBoard(inputBoardSize.value);
  }
})

function generateRandomColor(){
  let randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
  return randomColor;
}

firstPalette.style.backgroundColor = 'black';
  secondPalette.style.backgroundColor = generateRandomColor();
  thirdPalette.style.backgroundColor = generateRandomColor();
  fourthPalette.style.backgroundColor = generateRandomColor();