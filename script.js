const cores = ["black" ,"red" ,"blue" ,"green"];
const pixelBoard = document.querySelector("#pixel-board");
const caixa = document.querySelectorAll(".color");
const limpaPixels = document.getElementById("clear-board");
let numeroPaleta = 0;

function criacaoPixels() {
  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('div');
    pixelBoard.appendChild(linha);

    for (let x = 0; x < 5; x += 1) {
      const coluna = document.createElement('div');
      coluna.className = 'pixel';
      linha.appendChild(coluna);
    }
  }
};
criacaoPixels();

function selecaoPixelCor(){
  for(let i = 0; i < caixa.length; i += 1){
    caixa[i].addEventListener("click", function(){
      if(caixa[i].getAttribute("class") === "selected color"){
        numeroPaleta = i;
      }else{
        for(let x = 0; x < caixa.length; x += 1){
          if(caixa[x].getAttribute("class") === "selected color"){
            caixa[x].setAttribute("class", "color");
          }
        }
        caixa[i].setAttribute("class", "selected color");
        numeroPaleta = i;
      }
    });
  }
}
selecaoPixelCor();

function pintarPixels(){
  quadro = document.querySelectorAll(".pixel");
  for(let i = 0; i < quadro.length; i+= 1){
    quadro[i].addEventListener("click", function(){
      quadro[i].style.background = cores[numeroPaleta];
    });
  }
}
pintarPixels();

limpaPixels.addEventListener("click", limparPixels);
function limparPixels() {
  limpar = document.querySelectorAll(".pixel");
  for (let i = 0; i < limpar.length; i++) {
    limpar[i].style.background = "white";
  }
}
