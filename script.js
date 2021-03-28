let tamanhoGrid = 5;
const tamanhoColor = document.getElementsByClassName('color').length;
const cores = document.querySelectorAll('.color');
const pixels = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');

// definindo cores que podem ser escolhidas
document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
function corRandom() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
for (let i = 1; i < tamanhoColor; i += 1) {
  document.getElementsByClassName('color')[i].style.backgroundColor = corRandom();
}
// cria a grid de pixel
function criarGrid() {
  const tagTable = document.createElement('table'); // <table> <table/>
  const divisaoTop = document.getElementById('pixel-board'); // declara a div que vamos usar
  divisaoTop.appendChild(tagTable);
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
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', () => {
    const corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
    pixels[i].style.backgroundColor = corNova;
  });
}
// limpa grid
function clearBtt() {
  for (let i = 0; i < pixels.length; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}


button.addEventListener('click', clearBtt);
// vqvBtt.addEventListener('click', addPixel);
// vqvBtt.addEventListener('click', criarGrid);