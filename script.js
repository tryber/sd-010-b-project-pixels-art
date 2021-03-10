function createEl(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function setPaletteColor() {
  const colorPalette = '#color-palette';
  for (let index = 0; index < 4; index += 1) {
    const el = createEl('span');
    el.classList.add('color');
    document.querySelector(colorPalette).appendChild(el);
  }
  const cores = ['black', 'pink', 'green', 'lightblue'];
  const arr = document.getElementById('color-palette').childNodes;
  arr.forEach((element, index) => {
    const el = element; el.style.backgroundColor = cores[index];
  });
  const colors = document.getElementsByClassName('color');
  colors[0].classList.add('selected');
}

function setPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    for (let i = 0; i < 5; i += 1) {
      const el = createEl('span');
      el.classList.add('pixel');
      document.getElementById('pixel-board').appendChild(el);
    }
  }
}

function getSelected(event) {
  const el = event.target;
  if (!el.id) {
    const colors = document.querySelectorAll('.color');
    colors.forEach((element) => element.classList.remove('selected'));
    el.classList.add('selected');
  }
  sessionStorage.color = el.style.backgroundColor;
}

function paintPixel(event) {
  const el = event.target;
  if (!el.id) {
    const colorToPaint = sessionStorage.color;
    el.style.backgroundColor = colorToPaint;
  }
}

function clearBord() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((e) => { e.style.backgroundColor = ''; });
}
window.onload = function init() {
  // ---------------------------------------------------------------
  sessionStorage.setItem('color', 'black');
  setPaletteColor();
  setPixelBoard();
  document.getElementById('color-palette').addEventListener('click', getSelected);
  document.getElementById('pixel-board').addEventListener('click', paintPixel);
  document.getElementById('clear-board').addEventListener('click', clearBord);
};
