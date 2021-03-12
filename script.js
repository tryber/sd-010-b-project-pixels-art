const palleteColors = document.querySelectorAll('.color');
const buttonClear = document.getElementById('clear-board');

function pixelCreate() {
  const boardCreate = document.getElementById('pixel-board');
  for (let indexCreate = 0; indexCreate < 5; indexCreate += 1) {
    const line = document.createElement('div');
    for (let h = 0; h < 5 ; h += 1) {
      const column = document.createElement('div.pixel');  
      column.classList.add('pixel');
      line.appendChild(column);
  } 
  boardCreate.appendChild(line);
  }
}
pixelCreate();

for (let index = 0; index < palleteColors.length; index += 1) {
  palleteColors[index].addEventListener('click', function () {
    const selectedClass = document.getElementsByClassName('selected')[0];
    selectedClass.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

function selectColor() {
  const color = document.getElementsByClassName('selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = color;
}

function colorPixels() {
  const board = document.getElementById('pixel-board');
  board.addEventListener('click', selectColor);
}
colorPixels();

function clear() {
  const pixelsBoard = document.querySelectorAll('.pixel');
  buttonClear.addEventListener('click', () => {
    for (let indexClear = 0; indexClear < pixelsBoard.length; indexClear+= 1) {
      pixelsBoard[indexClear].style.backgroundColor = 'white';
    }
  });
}
clear();

document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
document.getElementsByClassName('color')[1].style.backgroundColor = 'rgb(200,56,154)';
document.getElementsByClassName('color')[2].style.backgroundColor = 'rgb(101,255,173)';
document.getElementsByClassName('color')[3].style.backgroundColor = 'rgb(13,36,98)';
