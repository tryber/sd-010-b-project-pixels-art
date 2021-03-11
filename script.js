let pixel;
// **************cores aleatorias****************
let black = document.querySelector('#black');
let blue = document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
let red = document.querySelector('#red');
let cor1 = document.querySelector('#cor1');
let cor2 = document.querySelector('#cor2');
let cor3 = document.querySelector('#cor3');
let cor4 = document.querySelector('#cor4');
function escolheACor () {
  let escolhida = document.querySelector('.selected');
  escolhida.classList.remove('selected');
  this.classList.add('selected');
}
black.addEventListener('click', escolheACor);
blue.addEventListener('click', escolheACor);
yellow.addEventListener('click', escolheACor);
red.addEventListener('click', escolheACor);
cor1.addEventListener('click', escolheACor);
cor2.addEventListener('click', escolheACor);
cor3.addEventListener('click', escolheACor);
cor4.addEventListener('click', escolheACor);
let button1 = document.querySelector('#gerar');
function rgb () {
  return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
}
button1.addEventListener('click', function gerar () {
  cor1.style.backgroundColor = rgb()
  cor2.style.backgroundColor = rgb()
  cor3.style.backgroundColor = rgb()
  cor4.style.backgroundColor = rgb()
  black.style.backgroundColor = 'rgb(0,0,0)';
  blue.style.backgroundColor = 'rgb(0,0,255)';
  red.style.backgroundColor = 'rgb(255,0,0)';
  yellow.style.backgroundColor = 'rgb(255,255,0)';
});
// **************Limpa****************
let button = document.querySelector('#clear-board');
button.addEventListener('click', function () {
  for (let cont = 0; cont < pixel.length; cont += 1) {
    pixel[cont].style.backgroundColor = 'white';
  }
});
// **************Tamanho da Pixel Art****************
let tamanho = 5;
let indicaTamanho = document.querySelector('#valor-atual');
indicaTamanho.innerHTML = 'Tamanho atual = ' + tamanho + ' blocos.';
let tamanhoCoordenadas = document.querySelector('#board-size');
tamanhoCoordenadas.addEventListener('keyup', guardaTamanho);
function guardaTamanho () {
  tamanho = tamanhoCoordenadas.value;
  if (tamanho < 5) {
    tamanho = 5;
  }else if (tamanho > 50){
    tamanho = 50;
  }
  indicaTamanho.innerHTML = 'Tamanho atual = ' + tamanho + ' blocos.';
}
let buttonTamanho = document.querySelector('#generate-board');
buttonTamanho.addEventListener('click', apaga);
function apaga () {
  let quadro = document.querySelector('#pixel-board');
  let apagaDiv = document.querySelector('#pixel-board').childNodes;
  for (let i = 0; i !== apagaDiv.length; i){
    quadro.lastChild.remove();
  }
  criaQuadro();
}
criaQuadro ();
function criaQuadro () {
  let quadro = document.querySelector('#pixel-board');
  for (let index = 0; index < tamanho; index++) {
    let div = document.createElement('div');
    div.className = 'linha';
    for (let cont = 0; cont < tamanho; cont++) {
        let span = document.createElement('span');
        let id = (index) + '-' + (cont);
        span.id = id;
        span.className = 'pixel';
        div.appendChild(span);
      }
    quadro.appendChild(div);
    }
  pixel = document.querySelectorAll('.pixel');
  for (let cont = 0; cont < pixel.length; cont += 1) {
    pixel[cont].addEventListener('click', pinta);
  }
}
// **************Pinta****************
function pinta() {
  let cor = document.querySelector('.selected').style.backgroundColor;
  this.style.backgroundColor = cor;
}
for (let cont = 0; cont < pixel.length; cont += 1) {
  pixel[cont].addEventListener('click', pinta);
}
