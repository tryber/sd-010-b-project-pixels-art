const quadros = document.getElementById('pixel-board');
const n = 5;

for (let indexLinhas = 0; indexLinhas < n; indexLinhas += 1) {
  const linha = document.createElement('tr');
  for (let indexColunas = 0; indexColunas < n; indexColunas += 1) {
    const coluna = document.createElement('td');
    coluna.className = 'pixel';
    linha.appendChild(coluna);
    quadros.appendChild(linha);
  }
}

// requisito 7
const cor = document.getElementsByClassName('color');
const colorPalette = document.getElementById('color-palette');
function corTroca() {
  for (let corIndex = 0; corIndex < cor.length; corIndex += 1) {
    cor[corIndex].addEventListener('click', function () {
      colorPalette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

corTroca();

// requisito 8
const pixelItem = document.getElementsByClassName('pixel');
function pintar() {
  for (let pi = 0; pi < pixelItem.length; pi += 1) {
    pixelItem[pi].addEventListener('click', function (event) {
      const selectColor = document.getElementsByClassName('selected')[0];
      const backg = window.getComputedStyle(selectColor).backgroundColor; // getComputedStyle --> recupera o style do objeto.
      event.target.style.backgroundColor = backg; // event.target --> pixelItem[pi], nesse caso.
    });
  }
}
pintar();

// requisito 9
function limparQuadro() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', function limpar(event) {
    const quadroPixels = document.getElementsByClassName('pixel');
    for(let boardIndex = 0; boardIndex < quadroPixels.length; boardIndex += 1){
      quadroPixels[boardIndex].style.backgroundColor = 'white';
    }
  });
}
limparQuadro();
