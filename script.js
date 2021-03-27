function selecionaCor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
}
const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', selecionaCor);
}

const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function novaCor() {
  let corNova = document.getElementsByClassName("selected")[0].style.backgroundColor;
  pixels[i].style.backgroundColor = corNova; });
}

function clearBtt() {
  for (let i = 0; i < pixels.length; i++) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'rgb(255,255,255)'
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBtt);

const tamanhoColor = document.getElementsByClassName('color').length;
function corRandom() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 1; i < tamanhoColor; i += 1) {
  document.getElementsByClassName('color')[i].style.backgroundColor = corRandom();
}

document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';

// function errotamanho() { 
// let tamanho = window.document.getElementById('board-size').value {
// if (tamanho < "5") {
//     window.alert = 
// } 
// if (tamanho > "50"){
//     window.alert = `Board inválido!`
//   }
//   }
// }
