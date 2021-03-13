function createItem(className, type) {
  let box = document.createElement(type);
  box.className = className;
  return box;
}

let paletteNumber = 4;
let boxNumber = 25;
let bgroundColor = ['black', 'cyan', 'red', 'yellow']

function firstColor () {
  let first = document.getElementsByClassName('color')[0].className = 'color selected';
  return first;
}

for (let index = 0; index < paletteNumber; index += 1) {
  document.getElementById('color-palette').appendChild(createItem('color','div'));
  document.getElementsByClassName('color')[index].id = 'box'+[index];
}

for (index = 0; index < bgroundColor.length; index += 1) {
  let getBackGroundColor = document.getElementsByClassName('color')[index];
  getBackGroundColor.style.backgroundColor = bgroundColor[index];
}

for (let index = 0; index < boxNumber; index += 1) {
  document.getElementById('pixel-board').appendChild(createItem('pixel','div'));
} 
function changeBoxClass(event) {
  let puxa = document.getElementsByClassName('selected');
  for (index = 0; index < puxa.length; index += 1) {
    puxa[index].classList.remove('selected');
  }
  event.target.className = 'color selected';
}

let palleteArray = document.getElementsByClassName('color');

for (let index = 0; index < palleteArray.length; index += 1) {
  palleteArray[index].addEventListener('click', changeBoxClass);
}

let boardArray = document.getElementsByClassName('pixel');

function colorChange (event) {
  let selectBackground = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selectBackground;
}

for (let index = 0; index < boardArray.length; index += 1) {
  boardArray[index].addEventListener('click', colorChange);
}

function resetBoard () {
  let pixelArray = document.getElementsByClassName('pixel');
  for (index = 0; index < pixelArray.length; index += 1) {
    pixelArray[index].style.backgroundColor = 'white';
  }
}

document.getElementById('clear-board').addEventListener('click',resetBoard);
window.onload = firstColor;



