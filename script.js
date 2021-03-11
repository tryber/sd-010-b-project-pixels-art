const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const inlineDivs = document.getElementsByClassName('inlineDivs');
const paletteColors = document.getElementsByClassName('color');
const paletteBoard = document.getElementById('color-palette');
const buttonDiv = document.querySelector('#buttonDiv');
const button = document.createElement('button');
localStorage.setItem('initialColor', 'black');
localStorage.setItem('Selected', ' selected');
paletteColors[0].style.backgroundColor = (localStorage.getItem('initialColor'));
paletteColors[0].className += (localStorage.getItem('Selected'));
let colorsBackground = [];
let hex = '#';
for (let y = 0; y < 3; y += 1) {
  for (let x = 0; x < 6; x += 1) {
    hex += ((Math.ceil(Math.random() * (9 - 0) + 0)));
  }
  colorsBackground.push(hex);
  hex = '#';
}
for (let counter = 0; counter < colorsBackground.length; counter += 1) {
  const getColorsClass = document.querySelectorAll('.color');
  getColorsClass[counter + 1].style.backgroundColor = colorsBackground[counter];
}
paletteBoard.addEventListener('click', function (event) {
  document.querySelector('.selected').className = 'color';
  event.target.className += ' selected';
});
for (let counterDiv = 0; counterDiv < 5; counterDiv += 1) {
  pixelBoard.appendChild(document.createElement('div'));
  pixelBoard.lastChild.className = 'inlineDivs';
  for (let counterPixel = 0; counterPixel < 5; counterPixel += 1) {
    inlineDivs[counterDiv].appendChild(document.createElement('div'));
    inlineDivs[counterDiv].lastChild.className = 'pixel';
  }
}
localStorage.setItem('cor', 'white');
const getPixel = document.getElementsByClassName('pixel');
for (let counter = 0; counter < getPixel.length; counter += 1) {
  getPixel[counter].style.backgroundColor = (localStorage.getItem('cor'));
  getPixel[counter].style.border = '1px solid black';
  getPixel[counter].style.height = '40px';
  getPixel[counter].style.width = '40px';
  getPixel[counter].style.display = 'inline-block';
}
const buttonPixel = document.getElementById('generate-board');
const input = document.getElementById('board-size');
buttonPixel.addEventListener('click', function () {
  const divMotherOfPixel = document.getElementById('board-container');
  if (input.value === '') {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    document.getElementById('board-container').removeChild(document.querySelector('#pixel-board'));
    document.getElementById('board-container').appendChild(document.createElement('div'));
    document.getElementById('board-container').lastElementChild.id = 'pixel-board';
    const pixelBoard = document.getElementById('pixel-board');
    for (let counterDiv = 0; counterDiv < 5; counterDiv += 1) {
      pixelBoard.appendChild(document.createElement('div'));
      pixelBoard.lastChild.className = 'inlineDivs';
      for (let counterPixel = 0; counterPixel < 5; counterPixel += 1) {
        inlineDivs[counterDiv].appendChild(document.createElement('div'));
        inlineDivs[counterDiv].lastChild.className = 'pixel';
      }
    }
  } else if (input.value > 50) {
    document.getElementById('board-container').removeChild(document.querySelector('#pixel-board'));
    document.getElementById('board-container').appendChild(document.createElement('div'));
    document.getElementById('board-container').lastElementChild.id = 'pixel-board';
    const pixelBoard = document.getElementById('pixel-board');
    for (let counterDiv = 0; counterDiv < 50; counterDiv += 1) {
      pixelBoard.appendChild(document.createElement('div'));
      pixelBoard.lastChild.className = 'inlineDivs';
      for (let counterPixel = 0; counterPixel < 50; counterPixel += 1) {
        inlineDivs[counterDiv].appendChild(document.createElement('div'));
        inlineDivs[counterDiv].lastChild.className = 'pixel';
      }
    }
  } else {
    const pixelBoard = document.getElementById('pixel-board');
    divMotherOfPixel.removeChild(pixelBoard);
    const createBoard = document.createElement('div');
    divMotherOfPixel.appendChild(createBoard);
    createBoard.id = 'pixel-board';
    for (let counterInline = 0; counterInline < input.value; counterInline += 1) {
      createBoard.appendChild(document.createElement('div'));
      createBoard.lastChild.className = 'inlineDivs';
      for (let counterPixel = 0; counterPixel < input.value; counterPixel += 1) {
        const getInlineDiv = document.getElementsByClassName('inlineDivs');
        getInlineDiv[counterInline].appendChild(document.createElement('div'));
        getInlineDiv[counterInline].lastChild.className = 'pixel';
      }
    }
  }
  const pixel = document.getElementsByClassName('pixel');
  for (let counter = 0; counter < pixel.length; counter += 1) {
    pixel[counter].style.backgroundColor = 'white';
    pixel[counter].style.height = '40px';
    pixel[counter].style.width = '40px';
    pixel[counter].style.display = 'inline-block';
    pixel[counter].style.border = '1px solid black';
  }
});
buttonDiv.appendChild(button);
button.id = 'clear-board';
button.innerText = 'Limpar';
button.addEventListener('click', function () {
  pixelBoard.style.backgroundColor = 'white';
  for (let counter = 0; counter < pixel.length; counter += 1) {
    pixel[counter].style.backgroundColor = 'white';
  }
});
const colorPixel = document.getElementById('pixel-board');
colorPixel.addEventListener('click', function (event) {
  const backgroundColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = backgroundColor;
});
