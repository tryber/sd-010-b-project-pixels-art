function selectColor(selected) {
  const oldColor = document.querySelector('.selected');
  oldColor.classList.remove('selected');
  const newColor = selected.target;
  newColor.classList.add('selected');
}

function clear() {
  const paintedPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < paintedPixels.length; index += 1) {
    paintedPixels[index].style.backgroundColor = 'white';
    paintedPixels[index].classList.remove('painted');
  }
}
document.getElementById('clear-board').addEventListener('click', clear);

function paintPixels() {
  const colorBlack = document.getElementById('black');
  const colorBlue = document.getElementById('blue');
  const colorRed = document.getElementById('red');
  const colorGreen = document.getElementById('green');
  const fullClass = 'color selected';
  if (colorBlack.className === fullClass) {
    this.style.backgroundColor = 'black';
  } else if (colorBlue.className === fullClass) {
    this.style.backgroundColor = 'blue';
  } else if (colorRed.className === fullClass) {
    this.style.backgroundColor = 'red';
  } else if (colorGreen.className === fullClass) {
    this.style.backgroundColor = 'green';
  }
  this.classList.add('painted');
}
const pixelColor = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelColor.length; index += 1) {
  pixelColor[index].addEventListener('click', paintPixels);
}
// Para resolver esse requisito (8), dei uma conferida no Pull Request dos meus colegas Fioravante e Mateus Bodra, que me fez entender a lógica por trás desse requisito

document.getElementById('color-palette').addEventListener('click', selectColor);
