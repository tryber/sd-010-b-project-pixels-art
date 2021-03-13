let chamando = document.querySelectorAll('.color');
let pixelMuda = document.getElementsByClassName('pixel');
let btnLimpar = document.getElementById('clear-board');
let pixelBorder = document.getElementById('pixel-board');
let nPixel = document.getElementById('board-size');
let btnTamanho = document.getElementById('generate-board');
let number = 5;

// Variaveis para criar o rgb aleatoriamente
let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random()*255);
let b = Math.floor(Math.random()*255);


// Cria os Pixels que vão ser coloridos 
function criaPixels() {
  let quadro = document.getElementById('pixel-board');
  for (let j = 0; j < number; j++) {
    let novaLinha =document.createElement('div');    
    for (let i = 0; i < number; i++) {
      let divNova = document.createElement('div');
      divNova.classList.add('pixel');
      novaLinha.appendChild(divNova);
    }
    quadro.appendChild(novaLinha);
  }
}
criaPixels();
// Inicia com a cor preta para preenchimento dos pixels
function corInicial() {
  let corPreta = document.querySelector('.c1');
  corPreta.classList.add('selected');
}
// Função para pegar a cor selecionada
for (let i = 0; i < chamando.length; i++) {
  chamando[i].addEventListener('click', function(){
    let remove = document.getElementsByClassName('selected')[0];
    remove.classList.remove('selected');  
    event.target.classList.add('selected');
  });
}
corInicial();


// Pinta os pixels com a cor selecionada
function invoca() {
for (let i = 0; i < pixelMuda.length; i++) {
  pixelMuda[i].addEventListener('click', function(){
  let corNova = document.getElementsByClassName('selected')[0].style.backgroundColor;
  event.target.style.backgroundColor = corNova;    
  });
}
}
invoca();

// Transforma todos os pixels em branco
btnLimpar.addEventListener('click', function(){
  for (let i = 0; i < pixelMuda.length; i++) {
  pixelMuda[i].style.backgroundColor = 'white';
  }
});

// Altera o tamanho dos pixels conforme o usario decide
btnTamanho.addEventListener('click', function() {
// Verifica se ha um valor no input
  if (nPixel.value == '') {
    alert('Board inválido!');
    nPixel.value = '';  
    nPixel.focus();
// Verifica se o valor no input é menor que 5
  } else if (parseInt(nPixel.value) < 5 ){
    number = 5;
    pixelBorder.innerHTML = '';
    criaPixels();
    invoca();
    nPixel.value = '';
// Verifica se o valor do input é maior que 50
  } else if(parseInt(nPixel.value) > 50){
    number = 50;
    pixelBorder.innerHTML = '';
    criaPixels();
    invoca(); 
    nPixel.value = '';  
    nPixel.focus();
// Se estiver tudo ok a função roda normalmente com o valor descrito no input
  } else {
    number = parseInt(nPixel.value);
    pixelBorder.innerHTML = '';
    criaPixels();
    invoca();
    nPixel.value = '';
    for (let i = 0; i < pixelMuda.length; i++) {
      pixelMuda[i].style.backgroundColor = 'white';
    }
  }
});


// criando cores aleatorias
document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${r},${g},${b})`;
document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${b},${r})`;
document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${g},${r},${g})`;

