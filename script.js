const paletteBox = document.getElementById('color-palette');
const array = [1, 2, 3, 4];

function createDivs() {
  for (let index = 0; index < array.length; index += 1) {
    const createColors = document.createElement('div');
    createColors.className = 'color';
    paletteBox.appendChild(createColors);
  }
  return paletteBox;
}

createDivs();

const pixelBox = document.getElementById('pixel-board');

function boardPixel() {
  for (let index = 0; index < 25; index += 1) {
    const creatPixels = document.createElement('div');
    creatPixels.className = 'pixel';
    pixelBox.appendChild(creatPixels);
  }
  return pixelBox;
}

boardPixel();

function getPalette(event) {
  const palette = event.target;
  if (!palette.id) {
    const pixelColor = document.querySelectorAll('.color');
    pixelColor.forEach((element) => element.classList.remove('selected'));
    palette.classList.add('selected');
  }
  sessionStorage.color = palette.style.backgroundColor;
}

function paintBoard(event) {
const paintPixel = document.querySelectorAll('.pixel');
for (let index = 0; index < paintPixel.length; index += 1){
   paintPixel[index].addEventListener('click', (event) => {
    const elem = event;
    const pintaPixel = document.querySelector('.selected').style.backgroundColor;
    elem.target.style.backgroundColor = pintaPixel;
  });
}
}

paintBoard();
document.getElementById('color-palette').addEventListener('click', getPalette);

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'orange';
document.getElementsByClassName('color')[0].className += ' selected';
