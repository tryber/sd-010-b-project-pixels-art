window.onload = function () {
  let numberOfOption = 4;
  let numberOfItems = 25;
  let paletOfColors = null;
  let paletOfPixel = null;
  let selectedColor = null;
  let targetColor = null;
  let colorChanged = 'cor_1';
  let buttonLimpar = null;
  let elementButton = null;

  const elementHeader = document.createElement('header');
  document.body.appendChild(elementHeader);

  const elementTitulo = document.createElement('h1');
  elementTitulo.id = 'title';
  elementTitulo.innerText = 'Paleta de Cores';
  elementHeader.appendChild(elementTitulo);

  const elementos = document.createElement('section');
    elementos.id = "conteudo";
  document.body.appendChild(elementos);


  const elemento1 = document.createElement('section');
  elemento1.id = 'color-palette';
  elementos.appendChild(elemento1);
  paletOfColors = document.querySelector('#color-palette');

  const sectionBotoes = document.createElement('section');
  sectionBotoes.id = "section-botoes";
  elementos.appendChild(sectionBotoes);

  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  sectionBotoes.appendChild(button);
  buttonLimpar = button;

  const elementInput = document.createElement('input');
  elementInput.id = 'board-size';
  elementInput.setAttribute("type", "number");
  elementInput.setAttribute("min", 1);
  sectionBotoes.appendChild(elementInput);

  const buttonInput1 = document.createElement('button');
  buttonInput1.id = 'generate-board';
  buttonInput1.innerText = 'VQV';
  sectionBotoes.appendChild(buttonInput1);
  elementButton = document.getElementById('generate-board');

  const elemento2 = document.createElement('section');
  elemento2.id = 'pixel-board';
  elementos.appendChild(elemento2);
  paletOfPixel = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfOption; index++) {
    const colorOption = document.createElement('div');
    if (index === 0) {
      colorOption.className = 'color selected';
      colorOption.style.background = 'black';
      colorChanged = "rgb(0, 0, 0)";
    } else {
      colorOption.className = 'color';
      colorOption.style.background = "rgb("+Math.ceil(Math.random() * 100)+", "+Math.ceil(Math.random() * 150)+", "+Math.ceil(Math.random() * 210)+")";
    }
    colorOption.id = 'cor_' + (index + 1);
    elemento1.appendChild(colorOption);
  }
  selectedColor = document.querySelectorAll('.color');

  for (let index = 0; index < numberOfItems; index++) {
    const itemOption = document.createElement('div');
    itemOption.className = 'pixel';
    elemento2.appendChild(itemOption);
  }
  targetColor = document.querySelectorAll('.pixel');

  function defaultClass() {
    for (let index = 0; index < selectedColor.length; index++) {
      selectedColor[index].className = 'color';
    }
    return true;
  }
  function defaultClassPixel() {
    for (let index = 0; index < paletOfPixel.length; index++) {
      paletOfPixel[index].style.backgroundColor = 'white';
    }
    return true;
  }

  paletOfColors.addEventListener('click', function (props) {
    if (defaultClass()) {
      props.target.className = 'color selected';
      colorChanged = props.target.style.background;
    }
  });

  paletOfPixel.addEventListener('click', function (props) {
    if (defaultClassPixel()) {
      props.target.style.background = colorChanged;
    }
  });

  elementButton.addEventListener('click', function (props) {
    let linhas = 0;
    let colunas =0;
    let largura = 0;

    let pixelBoard = document.getElementById('pixel-board');
    let pixels = document.querySelectorAll('.pixel');

    if (elementInput.value === '') {
      alert('Board inválido!');
    } else {
      if (elementInput.value < 5) {
        linhas = 5;
        colunas = 5;
      } else if (elementInput.value >= 5 && elementInput.value <= 50) {
        linhas = elementInput.value;
        colunas = elementInput.value;
      } else {
        linhas = 50;
        colunas = 50;
      }

        for (let index = 0; index < pixels.length; index++) {
            pixelBoard.removeChild(pixels[index]);
        }

        for (let index = 0; index < (linhas*colunas); index++) {
            const itemOption = document.createElement('div');
            itemOption.className = 'pixel';
            itemOption.style.background = "rgb(255, 255, 255)"
            elemento2.appendChild(itemOption);
        }
        largura = linhas*42;
        elemento2.style.width = largura+'px';

    }


  });

  button.addEventListener('click', function () {
    const paletaDosPixels = document.querySelectorAll('.pixel');
    paletaDosPixels.forEach((pixel) => {
      pixel.style.backgroundColor = 'white';
    });
    colorChanged = "rgb(0, 0, 0)";
  });
};
