function criaCor() {
  const cor1 = (Math.ceil(Math.random() * 255));
  const cor2 = (Math.ceil(Math.random() * 255));
  const cor3 = (Math.ceil(Math.random() * 255));

  return `rgb(${cor1}, ${cor2}, ${cor3})`;
}

function criaPaleta() {
  const paletaDeCores = document.querySelector('#color-palette');

  for (let index = 0; index < 4; index += 1) {
    const criaCaixasPaleta = document.createElement('div');
    criaCaixasPaleta.className = 'color';
    paletaDeCores.appendChild(criaCaixasPaleta);
  }

  const caixasPaleta = document.querySelectorAll('.color');
  caixasPaleta[0].style.backgroundColor = 'black';
  caixasPaleta[1].style.backgroundColor = criaCor();
  caixasPaleta[2].style.backgroundColor = criaCor();
  caixasPaleta[3].style.backgroundColor = criaCor();

  caixasPaleta[0].id = 'box1';
  caixasPaleta[1].id = 'box2';
  caixasPaleta[2].id = 'box3';
  caixasPaleta[3].id = 'box4';
}
criaPaleta();

function criaQuadro(tamanho) {
  for (let index = 0; index < tamanho; index += 1) {
    const quadro = document.querySelector('#pixel-board');
    const criaRow = document.createElement('div');
    criaRow.className = 'pixel-row';
    quadro.appendChild(criaRow);
  }
  const row = document.querySelectorAll('.pixel-row');
  for (let index = 0; index < tamanho; index += 1) {
    for (let indexDois = 0; indexDois < tamanho; indexDois += 1) {
      const criaPixel = document.createElement('div');
      criaPixel.className = 'pixel';
      row[indexDois].appendChild(criaPixel);
    }
  }
}
let tamanhoQuadro = 5;
criaQuadro(tamanhoQuadro);

function selecionaCorPaleta() {
  const cores = document.getElementsByClassName('color');
  cores[0].classList.add('selected');
}
selecionaCorPaleta();

function trocaCoresPaleta(cores) {
  const corSelecionada = document.querySelector('.selected');
  const novaCorSelecionada = cores.target;
  corSelecionada.classList.remove('selected');
  novaCorSelecionada.classList.add('selected');
}
const paleta = document.querySelector('#color-palette');
paleta.addEventListener('click', trocaCoresPaleta);

function pintaPixel(pixel) {
  const pixelSelecionado = pixel.target;
  const corSelecionada = document.querySelector('.selected');
  pixelSelecionado.style.backgroundColor = corSelecionada.style.backgroundColor;
}

function selecionaPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pintaPixel);
  }
}
selecionaPixel();

function apagaTudo() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
const botao = document.querySelector('#clear-board');
botao.addEventListener('click', apagaTudo);

function removeQuadro() {
  const quadro = document.querySelector('#pixel-board');
  const quadrofilho = document.querySelectorAll('.pixel-row');
  for (let index = 0; index < quadrofilho.length; index += 1) {
    quadro.removeChild(quadrofilho[index]);
  }
}

function campoVazio(conteudo) {
  if (conteudo === '') alert('Board inválido!');
}

function mudaTamanhoQuadro() {
  const inputQuadro = document.querySelector('#board-size').value;
  campoVazio(inputQuadro);
  if (inputQuadro >= 5 && inputQuadro <= 50) {
    tamanhoQuadro = inputQuadro;
  } else if (inputQuadro < 5) {
    tamanhoQuadro = 5;
  } else if (inputQuadro > 50) {
    tamanhoQuadro = 50;
  }
  removeQuadro();
  criaQuadro(tamanhoQuadro);
  selecionaPixel();
}
const botaoQuadro = document.querySelector('#generate-board');
botaoQuadro.addEventListener('click', mudaTamanhoQuadro);
