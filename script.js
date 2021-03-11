const colorsPalet = document.querySelectorAll('.color');
function inicializeColor() {
  for (let color = 0; color < colorsPalet.length; color += 1) {
    if (color === 0) {
      colorsPalet[color].style.backgroundColor = 'black';
      colorsPalet[color].className += ' selected';
    } else if (color === 1) {
      colorsPalet[color].style.backgroundColor = randomColor();
    } else if (color === 2) {
      colorsPalet[color].style.backgroundColor = randomColor();
    } else if (color === 3) {
      colorsPalet[color].style.backgroundColor = randomColor();
    }
  }
}

inicializeColor();

const theBorad = document.querySelector('#pixel-board');
function createBorad(height, width) {  

  for (let boardHeight = 0; boardHeight < height; boardHeight += 1) {
    const lineBoard = document.createElement('tr');
    theBorad.appendChild(lineBoard);
    for (let boardWidth = 0; boardWidth < width; boardWidth += 1) {
      const lineToAdd = theBorad.lastElementChild;
      const mkPixel = document.createElement('td');
      mkPixel.className = 'pixel';
      mkPixel.style.background = 'white';
      lineToAdd.appendChild(mkPixel);
    }
  }
}

createBorad(5, 5);

function selectColor() {
  for (let color = 0; color < colorsPalet.length; color += 1) {
    colorsPalet[color].addEventListener('click', function () {
      const lastSelected = document.querySelector('.selected');
      lastSelected.className = lastSelected.className.replace(' selected', '');
      colorsPalet[color].className += ' selected';
    });
  }
}

selectColor();

let allPixels = document.querySelectorAll('.pixel');

function pixelAlive() {
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].addEventListener('click', function () {
      const colorSelected = document.querySelector('.selected');
      allPixels[i].style.backgroundColor = colorSelected.style.backgroundColor;
    });
  }
}

pixelAlive();

const buttoncleaner = document.querySelector('#clear-board');
function clearBoard() {
  buttoncleaner.addEventListener('click', function () {
    for (let pixel = 0; pixel < allPixels.length; pixel += 1) {
      allPixels[pixel].style.backgroundColor = 'white';
    }
  });
}

clearBoard();

function powerfulUser() {
  const buttonResize = document.querySelector("#generate-board");
  const inputResize = document.querySelector("#board-size");
  buttonResize.addEventListener("click", function () {
    if(!inputResize.value == ""){
      const childsToRemove = theBorad.childElementCount;
      for (let i = 0; i < childsToRemove; i++) {
        theBorad.removeChild(theBorad.lastElementChild);        
      }
      
      if(inputResize.value <= 4) inputResize.value = 5;
      if(inputResize.value >= 51) inputResize.value = 50;
      
      createBorad(inputResize.value, inputResize.value);
      allPixels = document.querySelectorAll('.pixel');
      pixelAlive();
    } else {
      alert('Board inválido!');
    }
  });
}

powerfulUser();

function randomColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  return `rgb(${r}, ${g}, ${b})`;
}