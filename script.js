let compStyles = 'black';

function addElementoDiv() {
  const sectionAtual = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'color';
    sectionAtual.appendChild(newDiv);
  }
}
addElementoDiv();

function addElementoSection() {
  const newSection = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const newDivLinha = document.createElement('div');
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const newDivCelula = document.createElement('div');
      newDivCelula.className = 'pixel';
      newDivLinha.appendChild(newDivCelula);
      newDivLinha.className = 'tr';
    }
    newSection.className = 'table';
    newSection.appendChild(newDivLinha);
  }
  // append(preppend antes) coloque depois de todos os elementos
  // const sectionAtual = document.querySelector('script');
  // document.body.insertBefore(newSection, sectionAtual);
}

// variavel.setAtribute/getAttibute/removeAtribute
addElementoSection();

const classColor = document.querySelectorAll('.color');
const colorSelected = 'color selected';

// funções para selecionar cores;
function selecionarCorPreta() {
  classColor[0].className = colorSelected;
  classColor[1].className = 'color';
  classColor[2].className = 'color';
  classColor[3].className = 'color';
  compStyles = 'black';
  console.log(compStyles);
  return classColor;
}
// classList.add() classList.remove()

window.onload = selecionarCorPreta;

function selecionarCorVermelha() {
  classColor[0].className = 'color';
  classColor[1].className = colorSelected;
  classColor[2].className = 'color';
  classColor[3].className = 'color';
  compStyles = 'red';
  return classColor;
}

function selecionarCorAzul() {
  classColor[0].className = 'color';
  classColor[1].className = 'color';
  classColor[2].className = colorSelected;
  classColor[3].className = 'color';
  compStyles = 'blue';
  return classColor;
}

function selecionarCorVerde() {
  classColor[0].className = 'color';
  classColor[1].className = 'color';
  classColor[2].className = 'color';
  classColor[3].className = colorSelected;
  compStyles = 'green';
  return classColor;
}
const pixelQuadro = document.getElementById('pixel-board');

// Escutador de eventos
const divsColorPalette = document.querySelectorAll('.color');
divsColorPalette[0].addEventListener('click', selecionarCorPreta);
divsColorPalette[1].addEventListener('click', selecionarCorVermelha);
divsColorPalette[2].addEventListener('click', selecionarCorAzul);
divsColorPalette[3].addEventListener('click', selecionarCorVerde);
pixelQuadro.addEventListener('click', function (elemento) {
  elemento.target.style.background = compStyles;
});

function limparPixels() {
  const limpar = document.querySelectorAll('.pixel');
  limpar.forEach((count) => {
    count.style.backgroundColor = 'white';
  });
}

const buttomLimparCores = document.querySelector('#clear-board');
buttomLimparCores.addEventListener('click', limparPixels);
