// Captura de elementos HTML
const colorPalette = document.querySelector('#color-palette');
const colorPaletteItems = document.getElementsByClassName('color');
const tablePixels = document.querySelector('#pixel-board');
const tablePixelsItems = document.getElementsByClassName('pixel');
const clearBotton = document.querySelector('#clear-board');

// --------------------------------------------------------------------------------------

// Função: Gera cores aleatórias.
function generateRandomColor() {
  // Esta função foi adaptada da seguinte fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20hexadecimais%20com%20Javascript&text=Multiplicamos%20Math.,o%20valor%20n%C3%BAmerico%20para%20hexadecimal.
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

// --------------------------------------------------------------------------------------

// Criação de elementos DIV, class=color, filhos do elemento Section, ID=ColorPalete.
for (let index = 0; index < 4; index += 1) {
  const newDiv = document.createElement('div');
  newDiv.id = 'palete' + [index];
  colorPalette.appendChild(newDiv).className = 'color';
  colorPalette.style.margin = '10px';

  // Regra que garante o backgroundColor da primeira DIV=black, e demais DIVs geradas aleatoriamente via funcão.
  if (index === 0) {
    newDiv.style.background = 'black';
  } else {
    newDiv.style.background = generateRandomColor();
  }

  // Estilização das DIVs colorPalete.
  newDiv.style.borderColor = 'black';
  newDiv.style.borderStyle = 'solid';
  newDiv.style.borderWidth = '1px';
  newDiv.style.margin = '5px';
  newDiv.style.display = 'inline-block';
  newDiv.style.width = '50px';
  newDiv.style.height = '50px';
}

// --------------------------------------------------------------------------------------

// Criação de elementos DIV, id=line[index1], Height=40px.
for (let index1 = 0; index1 < 5; index1 += 1) {
  const newLine = document.createElement('div');
  tablePixels.appendChild(newLine).id = 'line' + [index1];
  newLine.style.height = '40px';

  // Captura do elemento DIV, id=line[index1] (DIV/Linha atual da iteração)
  const linhaAtual = document.querySelector('#line' + [index1]);

  // Criação de elementos DIV, class=pixel, filhos do elemento DIV, ID=linhaAtual.
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const newColum = document.createElement('div');
    linhaAtual.appendChild(newColum).className = 'pixel';

    // Estilização das DIVs pixels.
    newColum.style.display = 'inline';
    newColum.style.width = '40px';
    newColum.style.height = '40px';
    newColum.style.backgroundColor = 'white';
    newColum.style.borderColor = 'black';
    newColum.style.display = 'inline-block';
    newColum.style.borderStyle = 'solid';
    newColum.style.borderWidth = '1px';
  }
}

// --------------------------------------------------------------------------------------

// Função que permite alterar selecionar color black no windows.onload e salvar cor black em váriável
function selectBlackColor() {
  const palete1 = document.querySelector('#palete0');
  palete1.className = 'color selected';
}

// --------------------------------------------------------------------------------------

// Função que permite alterar color atualmente selecionada
function changeSelectedColor(sourcePalette) {
  const currentlySelectedColor = document.querySelector('.selected');
  currentlySelectedColor.className = 'color';
  const newColorSelected = sourcePalette.target;
  newColorSelected.className = 'color selected';
}

// --------------------------------------------------------------------------------------

// Função que permite colorir pixel com cor atualmente selecionada
function colorsPixel(selectedPixel) {
  const clickedPixel = selectedPixel.target;
  const currentlySelectedColor = document.querySelector('.selected');
  clickedPixel.style.backgroundColor = currentlySelectedColor.style.backgroundColor;
}

// --------------------------------------------------------------------------------------

function clearBoard() {
  for (let index = 0; index < tablePixelsItems.length; index += 1) {
    tablePixelsItems[index].style.backgroundColor = 'white';
  }
}

// --------------------------------------------------------------------------------------

// Eventos de escuta

// Escuta clicks em cada item da paleta de cores
for (let index = 0; index < colorPaletteItems.length; index += 1) {
  colorPaletteItems[index].addEventListener('click', changeSelectedColor);
}

// Escuta clicks em cada item do quadro de pixel
for (let index = 0; index < tablePixelsItems.length; index += 1) {
  tablePixelsItems[index].addEventListener('click', colorsPixel);
}

// Escuta click no botão limpar
clearBotton.addEventListener('click', clearBoard);

// --------------------------------------------------------------------------------------

// Windows.onload: Chama função que seleciona color black após carregamento da página.
window.onload = selectBlackColor;
