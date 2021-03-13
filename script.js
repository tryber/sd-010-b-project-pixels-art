const pallete = document.getElementById('color-palette');
const squearePixel = document.getElementById('pixel-board');
const clearButton = document.querySelector('#clear-board');

function viewPallete() {
  for (let index = 0; index < 4; index += 1) {
    const box = document.createElement('div');
    box.className = 'color';
    pallete.appendChild(box);
  }
  return pallete;
}
viewPallete();

function createSquarePixel() {
  for (let index = 0; index < 25; index += 1) {
    const box2 = document.createElement('div');
    box2.className = 'pixel';
    squearePixel.appendChild(box2);
  }
  return squearePixel;
}
createSquarePixel();

function selectPallete() {
  const selectColor = document.querySelector('#color-palette');
  selectColor.addEventListener('click', (event) => {
    const element = event;
    document.querySelector('.selected').className = 'color';
    element.target.className = 'color selected';
  });
}

selectPallete();

function paint() {
  const color = document.querySelectorAll('.pixel');
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', (event) => {
      const element = event;
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      element.target.style.backgroundColor = colorSelected;
    });
  }
}

paint();

function clear() {
  const allDivs = squearePixel.children;
  for (let index = 0; index < allDivs.length; index += 1) {
    allDivs[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clear);

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[0].className += ' selected';
document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
document.getElementsByClassName('color')[3].style.backgroundColor = 'green';
