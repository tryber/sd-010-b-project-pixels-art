let paleta = document.createElement("table");
paleta.id = "color-palette";
document.body.appendChild(paleta);

for(i=0; i<4; i++){
    let criaCelula = document.createElement("td");
    criaCelula.className = "color";
    paleta.appendChild(criaCelula);
}

celulaPaleta = document.getElementsByClassName("color");
celulaPaleta[0].style.backgroundColor = "black";
celulaPaleta[1].style.backgroundColor = "saddlebrown";
celulaPaleta[2].style.backgroundColor = "papayawhip";
celulaPaleta[3].style.backgroundColor = "lightblue";

let celula1 = celulaPaleta[0];
let celula2 = celulaPaleta[1];
let celula3 = celulaPaleta[2];
let celula4 = celulaPaleta[3];


window.addEventListener("load", selectSelected)

function selectSelected(){
    celulaPaleta[0].classList.add("selected")
}

for(i=0;i<celulaPaleta.length;i++){
    celulaPaleta[i].addEventListener("click", reatribuiClassSelected)
}

function reatribuiClassSelected(){
    celulaPaleta[0].classList.remove("selected")
    celulaPaleta[1].classList.remove("selected")
    celulaPaleta[2].classList.remove("selected")
    celulaPaleta[3].classList.remove("selected")
    this.classList.add("selected")
}

let botaoReset = document.createElement("button");
botaoReset.innerHTML = "Limpar"
botaoReset.id = "clear-board";
document.body.appendChild(botaoReset)
botaoReset.addEventListener("click", resetaQuadro)

let auxClearPixels = document.getElementsByClassName("pixel");
console.log(auxClearPixels)

function resetaQuadro(){
    for(p=0;p<auxClearPixels.length;p++){
        auxClearPixels[p].style.backgroundColor = "white"
    }
}



let quadro = document.createElement("table");
quadro.id = "pixel-board";
document.body.appendChild(quadro);

for(j=0;j<5;j++){
    let linhaTabela = document.createElement("tr");
for(k=0;k<5;k++){
    let criaCelulaQuadro = document.createElement("td");
    criaCelulaQuadro.className = "pixel";
    linhaTabela.appendChild(criaCelulaQuadro);
    quadro.appendChild(linhaTabela);
}
}


let celulaQuadro = document.getElementsByClassName("pixel");

for(m=0;m<celulaQuadro.length;m++){
    celulaQuadro[m].addEventListener("click", pintaPaleta)
}

function pintaPaleta(){
    if(celula1.className == "color selected"){
        this.style.backgroundColor="black";
    } else if (celula2.className == "color selected"){
        this.style.backgroundColor="saddlebrown";
    } else if (celula3.className == "color selected"){
        this.style.backgroundColor="papayawhip";
    } else if (celula4.className == "color selected"){
        this.style.backgroundColor="lightblue";
    }
}