// Paleta de cores
const pallet = document.querySelector('#color-palette');

for (let i = 0; i < 4; i += 1) {
  const box = document.createElement('div');
  box.className = 'color';
  pallet.appendChild(box);
}

// Cores da paleta
const cores = document.querySelectorAll('.color');

// função que gera cor rgb aleatória
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function geraCorAleatoria(opacidade = 1) { // por padrão opacidade é igual a 1 para não ter opacidade
  const r = parseInt(Math.random() * 255); // gero um numero aleatório entre zero e um multiplico por 255
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}

// cor preta padrão
const corPadrao = cores[0];
corPadrao.style.backgroundColor = 'black';
corPadrao.className = 'color selected';
sessionStorage.setItem('color', corPadrao.style.backgroundColor);

const cor1 = cores[1];
cor1.style.backgroundColor = geraCorAleatoria(opacidade = 1);
const cor2 = cores[2];
cor2.style.backgroundColor = geraCorAleatoria(opacidade = 1);
const cor3 = cores[3];
cor3.style.backgroundColor = geraCorAleatoria(opacidade = 1);

// Selecionando a cor da paleta
for (let cor = 0; cor < cores.length; cor += 1) {
  cores[cor].addEventListener('click', function (evento) {
    const colorSet = document.getElementsByClassName('selected'); // recupero o elem da classe selected
    colorSet[0].classList.remove('selected'); // removo a classe selected do elem recuperado
    evento.target.classList.add('selected'); // e adiciono a classe ao elem que recebeu o evento
    sessionStorage.setItem('color', evento.target.style.backgroundColor); // adiciono a cor atual ao session storage
  });
}

// Cria um quadro dado um parametro de entrada
function criaQuadro(elementoEntrada) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let i = 0; i < elementoEntrada; i += 1) {
    const linha = document.createElement('tr');
    pixelBoard.appendChild(linha);
  }
  // Quadro de pixels (celulas)
  const pixelTable = document.querySelectorAll('#pixel-board, tr'); // recupero as tr que criei
  for (let l = 1; l <= elementoEntrada; l += 1) { // para cada linha
    for (let c = 1; c <= elementoEntrada; c += 1) { // para cada coluna
      const box = document.createElement('td'); // crio uma celula
      box.className = 'pixel'; // nomeio a classe
      pixelTable[c].appendChild(box); // e adiciono a mesma na posição referente a coluna da linha
    }
  }
}

function tamanhoPadrao() {
  criaQuadro(5);
}
tamanhoPadrao();

function limpaQuadro() {
  const pixels = document.querySelectorAll('tr, .pixel'); // Removendo o quadro atual
  for (let i = pixels.length - 1; i >= 0; i -= 1) {
    pixels[i].remove();
  }
}

// Botao do input e verificação do tamanho do quadro dinamico
const button = document.getElementById('generate-board');
const input = document.querySelector('#board-size');
button.innerHTML = 'VQV';
button.addEventListener('click', function () {
  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    let tamanhoDoQuadro = 5;
    quadroDinamico(tamanhoDoQuadro);
  } else if (input.value > 50) {
    let tamanhoDoQuadro = 50;
    quadroDinamico(tamanhoDoQuadro);
  } else {
    quadroDinamico(input.value);
  }
});

function quadroDinamico(tamanhoDoQuadro) {
  limpaQuadro();
  criaQuadro(tamanhoDoQuadro);
  pintaOQuadro();
  botaoLimpar();
}

// pintando o quadro de pixels
function pintaOQuadro() {
  const pixels = document.querySelectorAll('.pixel'); // recupero todos elem classe pixel
  for (let p = 0; p < pixels.length; p += 1) { // itero sobre todos eles
    pixels[p].addEventListener('click', function (evento) { // pego o pixel na posiçao p e adiciono o evento de click
      evento.target.style.backgroundColor = sessionStorage.color; // passo a cor do session storage para o pixel
    });
  }
}
pintaOQuadro();

// botao limpar
const botaoClear = document.getElementById('clear-board');
botaoClear.innerHTML = 'Limpar';

// Limpando o quadro de pixels
function botaoLimpar() {
  const pixels = document.querySelectorAll('.pixel');
  botaoClear.addEventListener('click', function () {
    for (let p = 0; p < pixels.length; p += 1) { // itero sobre cada pixel da minha lista
      pixels[p].style.backgroundColor = 'white'; // e pra cada pixel atribuo a cor branca
    }
  });
}
botaoLimpar();
