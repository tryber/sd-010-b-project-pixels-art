// Tabela 1
let maeTabela1 = document.getElementById("tabela1");
let paleta = document.createElement("table");
paleta.id = "color-palette";
maeTabela1.appendChild(paleta);

for(index = 0; index < 4; index += 1){
    let criaColuna = document.createElement("td");
    criaColuna.className = "color";
    paleta.appendChild(criaColuna);

}

// Edita tabela 1
let colunaPaleta = document.getElementsByClassName("color");
colunaPaleta[0].style.backgroundColor = "black";
colunaPaleta[0].className = "selected color";
colunaPaleta[1].style.backgroundColor = "green";
colunaPaleta[2].style.backgroundColor = "blue";
colunaPaleta[3].style.backgroundColor = "yellow";
// colunaPaleta[4].style.backgroundColor = "white";

/////////////////////////////////////////////////////////////////////////////////////////

// Tabela 2
let maeBotaoAdd = document.getElementById("botao-add");
let input = document.createElement("input");
input.id = "board-size";
input.type = "number";
input.min = "1";
input.max = "50";
let botaoAdd = document.createElement("button");
botaoAdd.id = "generate-board";
botaoAdd.innerText = "#VQV";
maeBotaoAdd.appendChild(input);
maeBotaoAdd.appendChild(botaoAdd);

let maeTabela2 = document.getElementById("tabela2");
let quadrado = document.createElement("table");
quadrado.id = "pixel-board";
maeTabela2.appendChild(quadrado);


//quantidade de quadrado
for(i = 0;i < 5;i += 1){
    let linhaTabela = document.createElement("tr");
    linhaTabela.className = "linha descendo";

for(j = 0;j < 5;j += 1){
    let criaColuna2 = document.createElement("td");
    criaColuna2.className = "pixel";
    linhaTabela.appendChild(criaColuna2);
    quadrado.appendChild(linhaTabela);
 }
}

//quantidade de quadrado pelo input
  let pegaBotao = document.getElementById("generate-board");
  pegaBotao.addEventListener("click", function () { 
    const corDivPixel = document.querySelector('#pixel-board');
    corDivPixel.innerHTML = '';
    
    let inputInicial = input.value

    if(input.value <= 0){
      alert("Board inválido!"); 
    } else if ( input.value < 5){
      console.log("pita")
      inputInicial = 5;
    } else if (input.value > 50){
      inputInicial = 50;
    } 

    for(i = 0;i < inputInicial;i += 1){
      console.log("xablis")
      let linhaTabela = document.createElement("tr");
      linhaTabela.className = "linha descendo";

    for(j = 0;j < inputInicial;j += 1){
      let criaColuna2 = document.createElement("td");
      criaColuna2.className = "pixel";
      linhaTabela.appendChild(criaColuna2);
      quadrado.appendChild(linhaTabela);
      }
    }

  })



//////////////////////////////////////////////////////////////////////////

// adiciona e remove classe
function clickPaletteBox(event) {
    const pegaSelected = document.querySelector('.selected');
    pegaSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

function addBoxClickEvent() {
    const paleta = document.getElementsByClassName('color');
    for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', clickPaletteBox);
  }
}


window.onload = addBoxClickEvent();
    
/////////////////////////////////////////////////////////////////////////////////////////////

//pinta pixel
  function pinta() {

    const cor = document.querySelectorAll('.pixel');// aqui está o B.O
    console.log(cor);
    
    for (let index = 0; index < cor.length; index += 1) {
      console.log("ola")
        cor[index].addEventListener('click', function (event)  {
        // const element = event;
        const corSelecionada = document.querySelector('.selected').style.backgroundColor;
        event.target.style.backgroundColor = corSelecionada;
      }) 
    }
  }
  pinta();
  const botaoo = document.getElementById("generate-board");
  botaoo.addEventListener('click', pinta);


let maeBotao = document.getElementById("botao-add");
let botaoLimpa = document.createElement("button");
botaoLimpa.id = "clear-board";
botaoLimpa.innerText = "Limpar";
maeBotao.appendChild(botaoLimpa);


botaoLimpa.addEventListener("click", function () {
  let pegaQuadro = document.querySelectorAll(".pixel");
  for  (let index = 0; index < pegaQuadro.length; index += 1){ 
    pegaQuadro[index].style.backgroundColor = "white";
  }
});

function corAleatoria() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
  document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
  document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${r},${b},${g})`;
}
corAleatoria();