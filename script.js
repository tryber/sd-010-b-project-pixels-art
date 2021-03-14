/* eslint-disable complexity */
const colorPalette = document.querySelectorAll('#color-palette li');

// Gerar corer aleatórias
function generateRandomColor() {
  const hexadecimais = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';

  // Pega um número aleatório no array acima
  for (let i = 0; i < 6; i += 1) {
    // E concatena à variável cor
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

generateRandomColor();

function assigningRandomNumber() {
  // Atribuir as cores aleatórias á paleta
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const corValor1 = window.getComputedStyle(colorPalette[1]).getPropertyValue('background-color');
  const corValor2 = window.getComputedStyle(colorPalette[2]).getPropertyValue('background-color');
  const corValor3 = window.getComputedStyle(colorPalette[3]).getPropertyValue('background-color');
  const trocaCor1 = corValor1.replace(corValor1, generateRandomColor());
  const trocaCor2 = corValor2.replace(corValor2, generateRandomColor());
  const trocaCor3 = corValor3.replace(corValor3, generateRandomColor());
  colorPalette[1].style.backgroundColor = trocaCor1;
  colorPalette[2].style.backgroundColor = trocaCor2;
  colorPalette[3].style.backgroundColor = trocaCor3;
}

assigningRandomNumber();

// Definir o elemento que terá a classe select
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[0].addEventListener('click', () => {
    colorPalette[0].classList.add('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
  });
  colorPalette[1].addEventListener('click', () => {
    colorPalette[1].classList.add('selected');
    colorPalette[0].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
  });
  colorPalette[2].addEventListener('click', () => {
    colorPalette[2].classList.add('selected');
    colorPalette[0].classList.remove('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
  });
  colorPalette[3].addEventListener('click', () => {
    colorPalette[3].classList.add('selected');
    colorPalette[0].classList.remove('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
  });
}

// eslint-disable-next-line sonarjs/cognitive-complexity
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line sonarjs/cognitive-complexity
// Pintar o pixel com a cor selecionada
function selectedPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const color = document.querySelector('.selected');
      if (color.matches('.selected')) {
        if (pixels[i].style.backgroundColor === `${color.style.backgroundColor}`) {
          // eslint-disable-next-line max-len
          pixels[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
        } else {
          // eslint-disable-next-line max-len
          pixels[i].style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
        }
      } else {
        pixels[i].style.backgroundColor = 'white';
        // eslint-disable-next-line max-len
      }
    });
  }
}

selectedPixel();

// Zerar o quadro de pixels
function clearPixels() {
  const clearButton = document.getElementById('clear-board');
  const getPixel = document.querySelectorAll('.pixel');

  clearButton.addEventListener('click', () => {
    for (let i = 0; i < getPixel.length; i += 1) {
      getPixel[i].style.backgroundColor = 'white';
    }
  });
}

clearPixels();

// Deleta o board inteiro
function deleteBoard() {
  const pixelB = document.getElementById('pixel-board');
  pixelB.innerHTML = '';
}

// Criar o quadro de pixel de acordo com a escolha do usuário
// eslint-disable-next-line max-lines-per-function
function userSetSize() {
  const generateBoardButton = document.getElementById('generate-board');

  // eslint-disable-next-line max-lines-per-function
  generateBoardButton.addEventListener('click', (event) => {
    deleteBoard();
    let inputValue = document.getElementById('board-size').value;
    const table = document.getElementById('pixel-board');

    for (let i = 0; i < inputValue; i += 1) {
      const createTr = document.createElement('tr');

      table.appendChild(createTr);

      if (inputValue < 5) {
        inputValue = 5;
      }
      if (inputValue > 50) {
        inputValue = 50;
      }
    }

    for (let i = 0; i < inputValue; i += 1) {
      const getTr = document.querySelectorAll('tr');

      getTr.forEach((e) => {
        const createTd = document.createElement('td');
        createTd.className = 'pixel';
        e.appendChild(createTd);
      });
    }
    event.preventDefault();
    selectedPixel();
    clearPixels();

    if (inputValue === '') {
      return alert('Board inválido!');
    }

    console.log(inputValue);
  });
}

userSetSize();
