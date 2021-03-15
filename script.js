//Consultas aos sites W3School, Maujor, Developer Mozilla, Stackoverflow
// Apoios nos plantões de ISaac e Gisele
//Função para criar os pixels - baseada no código do colega Renan Braga
//e correções realizadas junto com a colega Trybe Duda Wiltiner

window.onload = function () {
  pixelBoardContainer = document.getElementById('pixel-board');
  
  function createScreen() {
    
    let lines = columns = 5;
    for (let i = 0; i < lines; i += 1) {
      criaLinha = document.createElement('div');
      criaLinha.className = 'line';
      pixelBoardContainer.appendChild(criaLinha);
      for (let j = 0; j < columns; j += 1) {
        criaPixel = document.createElement('div');
        criaPixel.className = 'pixel';
        criaLinha.appendChild(criaPixel);
      }
    }
  }

  createScreen();

// Tentativa de realizar item 10  
//   function lineNumber(){
//     let valor = document.getElementById('board-size').value;
//     if valor === 0 {
//       alert("Board inválido!");
//     }
//     else if valor <= 5 {
//        createScreen(5);
//     }
//     else {
//       createScreen(valor);
//     }
// }
//   lineNumber();


//Função com base na dos colegas Trybe Nikolas Silva e Aline Barbosa

  let clearGrid = document.getElementById('clear-board');
  clearGrid.addEventListener('click', clearColor);

  function clearColor() {
    let clearPixel = document.getElementsByClassName('pixel');
    for (let i = 0; i < clearPixel.length; i += 1) {
      clearPixel[i].style.backgroundColor = 'white';
    }
  }

//Função baseada na do colega Trybe Thiago Felipe

  let setColor = document.getElementsByClassName('color');
  for (let i = 0; i < setColor.length; i += 1) {
    setColor[i].addEventListener('click', selectColor);
  }

  function selectColor(pointer) {
    document.getElementsByClassName('selected')[0].
    classList.remove('selected');
    pointer.target.classList.add('selected');
  }

//Função baseada na do colega Trybe Jonathan Souza

  const colorSelected = document.getElementsByClassName('selected');
  const colorPixel = document.getElementsByClassName('pixel');

  function colorPaint() {
    for (let i = 0; i < colorSelected.length; i += 1) {
      for (let j = 0; j < colorPixel.length; j += 1) {
        colorPixel[j].addEventListener('click', function () {
          this.style.backgroundColor = colorSelected[i].style.backgroundColor;
        });
      }
    }
  }
  colorPaint();
}
