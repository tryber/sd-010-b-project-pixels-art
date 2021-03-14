const colorPalete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const pixelBlack = document.getElementById('black');
// const colors = document.getElementsByClassName('color');
const pixelRandomOne = document.getElementById('colorOne');
const pixelRandomTwo = document.getElementById('colorTwo');
const pixelRandomThree = document.getElementById('colorThree');

function randomColor() {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
}

// for (let index = 1; index < 4; index += 1) {
//   colors[index].style.backgroundColor = randomColor();
// }

pixelBlack.style.backgroundColor = 'black';
pixelRandomOne.style.backgroundColor = randomColor();
pixelRandomTwo.style.backgroundColor = randomColor();
pixelRandomThree.style.backgroundColor = randomColor();

function createBox() {
  for (let i = 0; i < 5; i += 1) {
    const line = document.createElement('div');
    line.className = 'pixelLine';
    for (let z = 0; z < 5; z += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      line.appendChild(cell);
    }
    pixelBoard.appendChild(line);
  }
}

function selectColor() {
  colorPalete.addEventListener('click', function(event) {
    pixelBlack.className = 'color';
    pixelRandomOne.className = 'color';
    pixelRandomTwo.className = 'color';
    pixelRandomThree.className = 'color';
    event.target.className = 'color selected';
  })
}

function selectPixel() {
  pixelBoard.addEventListener('click', function(event) {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  })
}

selectPixel()
selectColor();
createBox();
