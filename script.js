let corSalva = 'black';
let aux;
const corDivBoard = document.querySelector('#color-palette');
const cor = document.querySelectorAll('.color');
const corDivPixel = document.querySelector('#pixel-board');
const corPixel = document.querySelectorAll('.pixel');
const inputTxt = document.querySelector('#board-size');
const buttonInput = document.querySelector('#generate-board');

/* cores nas paletas */
cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'red';
cor[2].style.backgroundColor = 'orange';
cor[3].style.backgroundColor = 'green';
/* Paleta */
function clickPalette(eventoDeOrigem) {
  aux = eventoDeOrigem.target;
  cor[0].className = 'color';
  cor[1].className = 'color';
  cor[2].className = 'color';
  cor[3].className = 'color';
  if (aux.className === 'color') {
    aux.className = 'color selected';
    corSalva = aux.style.backgroundColor;
  } else {
    aux.className = 'color';
  }
}
corDivBoard.addEventListener('click', clickPalette);

/* Tabela */
function clickPixel(eventoDeOrigem) {
  aux = eventoDeOrigem.target;
  if (corPixel.className === 'color') {
    aux.style.backgroundColor = corSalva;
  } else {
    aux.style.backgroundColor = corSalva;
  }
}
corDivPixel.addEventListener('click', clickPixel);

/* Criando button */
const buttonBoard = document.querySelector('#clear-board');
function limparBoard() {
  for (let i = 0; i < 25; i += 1) {
    corPixel[i].style.backgroundColor = 'white';
  }
}
buttonBoard.addEventListener('click', limparBoard);

/* d */

function addTabelaPixel(count) {
  for (let i = 0; i < count; i += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.className = `lista ${i}`;
    corDivPixel.appendChild(novaDiv);
  }
  const addLi = document.querySelectorAll('div');
  for (let i = 1; i < addLi.length; i += 1) {
    for (let j = 0; j < count; j += 1) {
      const novaDiv = document.createElement('div');
      novaDiv.className = 'pixel';
      addLi[i].appendChild(novaDiv);
    }
  }
}

function funCompromisso() {
  const addPixel = document.createElement('div');
  const auxValue = inputTxt.value;
  addPixel.innerHTML = auxValue;
  if (auxValue.innerHTML === '' || auxValue <= 0) {
    corDivPixel.innerHTML = '';
    alert('Erro');
  } else {
    corDivPixel.innerHTML = '';
    addTabelaPixel(auxValue);
    /* corDivPixel.appendChild(corDivBoard); */
  }
}
function funEnter(e) {
  if (e.which === 13) {
    funCompromisso();
  }
}
inputTxt.addEventListener('keypress', funEnter);
buttonInput.addEventListener('click', funCompromisso);
