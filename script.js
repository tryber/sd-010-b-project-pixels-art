function criarCores() {
  const pai = document.getElementById('color-palette');

  for (i = 0; i < 4; i += 1) {
    const filho = document.createElement('li');
    filho.className = 'color';
    pai.appendChild(filho);
  }
  const cor = document.getElementsByClassName('color');
  const black = cor[0];
  const green = cor[1];
  const red = cor[2];
  const blue = cor[3];
 

  black.style.backgroundColor = 'black';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  blue.style.backgroundColor = 'blue';
}
criarCores();

function criarQuadro() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const filho = document.createElement('li');
      filho.className = 'pixel';
      document.getElementById('pixel-board').appendChild(filho);
    }
  }
}
criarQuadro();

function CorPretaSelected() {
  const blackColor = document.getElementsByClassName('color')[0];
  blackColor.className = 'color selected';
}
CorPretaSelected();

function selectedClass() {
  const pai = document.getElementById('color-palette');
  pai.addEventListener('click', function(event) {
    const filho = document.getElementsByClassName('color');
    for (i = 0; i < filho.length; i += 1) {
      if(filho[i].className !== 'color') {
        filho[i].className = 'color';
      }
      event.target.className = 'color selected';
    }
  })
}
selectedClass()

function pintarPixeis () {
  let pai = document.getElementsByClassName('pixel')

  for (let i = 0; i < pai.length; i += 1) {
    pai[i].addEventListener('click',function() {
      let cor = document.querySelector('.selected')
        pai[i].style.backgroundColor = window.getComputedStyle(cor).getPropertyValue('background-color');
    })
  }
}
pintarPixeis ();





