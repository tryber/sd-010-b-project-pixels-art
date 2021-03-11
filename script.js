//Requisito 2 e 3
function adicionaPaletaCores (){
    let paletaPai = document.getElementById("color-palette");
    for (let i = 0; i < 4; i += 1){
        let paletaFilho = document.createElement("div");
        paletaFilho.className = "color";
        paletaPai.appendChild(paletaFilho);
    }
}
adicionaPaletaCores();

function adicionaCores (arrayCores){
let divs = document.querySelectorAll(".color")
    for (let i = 0; i < divs.length; i += 1){
        divs[i].style.backgroundColor = arrayCores[i];
        divs[i].id = arrayCores[i];
    }
}

adicionaCores(["black", "red", "blue", "green"]);

// Requisito 4
function adicionaQuadroPixels (tr){
    let trPai = document.getElementById(tr)
    for (let i = 0; i < 5; i += 1){
        let tdFilho = document.createElement("td");
        tdFilho.className = "pixel";
        trPai.appendChild(tdFilho);
    }
}
adicionaQuadroPixels("linha-1");
adicionaQuadroPixels("linha-2");
adicionaQuadroPixels("linha-3");
adicionaQuadroPixels("linha-4");
adicionaQuadroPixels("linha-5");

//Requisito 6
window.onload = function (){
    let colors = document.querySelectorAll(".pixel");
    let colorRed = document.getElementById("red").addEventListener("click", adicionaColorRed);
    function adicionaColorRed (){
        let selecionaClass = document.querySelectorAll(".color");
        for (let i = 0; i < selecionaClass.length; i += 1){
            if (selecionaClass[i].style.backgroundColor == "red"){
                selecionaClass[i].className="color selected";
            }else {
                selecionaClass[i].className="color";
            }
        }
        for (let i = 0; i <colors.length; i += 1){
            colors[i].addEventListener("click", function(){
                if (colors[i].style.backgroundColor != "red"){
                    colors[i].style.backgroundColor = "red";
                }
            })
        }
    };
    adicionaColorRed();

    let colorBlue = document.getElementById("blue").addEventListener("click", adicionaColorBlue);
    function adicionaColorBlue (){
        let selecionaClass = document.querySelectorAll(".color");
        for (let i = 0; i < selecionaClass.length; i += 1){
            if (selecionaClass[i].style.backgroundColor == "blue"){
                selecionaClass[i].className="color selected";
            }else {
                selecionaClass[i].className="color";
            }
        }
        for (let i = 0; i <colors.length; i += 1){
            colors[i].addEventListener("click", function(){
                if (colors[i].style.backgroundColor != "blue"){
                    colors[i].style.backgroundColor = "blue";
                }
            })
        }
    };
    adicionaColorBlue();

    let colorGreen = document.getElementById("green").addEventListener("click", adicionaColorGreen);
    function adicionaColorGreen (){
        let selecionaClass = document.querySelectorAll(".color");
        for (let i = 0; i < selecionaClass.length; i += 1){
            if (selecionaClass[i].style.backgroundColor == "green"){
                selecionaClass[i].className="color selected";
            }else {
                selecionaClass[i].className="color";
            }
        }
        for (let i = 0; i <colors.length; i += 1){
            colors[i].addEventListener("click", function(){
                if (colors[i].style.backgroundColor != "green"){
                    colors[i].style.backgroundColor = "green";
                }
            })
        }
    };
    adicionaColorGreen();

    function criaBotaoLimpar (){
        let paletaPai = document.getElementById("pai-button");
        let botaoFilho = document.createElement("button");
        botaoFilho.innerHTML = "Limpar";
        botaoFilho.id = "clear-board";
    
        paletaPai.appendChild(botaoFilho);
    
        let paletaLimpar = document.getElementById("clear-board").addEventListener("click", function(){
            for (let i = 0; i < colors.length; i += 1){
                if (colors[i].style.backgroundColor != "white"){
                    colors[i].style.backgroundColor = "White";
                }
            }
        })
    
    };
    criaBotaoLimpar();


    let colorBlack = document.getElementById("black").addEventListener("click", adicionaColorBlack);
    function adicionaColorBlack (){
        let selecionaClass = document.querySelectorAll(".color");
        for (let i = 0; i < selecionaClass.length; i += 1){
            if (selecionaClass[i].style.backgroundColor == "black"){
                selecionaClass[i].className="color selected";
            }else {
                selecionaClass[i].className="color";
            }
        }
        let adicionaClass = document.getElementById("black").className ="color selected";
        for (let i = 0; i <colors.length; i += 1){
            colors[i].addEventListener("click", function(){
                if (colors[i].style.backgroundColor != "black"){
                    colors[i].style.backgroundColor = "black";
                }
            })
        }
    };
    adicionaColorBlack();
    
}








  