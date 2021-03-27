// criação de grid
let numGrid = 5;
const tagTable = document.createElement('table'); // <table> <table/>
const divisaoTop = document.getElementById('gridTable'); // declara a div que vamos usar
divisaoTop.appendChild(tagTable);
function criarGrid() {
  for (let n = 1; n <= numGrid; n += 1) {
    const tagTR = document.createElement('tr');
    tagTable.appendChild(tagTR);
    for (let b = 1; b <= numGrid; b += 1) {
      const tagTH = document.createElement('th');
      tagTH.className = 'pixel';
      tagTR.appendChild(tagTH);
    }
  }
}
criarGrid();
// criação de grid
// inicio função para escolher a cor
function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecionaCor);
}
// fim da função para escolher a cor
// inicio função para trocar a cor
const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    const corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixels[i].style.backgroundColor = corNova;
  });
}
// fim da função para trocar a cor

// inicio função para limpar quadro
function clearBtt() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBtt);
// fim da função para limpar quadro
// inicio função para colocar as cores de forma aleatoria
const tamanhoColor = document.getElementsByClassName('color').length;
function corRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 1; i < tamanhoColor; i += 1) {
  document.getElementsByClassName('color')[i].style.backgroundColor = corRandom();
}

document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
// fim da   função para colocar as cores de forma aleatoria

const vqvBtt = document.getElementById('generate-board');
const valueBoard = document.querySelector('#board-size');

function addPixel() {
  numGrid = valueBoard.value;
}

vqvBtt.addEventListener('click', addPixel);
vqvBtt.addEventListener('click', criarGrid);
