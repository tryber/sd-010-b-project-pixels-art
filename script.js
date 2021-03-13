// Executa o requisito 6 quando a página é carregada totalmente:
// 2. e 3. Adiciona a paleta de cores:
const rgbGenerator = {
  a: 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')',
  b: 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')',
  c: 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')',
};
const colors = [
  'black',
  rgbGenerator.a,
  rgbGenerator.b,
  rgbGenerator.c,
];

function colorsTableMaker() {
  for (let index = 0; index < colors.length; index += 1) {
    const allTables = document.querySelector('#color-palette');
    const tables = document.createElement('div');
    const identifier = colors[index]
    tables.id = identifier;
    tables.className = 'color';
    tables.style.backgroundColor = colors[index];

    if (identifier === 'black') {
      tables.className = 'selected color';
    }
    allTables.appendChild(tables);
  }
}

// 4. e 5. Adicionar à página um quadro com N pixels com 40*40px e 1px de borda:
let numberOfPixels;
const defaultNumber = 5;

function pixelsForBoard() {
  if (localStorage.getItem('number') === '' || localStorage.getItem('number') == null) numberOfPixels = defaultNumber;
  else numberOfPixels = localStorage.getItem('number');

  const pixelsFather = document.getElementById('pixel-board');
  // Criar as linhas com N de pixels:
  for (let line = 0; line < numberOfPixels; line += 1) {
    const createLines = document.createElement('tr');
    createLines.id = 'lines';
    pixelsFather.appendChild(createLines);

    // Criar as colunas com N de pixels:
    for (let column = 0; column < numberOfPixels; column += 1) {
      const createRows = document.createElement('td');
      createRows.className = 'pixel';
      createRows.style.backgroundColor = 'white';
      pixelsFather.appendChild(createRows);
    }
  }
}

// 7. Ao clicar numa cor, a classe da mesma muda para selected:
function selectColorOnClick() {
  const colorsPalette = document.querySelector('#color-palette');

  // Condição para mudar a cor:
  colorsPalette.addEventListener('click', function (event) {
    const colorToSelect = document.getElementsByClassName('color');

    for (let index = 0; index < colorToSelect.length; index += 1) {
      const colorSelected = document.querySelector('.selected');
      if (colorToSelect.className !== 'selected color') {
        // O Allan Tanaka deu-me uma ajuda nesse ponto com a lógica do meu código, pois mesmo funcionando, eu  precisava de inverter a ordem dos dois comandos abaixo para resolver o erro que aparecia no console.
        colorSelected.className = 'color';
        event.target.className = 'selected color';
      }
    }
  });
}

// 8. Pintar o pixel dentro do quadro após selecionar uma cor na paleta:
function paintWithPixels() {
  const paintPixels = document.querySelector('#pixel-board');
  paintPixels.addEventListener('click', function (event) {
    const selectColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectColor;
  });
}

// 9. Cria um botão que reseta as cores dos pixels.
// Funcionalidade do botão:
function buttonOnClick() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', function () {
    const elementsToReset = document.getElementsByClassName('pixel');

    for (let index = 0; index < elementsToReset.length; index += 1) {
      elementsToReset[index].style.backgroundColor = 'white';
    }
  });
}

// 10. Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária:
// Função para adicionar elementos ao input:
function InputData() {
  const inputArea = document.querySelector('#board-size');
  inputArea.type = 'number';
    inputArea.min = '1';
  inputArea.max = '50';
  inputArea.maxLength = '2';
}

// Reset quadro de pixels:
// Conteúdo de apoio foi encontrado no link 'https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript'.
function resetPixelBoard() {
  const board = document.querySelector('#pixel-board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

// Função para armazenar novo valor para a pixel-board:
const onButtonClick = document.querySelector('#generate-board');

function storeNewData() {
  const storeData = document.querySelector('#board-size');
  const value = storeData.value;

  if (value === '') alert('Board inválido!');
  else if (value >= 5 && value <= 50) localStorage.number = value;
  else if (value < 5) localStorage.number = '5';
  else if (value > 50) localStorage.number = '50';
  else alert('Board inválido!');

  resetPixelBoard();
  pixelsForBoard();
}

onButtonClick.addEventListener('click', storeNewData);

window.onload = function () {
  colorsTableMaker();
  pixelsForBoard();
  InputData();
  selectColorOnClick();
  paintWithPixels();
  buttonOnClick();
}

console.log(document.querySelector('body'));
