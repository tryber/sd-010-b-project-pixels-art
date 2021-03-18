function botaoCores () {
let escolhaCores = document.getElementsByClassName('color');
let cores = ['black', 'red', 'blue', 'green'];

  for (i = 0; i < escolhaCores.length; i++) {
  escolhaCores[i].style.backgroundColor = cores[i];
  }
}
botaoCores();

function quadroColorir () {
let quadro = document.querySelector('#pixel-board');

  for (i = 0; i < 5; i++) {
  let quadroLinha = document.createElement('tr');
  quadro.appendChild(quadroLinha);
  
    for (ii = 0; ii < 5; ii++) {
    let quadroColuna = document.createElement('td');
    quadroColuna.className = 'pixel';
    quadroLinha.appendChild(quadroColuna);
    }
  }
  console.log(quadro);
}
quadroColorir();

function tirandoSelected () {
let colorDiv = document.querySelectorAll('.color');
colorDiv.forEach( function (c) {
  if (c.className === 'color selected') {
    c.className = 'color';
  }
})
}

function AplicandoSelected () {
let colorDivEvent = document.querySelectorAll('.color');
colorDivEvent.forEach( function (quadrado) {
  quadrado.addEventListener('click', function (evento) {
    tirandoSelected();
    evento.target.className += ' selected';
  });
  });
}
AplicandoSelected();

function colorindoQuadro () {
let quadradoPixel = document.querySelectorAll('.pixel');
quadradoPixel.forEach( function (quadrado) {
  quadrado.addEventListener('click', (evento) => {
    let quadradoCor = document.querySelector('.selected');
    let cor = getComputedStyle(quadradoCor).backgroundColor;
    evento.target.style.backgroundColor = cor;
    });
  });
}
colorindoQuadro();