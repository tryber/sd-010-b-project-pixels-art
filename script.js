const tabelaPixel = document.querySelector('#pixel-board');
// criar div com classe color
function criarDiv() {
  const novaDiv = document.createElement('div');
  novaDiv.className = 'color';
  return novaDiv;
}

// definir as divs a paleta
function atribuirPaleta(divs) {
  const selecionarPaleta = document.querySelector('#color-palette');
  selecionarPaleta.appendChild(divs);
}

// definir numero de paletas de cores
const paletaNumber = 4;

for (let index = 0; index < paletaNumber; index += 1) {
  atribuirPaleta(criarDiv());
}

// adiciona cores aleatorias as paletas
function adicionarBgcolor() {
  const getDiv = document.getElementsByClassName('color');
  for (let index = 0; index < getDiv.length; index += 1) {
    const randomizer = Math.round(Math.random() * 255);
    const randomizer2 = Math.round(Math.random() * 255);
    const randomizer3 = Math.round(Math.random() * 255);
    const randomRgb = `rgb(${randomizer}, ${randomizer2}, ${randomizer3})`;
    if (index === 0) {
      getDiv[index].style.backgroundColor = 'black';
      getDiv[index].id = 'black';
      getDiv[index].className += ' selected';
    } else {
      getDiv[index].style.backgroundColor = randomRgb;
      getDiv[index].id = randomRgb;
    }
  }
  return getDiv;
}

// adiciona os pixels

function criarPixels() {
  const novoPixel = document.createElement('div');
  novoPixel.className = 'pixel';
  return novoPixel;
}

function criaLinhas() {
  const novaLinha = document.createElement('div');
  novaLinha.className = 'linha';
  return novaLinha;
}

function criarTabelaPixel(pixel) {
  tabelaPixel.appendChild(pixel);
}

function gerarTabela(valor) {
  let number = valor;
  if (number < 5) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  }
  for (let index = 0; index < number; index += 1) {
    criarTabelaPixel(criaLinhas());
    for (let index2 = 0; index2 < number; index2 += 1) {
      criarTabelaPixel(criarPixels());
    }
  }
}

for (let index = 0; index < 5; index += 1) {
  criarTabelaPixel(criaLinhas());
  for (let index2 = 0; index2 < 5; index2 += 1) {
    criarTabelaPixel(criarPixels());
  }
}

// evento selecionar cor

function desselecionaCor() {
  const atualSelecionada = document.querySelector('.selected');
  atualSelecionada.className = 'color';
}

function selecionaCor(corAtual) {
  const selecionarCor = corAtual.target;
  if (selecionarCor !== document.getElementById('color-palette')) {
    desselecionaCor();
    selecionarCor.className += ' selected';
  }
}

const corDaPaleta = document.getElementById('color-palette');

corDaPaleta.addEventListener('click', selecionaCor);

// evento de pintar o pixel

function pintaPixel(pixelAtual) {
  const selecionarPixel = pixelAtual.target;
  const corSelecionada = document.querySelector('.selected');
  selecionarPixel.style.backgroundColor = corSelecionada.style.backgroundColor;
}

tabelaPixel.addEventListener('click', pintaPixel);

// criar botão de limpeza

function criaBotao() {
  const novoBotao = document.createElement('button');
  novoBotao.id = 'clear-board';
  novoBotao.innerText = 'Limpar';
  return novoBotao;
}
const detalhaSessao = document.querySelector('#button-cleaner');

detalhaSessao.appendChild(criaBotao());

function limparPixels() {
  const pegarPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pegarPixels.length; index += 1) {
    pegarPixels[index].style.backgroundColor = 'white';
  }
}

document.getElementById('clear-board').addEventListener('click', limparPixels);

// BONUS
// cria input

function criarInput() {
  const novoInput = document.createElement('input');
  novoInput.id = 'board-size';
  novoInput.type = 'number';
  novoInput.min = '1';
  novoInput.max = '50';
  return novoInput;
}

function criarBotao() {
  const botaoInput = document.createElement('button');
  botaoInput.id = 'generate-board';
  botaoInput.innerText = 'VQV';
  botaoInput.type = 'button';
  return botaoInput;
}

detalhaSessao.appendChild(criarInput());
detalhaSessao.appendChild(criarBotao());

// apaga a tabela antiga para quando criar a nova

function apagarTabela(pai) {
  while (pai.firstChild) {
    pai.removeChild(pai.lastChild);
  }
}

// função que apaga e cria a nova tabela

function aumentarPixels() {
  const tamanhoTabela = document.querySelector('#board-size').value;
  if (tamanhoTabela === '') {
    return alert('Board inválido!');
  }
  apagarTabela(tabelaPixel);
  gerarTabela(tamanhoTabela);
}

const botaoVqv = document.querySelector('#generate-board');
botaoVqv.addEventListener('click', aumentarPixels);

window.onload = function () {
  adicionarBgcolor();
};
