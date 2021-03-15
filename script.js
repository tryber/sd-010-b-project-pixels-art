const containerPalette = document.querySelector('#color-palette');
const containerQuadro = document.querySelector('#pixel-board');
const colorsPalette = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const botaoLimparCores = document.querySelector('#clear-board');
const textoInput = document.querySelector('#board-size');
const botaoGerarPixels = document.querySelector('#generate-board');
let quadroPixelInicial = 5;

function createPalette() {
  for (let index = 0; index < 4; index += 1) {
    const selectors = document.createElement('div');
    selectors.className = 'color';
    containerPalette.appendChild(selectors);
    if (index === 0) {
      selectors.className += ' selected';
    }
  }
};

createPalette();

function createPixels() {
  for (let index = 0; index < quadroPixelInicial; index += 1) {
    const line = document.createElement('div');
    containerQuadro.appendChild(line);

    for (let index2 = 0; index2 < quadroPixelInicial; index2 += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
};

createPixels();

function adicionaERemoveClasse() {
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].addEventListener('click', function () {
      let classSelected = document.getElementsByClassName('selected')[0];
      classSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};

adicionaERemoveClasse();

function pintaPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      let corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
      pixels[index].style.backgroundColor = corNova;
    })
  }
};

pintaPixels();

function limparCores() {
  botaoLimparCores.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  })
};

limparCores();


function verificaBoard() {
  if (textoInput.value == '') {
    alert('Board inválido!');
  }
}

function limpaBoard() {
  containerQuadro.innerHTML = '';
}

function criaBoard() {
  quadroPixelInicial = textoInput.value;
}

function verificaInput() {
  if (textoInput.value < 5) {
    quadroPixelInicial = 5;
  } else if (textoInput.value > 50) {
    quadroPixelInicial = 50;
  }
}

function corAleatoria() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
  document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
  document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${r},${b},${g})`;
};

corAleatoria();

botaoGerarPixels.addEventListener('click', verificaBoard);
botaoGerarPixels.addEventListener('click', limpaBoard);
botaoGerarPixels.addEventListener('click', criaBoard);
botaoGerarPixels.addEventListener('click', verificaInput);
botaoGerarPixels.addEventListener('click', createPixels);
botaoGerarPixels.addEventListener('click', pintaPixels);
