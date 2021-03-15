// exercicio 4
function criarPixel() {
  let encontraPixelBoard = document.getElementById('pixel-board');
  encontraPixelBoard.innerText = '';
  let valorDigitado = document.getElementById('board-size').value
  if(valorDigitado >= 5 && valorDigitado <= 50){
    console.log('entrou no if');
    criarPrimeiraVez(valorDigitado);
  }
  else if(valorDigitado == 0){
    console.log("entrou no 0")
    alert("Board inválido!")
    criarPrimeiraVez(5);
  }
  else if (valorDigitado < 5) {
    console.log("entrou no 5")
    valorDigitado = 5;
    criarPrimeiraVez(valorDigitado);
  }
  else if (valorDigitado > 50){
    console.log("entrou no 50")
    valorDigitado = 50;
    criarPrimeiraVez(valorDigitado);
  }
  else if(valorDigitado == 0){
    console.log("entrou no 0")
    alert("Board inválido!")
  }
}
function criarPrimeiraVez(valor) {
  const encotraQuadro = document.getElementById('pixel-board');
  for (let colona = 0; colona < valor; colona+=1) {
    for (let linha = 0; linha < valor; linha+=1) {
      const criarDiv = document.createElement('div');
      criarDiv.classList.add('pixel');
      criarDiv.style.backgroundColor = 'white';
      encotraQuadro.appendChild(criarDiv);
    }
    const criaBr = document.createElement('br');
    encotraQuadro.appendChild(criaBr);
  }
}
window.onload = criarPrimeiraVez(5);
window.onload = selecionaPreto();

function selecionaPreto() {
  const encontraPreto = document.getElementsByClassName('color')[0];
  encontraPreto.classList.add('selected');
  pintarOQuadro('black');
}
function pintarQuadrado(cor) {
  const encontraSelected = document.getElementsByClassName('selected')[0];
  encontraSelected.classList.remove('selected');
  if (cor === 'blue') {
    const encontraDiv2 = document.getElementsByClassName('div2')[0];
    encontraDiv2.classList.add('selected');
  } else if (cor === 'black') {
    const encontraDiv1 = document.getElementsByClassName('div1')[0];
    encontraDiv1.classList.add('selected');
  } else if (cor === 'brown') {
    const encontraDiv3 = document.getElementsByClassName('div3')[0];
    encontraDiv3.classList.add('selected');
  } else if (cor === 'cadetblue') {
    const encontraDiv4 = document.getElementsByClassName("div4")[0];
    encontraDiv4.classList.add('selected');
  }
  pintarOQuadro(cor);
}
function pintarOQuadro(cor) {
  const encontraPixel = document.querySelectorAll('.pixel');
  encontraPixel.forEach((element) => {
    element.addEventListener('click', (event) => {
    event.target.style.backgroundColor = cor ;
    });
    });
}
function limpar() {
  const encontraPixel2 = document.querySelectorAll('.pixel');
  encontraPixel2[0].style.backgroundColor = 'white';
  encontraPixel2[1].style.backgroundColor = 'white';
  encontraPixel2[2].style.backgroundColor = 'white';
  encontraPixel2[3].style.backgroundColor = 'white';
  encontraPixel2[4].style.backgroundColor = 'white';
  encontraPixel2[5].style.backgroundColor = 'white';
  encontraPixel2[6].style.backgroundColor = 'white';
  encontraPixel2[7].style.backgroundColor = 'white';
  encontraPixel2[8].style.backgroundColor = 'white';
  encontraPixel2[9].style.backgroundColor = 'white';
  encontraPixel2[10].style.backgroundColor = 'white';
  encontraPixel2[11].style.backgroundColor = 'white';
  encontraPixel2[12].style.backgroundColor = 'white';
  encontraPixel2[13].style.backgroundColor = 'white';
  encontraPixel2[14].style.backgroundColor = 'white';
  encontraPixel2[15].style.backgroundColor = 'white';
  encontraPixel2[16].style.backgroundColor = 'white';
  encontraPixel2[17].style.backgroundColor = 'white';
  encontraPixel2[18].style.backgroundColor = 'white';
  encontraPixel2[19].style.backgroundColor = 'white';
  encontraPixel2[20].style.backgroundColor = 'white';
  encontraPixel2[21].style.backgroundColor = 'white';
  encontraPixel2[22].style.backgroundColor = 'white';
  encontraPixel2[23].style.backgroundColor = 'white';
  encontraPixel2[24].style.backgroundColor = 'white';
}