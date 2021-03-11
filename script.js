window.onload = function () {
  document.getElementById('black').classList.add('selected')
}

//Paleta de Cores
let colorPalette = ['black', 'green', 'red', 'blue'];
let heldColor = 'black';

//Botões da paleta de cores
let getPaletteList = document.querySelector('#color-palette');

for (index = 0; index < 4; index += 1) {
  let paletteBox = document.createElement('div');
  paletteBox.className = 'color';
  paletteBox.id = colorPalette[index];
  getPaletteList.appendChild(paletteBox);
  paletteBox.addEventListener('click', function (event) {
    for (child = 0; child < getPaletteList.children.length; child += 1){
    getPaletteList.children[child].classList.remove('selected');
    }
    paletteBox.classList.add('selected');
    if (paletteBox.id === 'black') {
      heldColor = 'black';
    } else if (paletteBox.id === 'green') {
      heldColor = 'green';
    } else if (paletteBox.id === 'red') {
      heldColor = 'red';
    } else if (paletteBox.id === 'blue') {
      heldColor = 'blue';
    }
  });
}

//Criando a tabela de pixels: 
let getPixelsList = document.querySelector('#pixel-row');

for (let row = 0; row < 5; row += 1) {
  let pixelRow = document.createElement('tr');
  getPixelsList.appendChild(pixelRow);
  for (let index = 0; index < 5; index += 1) {
    let getPixelsBoxes = getPixelsList.lastChild;
    let pixelBox = document.createElement('td');
    pixelBox.className = 'pixel';
    getPixelsBoxes.appendChild(pixelBox);
    pixelBox.addEventListener('click', function () {
      pixelBox.style.backgroundColor = heldColor;     
    });
  };
};

//Botão de limpar o quadro de pixels
let getPixelsBoxes = document.getElementsByClassName('pixel');
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', function () {
  for (index = 0; index < getPixelsBoxes.length; index += 1) {
    getPixelsBoxes[index].style.backgroundColor = 'white';
  }
})
