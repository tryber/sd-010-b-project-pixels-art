window.onload = () => {
  localStorage.setItem('backgroundColor', 'black');
  localStorage.getItem('value', '5');
};

// Cria elementos:
function createElements(tag) {
  const element = document.createElement(tag);
  return element;
}

// Color Generator:
// Feito com a ajuda do Thiago Filipe T10 - Tribo B
function colorGenerator() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r} , ${g} , ${b})`;
  return rgb;
}
// const cor1 = colorGenerator();
const cor2 = colorGenerator();
const cor3 = colorGenerator();
const cor4 = colorGenerator();

// Cria paletta:
// Feito com a ajuda do Alan Tanaka T10 - Tribo B
const boardPalettes = document.getElementById('color-palette');
function createColorPalette() {
  const palettes = document.getElementById('color-palette').childNodes;
  const colors = ['black', cor2, cor3, cor4];

  for (let i = 0; i < 4; i += 1) {
    const element = createElements('div');
    element.id = colors[i];
    element.className = 'color';
    boardPalettes.appendChild(element);
  }
  palettes.forEach((nodes, index) => {
    const elements = nodes;
    elements.style.backgroundColor = colors[index];
  });
  palettes[0].classList.add('selected');
}
createColorPalette();

boardPalettes.appendChild(createElements('br'));

// Definir o tamanho do quadro:
const inputSize = createElements('input');
inputSize.id = 'board-size';
inputSize.min = '5';
inputSize.max = '50';
inputSize.type = 'number';
inputSize.value = '5';
inputSize.required = 'Board inválido!';
boardPalettes.appendChild(inputSize);
localStorage.setItem('value', '5');

const sizeBtn = createElements('button');
sizeBtn.id = 'generate-board';
sizeBtn.innerText = 'VQV';
boardPalettes.appendChild(sizeBtn);
sizeBtn.addEventListener('click', () => {
  // window.location.reload();
  if (inputSize.value < 5 || inputSize.value > 50) {
    inputSize.alert = 'Board inválido!';
  }
  return inputSize.value;
});

// const sizeValue = document.getElementById('board-size').value;

// Botão de limpar o quadro:
const clearBtn = createElements('button');
clearBtn.id = 'clear-board';
clearBtn.innerText = 'Limpar';
boardPalettes.appendChild(clearBtn);
clearBtn.addEventListener('click', () => {
  window.location.reload();
});

// Cria board:
function createPixels() {
  for (let x = 0; x < inputSize.value; x += 1) {
    for (let i = 0; i < inputSize.value; i += 1) {
      const pixels = createElements('div');
      pixels.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(pixels);
    }
  }
}
createPixels();

// Events:

function colorPicker() {
  const selectedItem = document.getElementsByClassName('selected');
  const palettes = document.getElementsByClassName('color');

  for (let i = 0; i < palettes.length; i += 1) {
    palettes[i].addEventListener('click', (e) => {
      selectedItem[0].classList.remove('selected');
      e.target.classList.add('selected');
    });
  }
}
colorPicker();

function setColor() {
  // const paletteSelected = document.getElementsByClassName('color selected');
  const pixelsEmBranco = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixelsEmBranco.length; i += 1) {
    pixelsEmBranco[i].addEventListener('click', () => {
      const selecionada = document.getElementsByClassName('selected')[0].style.backgroundColor;
      pixelsEmBranco[i].style.backgroundColor = selecionada;
    });
  }
}
setColor();
