window.onload = function (){


function addPaleta (){
    let ul = document.querySelector('#color-palette');
    let cores = ['black'];
    for(index = 0; index < 3; index++){
        let c = 'rgb(';
        for(let i = 0; i < 3; i++){
        let rnd1 = Math.ceil(Math.random()*260);
        c += rnd1;
        if(i < 2){
            c += ',';
        }
        }
        c += ')';
        cores.push(c);
    }
    for(let i = 0; i < cores.length; i++){
        let li = document.createElement('li');
        li.className = 'color';
        li.style.backgroundColor = cores[i];
        ul.appendChild(li);
    }
}
addPaleta();

function addGrid(side) {
    let table = document.querySelector('#pixel-board');
    let lado = side;
    console.log(lado);
    for(let i = 0; i < lado; i++){
        let tr = document.createElement('div');
        tr.className = 'table-row';
        table.appendChild(tr);
        for(let i2 = 0; i2 < lado; i2++){
            let px = document.createElement('div');
            px.className = 'pixel';
            px.style.backgroundColor = "white";
            tr.appendChild(px);
        }
    }
addEventListener();
}
let side = 5;
addGrid(side);

function rmvGrid() {
    let table = document.querySelector('#pixel-board');

    let n = document.querySelectorAll('.table-row').length;
    while (table.firstChild) {
        table.removeChild(table.lastChild);
      }
//source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
}

//add primeira classe 'selected'
let selectedClass = document.querySelector('.color');
selectedClass.classList.add('selected');

//add event listener para todas as classes 'color'
let select = document.getElementsByClassName('color');
for(let i = 0; i < select.length; i++){
    select[i].addEventListener("click", colorSelect, selectedClass);  
    }

function rmvClass(selectedClass){
    selectedClass.classList.remove('selected');
}


function colorSelect(elementoEvento, Class){
    rmvClass(selectedClass);
    selectedClass = elementoEvento.target;
    selectedClass.classList.add('selected');
    }


function addEventListener (){
    let selectPixel = document.getElementsByClassName('pixel');
    for(let i = 0; i < selectPixel.length; i++){
        selectPixel[i].addEventListener("click", pintar);  
        }

    function pintar(elementoEmQuestao){
        let cor = document.querySelector('.selected').style.backgroundColor;
        elementoEmQuestao.srcElement.style.backgroundColor = cor;
        console.log(cor);
        }
}

//add event listener LIMPAR
let limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', limparFunction);

function limparFunction(){
    let pixels = document.querySelectorAll('.pixel');
    pixelColor = 'white';
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = "white";
    }
}


//add event listener VQV
let vqv = document.querySelector('#generate-board');
vqv.addEventListener('click', genBoard);

function genBoard(){
let bor = document.querySelector('input').value;
if((bor) == ''){
    alert('Board inválido!')
}else{
    if(bor < 5){bor = 5}
    if(bor > 50){bor = 50}
rmvGrid();
addGrid(bor);
}
}

}//window.onload close

