/*
* Recorri ao seguinte site afim de utilizar o borbulhamento de eventos.
* Link: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
*/
const colorPalette = document.getElementById('color-palette');
const clearButton = document.querySelector('button');
const pixelBoard = document.getElementById('pixel-board');
const vqvButton = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');
const randomBgColorArray = document.querySelectorAll('.random-bgcolor');

/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

window.onload = () => {
  for (let index = 0; index < randomBgColorArray.length; index += 1) {
    const red = getRandomArbitrary(0, 256);
    const green = getRandomArbitrary(0, 256);
    const blue = getRandomArbitrary(0, 256);
    randomBgColorArray[index].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
};

colorPalette.addEventListener('click', (event) => {
  /* Crédito ao colega Gabriel Miranda por compartilhar o seu raciocínio na solução abaixo. */
  const element = event;
  document.querySelector('.selected').className = 'color';
  element.target.className = 'color selected';
}, false);

/*
* Recorri ao seguinte site, compartilhado no slack da turma pelo colega Matheus H. Gois, na utilização da função getComputedStyle()
* Link: https://zellwk.com/blog/css-values-in-js/
*/
document.addEventListener('click', (event) => {
  const colorSelected = document.querySelector('.selected');
  const style = getComputedStyle(colorSelected);
  const bgColorSelected = style.backgroundColor;
  const element = event.target;
  if (element.classList.contains('pixel')) {
    element.style.backgroundColor = bgColorSelected;
  }
}, false);

clearButton.addEventListener('click', () => {
  const pixelArray = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelArray.length; index += 1) {
    const bgColorPixelArrayItem = pixelArray[index].style.backgroundColor;
    if (bgColorPixelArrayItem !== '') {
      pixelArray[index].style.backgroundColor = '';
    }
  }
}, false);

function checkBoardSizeInput(value) {
  if (value === '') return value;

  let sizeValue = parseInt(value, 10);
  if (sizeValue < 5) sizeValue = 5;
  if (sizeValue > 50) sizeValue = 50;

  return sizeValue;
}

vqvButton.addEventListener('click', () => {
  const sizeValue = checkBoardSizeInput(inputBoardSize.value);
  if (sizeValue === '') alert('Board inválido!');
  pixelBoard.innerHTML = '';
  for (let index = 0; index < sizeValue; index += 1) {
    const trClass = document.createElement('div');
    trClass.className = 'tr';
    pixelBoard.appendChild(trClass);
    for (let index2 = 0; index2 < sizeValue; index2 += 1) {
      const tdClass = document.createElement('div');
      tdClass.className = 'td pixel';
      trClass.appendChild(tdClass);
    }
  }
}, false);
