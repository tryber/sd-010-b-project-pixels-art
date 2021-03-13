const tabelaCores = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

function clicaCor() {
  for (let index = 0; index < tabelaCores.length; index += 1) {
    tabelaCores[index].addEventListener('click', function (event) {
      for (let index1 = 0; index1 < tabelaCores.length; index1 += 1) {
        tabelaCores[index1].classList.remove('selected');
        event.target.classList.add('selected');
        tabelaCores[index1] = event.target;
      }
    });
  }
}

clicaCor();

function colorirPixel() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function (event) {
      const corSelecionada = window.getComputedStyle(
        document.querySelector('.selected')).backgroundColor;
      event.target.style.backgroundColor = corSelecionada;
    });
  }
}

colorirPixel();

function limparPixel() {
    const botaoLimpar = document.querySelector('#clear-board');
    botaoLimpar.addEventListener('click', function (){
        for(let index = 0; index < pixel.length; index += 1){
            pixel[index].style.backgroundColor = 'white';
        }
    })
}

limparPixel();