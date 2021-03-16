window.onload = function () {
  let cor = 0;
  const corRGB = document.querySelectorAll('.color');
  let RGB = '';
  const virgula = ', ';
  for (let j = 1; j < corRGB.length; j += 1) {
    for (let i = 0; i < 3; i += 1) {
      cor = Math.floor(Math.random() * 255);
      if (i === 2) {
        RGB += cor;
      } else {
        RGB += cor + virgula;
      }
    }
    corRGB[j].style.background = 'rgb(' + RGB + ')';
    corRGB[0].style.background = 'rgb(000, 000, 000)';
    RGB = '';
  }
  
};

const boxPixel = document.getElementById('pixel-board');
const paletaCores = document.getElementById('color-palette').getElementsByTagName('th');
const quadradoPixels = boxPixel.getElementsByTagName('td');

function addQuadradoPixels(x) {  
  const table = document.createElement('table');
  boxPixel.appendChild(table);
  const rowPixel = boxPixel.getElementsByTagName('table');
  for (let index = 0; index < x; index += 1) {
    const tr = document.createElement('tr');
    rowPixel[0].appendChild(tr);
  }
  const columnPixel = boxPixel.getElementsByTagName('tr');
  for (let i = 0; i < x; i += 1) {
    for (let j = 0; j < x; j += 1) {
      const td = document.createElement('td');
      td.className = 'pixel';
      columnPixel[i].appendChild(td);
    }
  }
}
addQuadradoPixels(5);
function addClassSelected() {
  // Relembrando: Nesse trexo de codigo e iniciado um loop para encontrar o evento click, encontrado a add na tag clicada um class e removida da que ja tinha a class selected.
  for (let i = 0; i < paletaCores.length; i += 1) {
    paletaCores[i].addEventListener('click', function (){
      if (paletaCores[i].className.indexOf('selected') < 0) {
        paletaCores[i].className += ' selected';
        for (let j = 0; j < paletaCores.length; j += 1) {
          if ((paletaCores[j].className.indexOf('selected') > 0) && (j !== i)) {
            paletaCores[j].className = 'color';
          }
        }
      } 
    })
  }
}
addClassSelected();

function colorPixels() {
  for (let i = 0; i < quadradoPixels.length; i += 1) {
    quadradoPixels[i].addEventListener('click', function (){
      for (let j = 0; j < paletaCores.length; j += 1) {
        if (paletaCores[j].className.indexOf('selected') > 0) {
          quadradoPixels[i].style.background = paletaCores[j].style.background;
        }
      }
    })
  }
}
colorPixels();

function buttonClear() {
  const criaButton = document.createElement('button');
  const body = document.getElementById('painelControle');
  criaButton.type = 'button';
  criaButton.innerText = 'Limpar';
  criaButton.id = 'clear-board';
  body.appendChild(criaButton);

  const button = document.getElementById('clear-board');
  button.addEventListener('click', function (){
    for (let i = 0; i < quadradoPixels.length; i += 1) {
      quadradoPixels[i].style.background = button.style.background;
    }
  })
  
}
buttonClear();

function criaInput() {
  const sectionInput = document.getElementById('painelControle');
  const criaInput = document.createElement('input');
  const criaButton = document.createElement('button');
  criaInput.type = 'number';
  criaInput.id = 'board-size';
  criaInput.min = '5';
  criaInput.max = '50';
  criaButton.type = 'button';
  criaButton.id = 'generate-board';
  criaButton.innerText = 'VQV';
  sectionInput.appendChild(criaInput);
  sectionInput.appendChild(criaButton);

  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  button.addEventListener('click', function (){
    if (input.value === '') {
      alert('Board inválido!');
    } else {
      document.getElementsByTagName('table')[1].remove();
      if (input.value < 5) {
        input.value = 5;
      } 
      if (input.value > 50) {
        input.value = 50;
      } 
      const valueInput = input.value;
      addQuadradoPixels(valueInput);    
      addClassSelected();
      colorPixels(); 
    }
  })

}
criaInput();
