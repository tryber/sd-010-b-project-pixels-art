window.onload = function(){
    selecionarAoClicar();
    clickToPaint();
}

let cores = document.createElement('table')
cores.id = 'color-palette'
document.body.appendChild(cores)

for (i = 0; i < 4; i += 1){
let paletaDasCores = document.createElement('td')
    paletaDasCores.className = 'color'
    cores.appendChild(paletaDasCores);
}



resetButton()

let paleta = document.getElementsByClassName('color')
let black = paleta[0];
let green = paleta[1];
let red = paleta[2];
let blue = paleta[3];

black.classList.add ('selected')

black.style.backgroundColor = 'black'
green.style.backgroundColor = 'green'
red.style.backgroundColor = 'red'
blue.style.backgroundColor = 'blue'

let pixelBoard = document.createElement('table')
pixelBoard.id = 'pixel-board'
document.body.appendChild(pixelBoard)


for (let i = 0; i < 5; i += 1){
    let primeiraLinha = document.createElement('tr')
    pixelBoard.appendChild(primeiraLinha)
}

let linhas = document.querySelectorAll('#pixel-board tr')

for (let i = 0; i < linhas.length; i += 1){
    for (let index = 0; index < linhas.length; index += 1){
     let celulaColuna = document.createElement('td');
     celulaColuna.className = 'pixel';
     celulaColuna.style.backgroundColor = 'white';
     linhas[i].appendChild(celulaColuna);
    }
}


function selecionarAoClicar(){
    for (let i = 0; i < paleta.length; i += 1){
        paleta[i].addEventListener('click', changeClass)
    }
        function changeClass (){
            for (let i = 0; i < paleta.length; i += 1){
                paleta[i].classList.remove('selected')
            }
            this.classList.add('selected')
        }
}

let pixels = document.getElementsByClassName('pixel');
 
function clickToPaint(){
        for(let i = 0; i < pixels.length; i += 1){
        pixels[i].addEventListener('click', pintar)
    }
    function pintar(){
        if (black.className === 'color selected'){
                this.style.backgroundColor = 'black'
         } else 
            if (green.className === 'color selected'){
                this.style.backgroundColor = 'green'
            } else 
                if (red.className === 'color selected'){
                    this.style.backgroundColor = 'red'
                } else
                    if (blue.className === 'color selected'){
                        this.style.backgroundColor = 'blue'
                    }
        }
}


function resetButton(){
    let botao = document.createElement('button')
        botao.id = 'clear-board'
        botao.innerHTML = 'Limpar'
        document.body.appendChild(botao)
        botao.addEventListener('click', resetPixel)
    function resetPixel(){
        for (let i = 0; i < pixels.length; i += 1){
            pixels[i].style.backgroundColor = 'white';
        }
    }
}

