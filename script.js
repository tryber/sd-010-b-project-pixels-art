function recuperaN() {
  const n = Number(sessionStorage.getItem('n'));
  if (n < 5) {
    sessionStorage.setItem('n', '5');
  }
  if (n > 50) {
    sessionStorage.setItem('n', '50');
  }
  return Number(sessionStorage.getItem('n'));
}

function coresAleatórias() {
  const cor = `#${((1 << 24) * Math.random() | 0).toString(16)}`; 
  return cor;
}

function criaPixels() {
  const n = recuperaN();
  const tabela = document.getElementById('pixel-board');
  for (let linha = 0; linha < n; linha += 1) {
    const criaLinha = document.createElement('tr');
    tabela.appendChild(criaLinha);
    for (let celula = 0; celula < n; celula += 1) {
      const criaCelula = document.createElement('td');
      const linhaApoio = document.getElementsByTagName('tr');
      linhaApoio[linhaApoio.length - 1].appendChild(criaCelula).className = 'pixel';
      document.getElementsByClassName('pixel');
      const apoio = document.getElementsByClassName('pixel');
      apoio[apoio.length - 1].id = `cell-${linha + 1}-${celula + 1}`;
      apoio[apoio.length - 1].style.background = '#ffffff';
    }
  }
}

criaPixels();

function esvaziaTabela() {
  const tabela = document.getElementById('pixel-board');
  while (tabela.firstChild) { 
    tabela.removeChild(tabela.lastChild);
  }
}

function tamanho() {
  const numero = document.getElementById('board-size');
  const n = numero.value;
  if ((n === null) || (n === '')) {
    alert('Board inválido!');
  } else {
    sessionStorage.setItem('n', n);
    esvaziaTabela();
    criaPixels();
  }
}

function leInput() {
  const botao = document.getElementById('generate-board');
  botao.addEventListener('click', tamanho);
}
leInput();

function colocaCores() {
  const pixelCores = document.getElementsByClassName('color');
  pixelCores[0].style.background = '#000000';
  for (let index = 1; index < pixelCores.length; index += 1) {
    pixelCores[index].style.background = coresAleatórias();
  }
}

colocaCores();

function verificaCoresUm() {
  const pixelCores = document.getElementsByClassName('color');
  const colorUm = getComputedStyle(pixelCores[1]).getPropertyValue('background-color');
  const colorDois = getComputedStyle(pixelCores[2]).getPropertyValue('background-color');
  const colorTres = getComputedStyle(pixelCores[3]).getPropertyValue('background-color');
  const preto = getComputedStyle(document.getElementById('black')).getPropertyValue('background-color');
  const branco = getComputedStyle(document.getElementById('opcoes')).getPropertyValue('background-color');
  if (colorUm === colorDois) {
    colocaCores();
  }
  if (colorUm === colorTres) {
    colocaCores();
  }
  if (colorUm === preto) {
    colocaCores();
  }
  if (colorUm === branco) {
    colocaCores();
  }
}

function verificaCoresDois() {
  const pixelCores = document.getElementsByClassName('color');
  const colorUm = getComputedStyle(pixelCores[1]).getPropertyValue('background-color');
  const colorDois = getComputedStyle(pixelCores[2]).getPropertyValue('background-color');
  const colorTres = getComputedStyle(pixelCores[3]).getPropertyValue('background-color');
  const preto = getComputedStyle(document.getElementById('black')).getPropertyValue('background-color');
  const branco = getComputedStyle(document.getElementById('opcoes')).getPropertyValue('background-color');
  if (colorDois === colorUm) {
    colocaCores();
  }
  if (colorDois === colorTres) {
    colocaCores();
  }
  if (colorDois === preto) {
    colocaCores();
  }
  if (colorDois === branco) {
    colocaCores();
  }
}

function verificaCoresTres() {
  const pixelCores = document.getElementsByClassName('color');
  const colorUm = getComputedStyle(pixelCores[1]).getPropertyValue('background-color');
  const colorDois = getComputedStyle(pixelCores[2]).getPropertyValue('background-color');
  const colorTres = getComputedStyle(pixelCores[3]).getPropertyValue('background-color');
  const preto = getComputedStyle(document.getElementById('black')).getPropertyValue('background-color');
  const branco = getComputedStyle(document.getElementById('opcoes')).getPropertyValue('background-color');
  if (colorTres === colorDois) {
    colocaCores();
  }
  if (colorTres === colorUm) {
    colocaCores();
  }
  if (colorTres === preto) {
    colocaCores();
  }
  if (colorTres === branco) {
    colocaCores();
  }
}

verificaCoresUm();
verificaCoresDois();
verificaCoresTres();

const pixelPreto = document.getElementById('black');
const pixelCorUm = document.getElementById('corUm');
const pixelCorDois = document.getElementById('corDois');
const pixelCorTres = document.getElementById('corTres');

function pegaCorPreta() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelPreto.classList.add('selected');
}
function pegaCorUm() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorUm.classList.add('selected');
}
function pegaCorDois() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorDois.classList.add('selected');
}
function pegaCorTres() {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  pixelCorTres.classList.add('selected');
}

pixelPreto.addEventListener('click', pegaCorPreta);
pixelCorUm.addEventListener('click', pegaCorUm);
pixelCorDois.addEventListener('click', pegaCorDois);
pixelCorTres.addEventListener('click', pegaCorTres);

function criarListenerCelulas() {
  const quadro = document.getElementById('pixel-board');
  quadro.addEventListener('click', function (event) {
    event.target.style.background = document.getElementsByClassName('selected')[0].style.background;
  });
}

criarListenerCelulas();

function limpar() {
  const n = recuperaN();
  for (let linha = 0; linha < n; linha += 1) {
    for (let celula = 0; celula < n; celula += 1) {
      document.getElementById(`cell-${linha + 1}-${celula + 1}`).style.background = '#ffffff';
    }
  }
}

function adicionaLimpar() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', limpar);
}

adicionaLimpar();
