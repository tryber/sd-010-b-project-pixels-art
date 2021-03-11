//Cria a tabela de paleta de cores
let paletaDeCores = document.createElement("table");
paletaDeCores.id = "color-palette"
document.body.appendChild(paletaDeCores);

//Cria a célula para cada uma das cores selecionaveis
for (i=0; i<4; i++) {
    let coresDaPaleta = document.createElement("td");
    coresDaPaleta.className = "color";
    paletaDeCores.appendChild(coresDaPaleta);
}

//Determina as cores que fazem parte da paleta
let coresDaPaleta = document.getElementsByClassName("color");
let black = coresDaPaleta[0];
let purple = coresDaPaleta[1];
let pink = coresDaPaleta[2];
let magenta = coresDaPaleta[3];

black.classList.add("selected");

black.style.backgroundColor = "black";
purple.style.backgroundColor = "purple";
pink.style.backgroundColor = "pink";
magenta.style.backgroundColor = "magenta";

//Cria o botão que limpa todos os pixels
let button = document.createElement("button");
button.innerHTML = "Limpar"
button.id = "clear-board";
document.body.appendChild(button)
button.style.padding = "auto";
button.style.marginLeft = "98px"
button.addEventListener("click", limpaQuadro);


function limpaQuadro() {
    for (i=0; i<pixels.length; i++) {
        pixels[i].style.backgroundColor = "white";
    }
}

//Cria o quadro onde iremos pintar
let quadroDePixels = document.createElement("table");
quadroDePixels.id = "pixel-board";
document.body.appendChild(quadroDePixels);

//Cria cada uma das células a serem pintadas
for (i=0; i<5; i++) {
    let tr = document.createElement("tr");
    quadroDePixels.appendChild(tr);
}

let linhasTabela = document.querySelectorAll("#pixel-board tr");
for (i=0; i<linhasTabela.length; i++) {
    for (j=0; j<linhasTabela.length; j++) {
        let cedulasTabela = document.createElement("td");
        cedulasTabela.className = "pixel"
        cedulasTabela.style.backgroundColor = "white";
        linhasTabela[i].appendChild(cedulasTabela);
    }
}

//Adiciona a classe "selected" para a cor clicada e retira das demais
for (i=0; i<coresDaPaleta.length; i++) {
    coresDaPaleta[i].addEventListener("click", selecionaCor)
}

function selecionaCor() {
    for (i=0; i<coresDaPaleta.length; i++) {
        coresDaPaleta[i].classList.remove("selected")
    }
    this.classList.add("selected");
}

//Determina que, ao ser clicado, o pixel é colorido com a cor da classe selected
let pixels = document.getElementsByClassName("pixel");
for (i=0; i<pixels.length; i++){
    pixels[i].addEventListener("click", pintaPixel);
}

function pintaPixel() {
    if (black.className == "color selected") {
        this.style.backgroundColor = "black";
    } else if (purple.className == "color selected") {
        this.style.backgroundColor = "purple";
    } else if (pink.className == "color selected") {
        this.style.backgroundColor = "pink";
    } else if (magenta.className == "color selected") {
        this.style.backgroundColor = "magenta";
    } 
}