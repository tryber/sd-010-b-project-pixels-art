const paletteDiv = document.getElementById('color-palette');
const colorsPalette = document.getElementsByClassName('color');
const colorsPaletteLenght = colorsPalette.length;
const boardOfPixels = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');

//create dynamically the class selected
function firstPaletteSelected() {
    const firstPalette = document.getElementsByClassName('color')[0];
    firstPalette.classList.add('selected');
}

function createColorPaletteDisplay() {
    for (let i = 0; i < 4; i++) {
        let cel = document.createElement('div');
        cel.className = 'color';
        paletteDiv.appendChild(cel);
    }
}
//create a pixel inside line
function createBoardOfPixels() {
    for (let i = 0; i < 5; i++) {
        let line = document.createElement('div');
        line.className = 'line';
        boardOfPixels.appendChild(line);
        for (let j = 0; j < 5; j++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            line.appendChild(pixel);
        }
    }
}

//black is the initial color
let selectedColor = 'black';
function selectColor(event) {
    let eventSelect = event.target;
    selectedColor = eventSelect.style.backgroundColor;
    console.log(selectedColor);
    if(eventSelect) {
        let arr = document.getElementsByClassName('color');
        for (let i = 0; i < 4; i++) {
            arr[i].classList.remove('selected');
        }
        eventSelect.classList.add('selected');
    } 
}

function pixelColor(event) {
    let eventSet = event.target;
    if(eventSet) {
        eventSet.style.backgroundColor = selectedColor;
    }
}

//https:wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function randomColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${r}, ${g}, ${b})`;
}

function setColor(element) {
    element[0].style.backgroundColor = 'black';
    for (let i = 1; i < element.length; i++) {
        element[i].style.backgroundColor = randomColor();
    }
}

function reset() {
    const arrayPixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < arrayPixels.length; i++) {
        arrayPixels[i].style.backgroundColor = 'white';
    }
}

window.onload = function () {
    createColorPaletteDisplay();
    setColor(colorsPalette);
    createBoardOfPixels();
    firstPaletteSelected();
    paletteDiv.addEventListener('click', selectColor);
    boardOfPixels.addEventListener('click', pixelColor);
    button.addEventListener('click', reset);
}