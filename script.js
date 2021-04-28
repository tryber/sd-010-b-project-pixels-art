function criaPixels(tamanho) {
  const containerPix = document.querySelector('#pixel-board');

  for (let index = 0; index < tamanho; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel color4';
    containerPix.appendChild(divPixel);
  }
}
generatePixel(5);
// criaPixels(25);

function criaBotão(text) {
  const containerBotao = document.querySelector('.btn-clear');
  const botao = document.createElement('button');
  const idBotao = 'clear-board';

  botao.innerHTML = text;
  botao.id = idBotao;
  containerBotao.appendChild(botao);
}
criaBotão('Limpar');

// const cor = 'white';
function pegaCor() {
  const pegaPixelsCores = document.querySelectorAll('.color');
  for (let index = 0; index < pegaPixelsCores.length; index += 1) {
    pegaPixelsCores[index].addEventListener('click', (event) => {
      mudaClass();
      mudaSelected(event.target);
    });
  }
}
pegaCor();

function mudaSelected(elemento) {
  const element = elemento;
  element.className += ' selected';
}

function mudaClass() {
  const pegaPixelsCores = document.querySelectorAll('.color');
  for (let index = 0; index < pegaPixelsCores.length; index += 1) {
    pegaPixelsCores[index].className = 'color';
  }
}

function coloriPaleta() {
  const pegaPixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pegaPixel.length; i += 1) {
    pegaPixel[i].addEventListener('click', (evt) => {
      const pegaCorDiv = document.querySelector('.selected').id;
      evt.target.className = `pixel ${pegaCorDiv}`;
    });
  }
}
coloriPaleta();

function botaoLimpar() {
  const pegarBotao = document.querySelector('#clear-board');
  pegarBotao.addEventListener('click', limparPixel);
}
botaoLimpar();

function limparPixel() {
  const pegaPixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pegaPixel.length; i += 1) {
    pegaPixel[i].className = 'pixel color4';
  }
}

function generatePixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  const inputValue = document.querySelector('#board-size').value;
  console.log(inputValue);

  if (inputValue === '') {
    alert('Board inválido!');
  }

  for (let i = 0; i < inputValue; i += 1) {
    const pixelBoard = document.querySelector('#pixel-board');
    const criaBr = document.createElement('br');
    criaPixels(inputValue);
    pixelBoard.append(criaBr);
  }
}
