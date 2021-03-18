let clickb = document.getElementById("color-palette");
clickb.addEventListener("click", recebeclick);
let clicka = document.getElementById("pixel-board");
clicka.addEventListener("click", paletaclick);


function recebeclick(eventodeorigem) {

    let botaoClicado = eventodeorigem.target;
    let classe = document.querySelectorAll(".caixa");
for(let index = 0; index < classe.length; index +=1) {
let corClicada = classe[index];

if (corClicada != botaoClicado){
corClicada.className = "caixa color";
}

else {
    corClicada.className = "caixa color selected";
}
}
}

//pintando o quadro
function paletaclick(eventodedestino) {
let botaopaleta = eventodedestino.target;
let verselected = document.querySelector(".selected");
if (verselected.id == "firstbox") {
    botaopaleta.style.backgroundColor = "black";
}
else if (verselected.id == "secondbox") {
    botaopaleta.style.backgroundColor = "red";
}
else if (verselected.id == "thirdbox") {
    botaopaleta.style.backgroundColor = "blue";
    }
    else if (verselected.id == "fourthbox"){
        botaopaleta.style.backgroundColor = "green";
    }

}






let button = document.getElementById('clear-board');
button.addEventListener("click", pintarBranco);

function pintarBranco() {
    let classe = document.querySelectorAll(".colorpixel");
    for(let index = 0; index < classe.length; index +=1) {
    classe[index].style.backgroundColor = "white";
    console.log (classe);
    }

}
    


