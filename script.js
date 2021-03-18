  //cria uma div com a classe color
function createDivPalette() {
 let paletteDiv = document.createElement('div');
 paletteDiv.className = 'color'
 return paletteDiv
}
//recebe uma variavel e injeta na main
function injectMain(element) {
  const elementMain = document.querySelector('main');
  elementMain.appendChild(element);
  return elementMain;
}

// adiciona titulo
const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
injectMain(title);

//cria section para paleta de cores
let colorPalette = document.createElement('section');
colorPalette.id = 'color-palette';

//cria divs, injeta em section e injeta section na main
for (let index = 0; index < 4; index += 1) {
  colorPalette.appendChild(createDivPalette());
}
injectMain(colorPalette);

//recupera as divs da paleta de cores e coloca o id para colorir.
let firstDiv = document.querySelector('#color-palette').firstChild;
firstDiv.id = 'black';
let secondDiv = document.querySelector('#color-palette').firstChild.nextSibling;
secondDiv.id = 'blue';
let thirdDiv = document.querySelector('#color-palette').firstChild.nextSibling.nextSibling;
thirdDiv.id = 'red';
let fourthDiv = document.querySelector('#color-palette').lastChild;
fourthDiv.id = 'yellow';
document.querySelector('#black').classList = 'color selected';



// usei como consulta para resolver o problema, a propriedade display do CSS deste site para posicionar os elementos. URL => https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css | Usei a propriedade display do CSS deste site para posicionar os elementos.

// Cria board de pixels
let boardPixel = document.createElement('div');
boardPixel.id = 'pixel-board';

for (let column = 0; column < 5; column += 1){
  let lineDiv = document.createElement('div');
    lineDiv.className = 'line';
  for (let line = 0; line < 5; line += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.id = 'white';
    
    lineDiv.appendChild(pixel);
  }
boardPixel.appendChild(lineDiv);
}
injectMain(boardPixel);

//Estutador de evento da paleta de cores
const divsColorsPalette = document.getElementsByClassName('color');
let idColor = '';
  for (let index = 0; index < divsColorsPalette.length; index += 1) {
    divsColorsPalette[index].addEventListener('click', (event) => {
      divsColorsPalette[0].className = 'color';
      divsColorsPalette[1].className = 'color';
      divsColorsPalette[2].className = 'color';
      divsColorsPalette[3].className = 'color';
      if (event.target.className === 'color'){
          event.target.className = 'color selected';
          idColor = event.target.id
      };
    });
  };
//pinta os quadradinhos
const divsPixel = document.querySelectorAll('.pixel')

 for (let index = 0; index < divsPixel.length; index += 1) {

  divsPixel[index].addEventListener('click', (event) => {
    if(idColor === ''){
      event.target.id = 'black';
    } else {
    event.target.id = idColor;
    }
  });
 }

 const button = document.querySelector('#clear-board')
 
 button.addEventListener('click', (event) => {
  for (let index = 0; index < divsPixel.length; index += 1) {
    divsPixel[index].id = 'white';
  } 
 })