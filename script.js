let tamanhoGrid = 5;
const cores = document.querySelectorAll('.color'); // atribui um array com as divs da paleta de cores
const pixels = document.getElementsByClassName('pixel'); // atribui um array com os pixels
const button = document.getElementById('clear-board'); // atribui o botão de limpar
const vqvBtt = document.getElementById('generate-board'); // atribui o botao vqv
const divisaoTop = document.getElementById('pixel-board'); // atribui a tiv que tem a grid
const inputUser = document.querySelector('#board-size');

// definindo cores que podem ser escolhidas
document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
function corRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
for (let i = 1; i < cores.length; i += 1) {
  document.getElementsByClassName('color')[i].style.backgroundColor = corRandom();
}
// cria a grid de pixel
function criarGrid() {
  const tagTable = document.createElement('table'); // <table> <table/>
  divisaoTop.appendChild(tagTable);
  // valida se o input é menor que 5 ou maior que 50
  if (inputUser.value < 5) {
    tamanhoGrid = 5;
  } else if (inputUser.value > 50) {
    tamanhoGrid = 50;
  }
  for (let n = 1; n <= tamanhoGrid; n += 1) {
    const tagTR = document.createElement('tr');
    tagTable.appendChild(tagTR);
    for (let b = 1; b <= tamanhoGrid; b += 1) {
      const tagTH = document.createElement('th');
      tagTH.className = 'pixel';
      tagTR.appendChild(tagTH);
    }
  }
}
criarGrid();
// seleciona um cor para pintar a grid
function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecionaCor);
}
// printa a grid
function pintaPixels() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      const corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
      pixels[i].style.backgroundColor = corNova;
    });
  }
}
pintaPixels();
// limpa cor grid
function clearBtt() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}

// limpar grid da grid
function limpaGrid() {
  divisaoTop.innerHTML = '';
}

// verificar valor da grid
function verificaGridValeu() {
  if (inputUser.value == '') {
    alert('Board inválido!');
  }
}
// muda o tamanho da grid baseado no texrto inputado
function criarGridValue() {
  tamanhoGrid = inputUser.value;
}

button.addEventListener('click', clearBtt);
vqvBtt.addEventListener('click', limpaGrid);
vqvBtt.addEventListener('click', verificaGridValeu);
vqvBtt.addEventListener('click', criarGridValue);
vqvBtt.addEventListener('click', pintaPixels);
vqvBtt.addEventListener('click', criarGrid);
/*
2) Verifica se nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: 'Board inválido!'
3) Verifica se a altura do board é 5 quando um valor menor é colocado no input
4) Verifica se a altura do board é 50 quando um valor maior é colocado no input
*/
