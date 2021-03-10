window.onload = function () {
  document.querySelector('.color').classList.add('selected');
  // enter = eventoDeOrigem.target.style.backgroundColor = 'black';
}
let cor;

function palletCollor() {
  // let pallet = []; 
  for (let index = 0; index < 4; index += 1) {
    let criarDiv = document.createElement('div');
    criarDiv.className = 'color';
    document.getElementById('color-palette').appendChild(criarDiv);
  }
}
palletCollor();

function pallets() {
  // let pallet = [];
  for (let indexHor = 0; indexHor < 5; indexHor += 1) {
    let criarDiv = document.createElement('div');
    document.getElementById('pixel-board').appendChild(criarDiv);
    for (let indexVer = 0; indexVer < 5; indexVer += 1) {
      let criarDiv = document.createElement('div');
      criarDiv.className = 'pixel';
      document.getElementById('pixel-board').appendChild(criarDiv);
    }
  }
}
pallets();

function colorPallet() {
  getColor = document.getElementsByClassName('color');
  getColor[0].style.backgroundColor = 'black';
  getColor[1].style.backgroundColor = 'red';
  getColor[2].style.backgroundColor = 'blue';
  getColor[3].style.backgroundColor = 'yellow';
}
colorPallet();

let pixelColors = document.getElementById('color-palette');
pixelColors.addEventListener('click', getCor);

let pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', receberCor);

function getCor(eventoDeOrigem) {
  let rem = document.getElementsByClassName('color');
  for (let index = 0; index < rem.length; index += 1) {
    document.getElementsByClassName('color')[index].classList.remove('selected');
  }
  eventoDeOrigem.target.classList.add('selected');
  cor = eventoDeOrigem.target.style.backgroundColor;
}

function receberCor(eventoDeOrigem) {
  let selectPai = document.getElementById('pixel-board');
  if (selectPai == eventoDeOrigem.target) {} else {
    eventoDeOrigem.target.style.backgroundColor = 'black';
    eventoDeOrigem.target.style.backgroundColor = cor;
  }
}

let clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', button);

function button() {
  let array = document.getElementsByClassName('pixel');
  for (let index = 0; index < array.length; index += 1) {
    array[index].style.backgroundColor = 'white';
  }
}
