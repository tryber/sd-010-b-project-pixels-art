const colorsList = ['black', 'red', 'green', 'blue'];

let ativo;
const palletColors = document.querySelector('#color-palette');

for (let index = 0; index < colorsList.length; index += 1) {
  const color = colorsList[index];
  const palletColorItem = document.createElement('div');
  palletColorItem.classList.add('color');

  if (index === 0) {
    palletColorItem.classList.add('selected');
    ativo = 0;
  }
  palletColorItem.style.background = color;

  palletColors.appendChild(palletColorItem);
}

const pixelBoard = document.querySelector('#pixel-board');

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('span');
  pixel.classList.add('pixel');

  pixelBoard.appendChild(pixel);
}

const quadradosCores = document.getElementsByClassName('color');

for (
  let indexPallet = 0;
  indexPallet < quadradosCores.length;
  indexPallet += 1
) {
  quadradosCores[indexPallet].addEventListener('click', function () {
    quadradosCores[ativo].classList.remove('selected');
    quadradosCores[indexPallet].classList.add('selected');
    ativo = indexPallet;
  });
}

const quadradosPintar = document.getElementsByClassName('pixel');

for (
  let indexPixels = 0;
  indexPixels < quadradosPintar.length;
  indexPixels += 1
) {
  quadradosPintar[indexPixels].addEventListener('click', function () {
    quadradosPintar[indexPixels].style.background = colorsList[ativo];
  });
}

const clearBoard = document.getElementById('clear-board');

clearBoard.addEventListener('click', limpar);

function limpar() {
  for (let indexClear = 0; indexClear < quadradosPintar.length; indexClear++) {
    quadradosPintar[indexClear].style.background = 'white';
  }
}
