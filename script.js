
function mudandoacorpreto() {
  let preto = document.getElementById("preto");
  preto.style.backgroundColor = "black";
}
mudandoacorpreto();

function mudandoacorosa() {
  let rosa = document.getElementById("rosa");
  rosa.style.backgroundColor = "#F47CC4";
}
mudandoacorosa();

function mudandoacorverdea() {
  let verdea = document.getElementById("verdeagua");
  verdea.style.backgroundColor = "#6fffe9";
}
mudandoacorverdea();

function mudandoacoroxa() {
  let roxo = document.getElementById("roxo");
  roxo.style.backgroundColor = "#9B5DE5";
}
mudandoacoroxa(); 

function selecionandocores (){
  let cores = document.querySelector("#color-palette")
 let pretoselecao= document.querySelector("#preto")
 pretoselecao.classList.add("selected")
  cores.addEventListener("click", function(event){
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add("selected")
  })

}selecionandocores()

function mudandoDeCor() {
 let pixels = document.querySelectorAll(".pixel")
for (index = 0; index<pixels.length; index++){
 let quadro = pixels[index];
    quadro.addEventListener("click", function(e) {
    let corselecionada= document.querySelector(".selected");
    let cor = corselecionada.style.backgroundColor
    e.target.style.backgroundColor = cor;

  })
}
} 
mudandoDeCor()
function botaolimpar(){
  let btlimpar=document.querySelector("#clear-board")
  btlimpar.addEventListener("click", function(){
    let pixels = document.querySelectorAll(".pixel")

    for (index = 0; index<pixels.length; index++){
    pixels[index].style.backgroundColor="rgb(255, 255, 255)"
    }
  })
}botaolimpar()