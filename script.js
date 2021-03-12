window.onload = function(){
    criarQuadro ()
}


const body = document.body;

const paletteBox = document.createElement('div');

paletteBox.id = 'color-palette';
paletteBox.style.marginTop = '50px';

body.appendChild(paletteBox);

let N = 5;


/*Cria as cores dinâmicamente */
let colors = ['black'];

for (let nColor = 1; nColor < 4; nColor += 1){
    let colorInt = Math.random()*4095;

    for (let n = 0; n < nColor; n += 1){
        if (colorInt == parseInt(colors[n])){
           while (colorInt === parseInt(colors[n])){
                colorInt = Math.random()*4095;
           }
        }
    }
    
    if (colorInt == 4095) colorInt = colorInt - 1;

    colorInt = Math.floor(colorInt)
    let colorHex = Number (colorInt).toString (16)
    if (colorHex.length < 3) colorHex += '0';
    colorHex = '#'+colorHex;

    colors.push (colorHex);
}

/*----------------------Paleta de Cores---------------------------------- */

for (let color = 0; color < colors.length; color += 1) {
    let colorElement = document.createElement ('div');
    
    colorElement.className = color == 0 ? 'color selected': 'color';
    
    colorElement.style.backgroundColor = colors[color];
    console.log (colors[color]);
    paletteBox.appendChild (colorElement);
}

function selected (event) {
    //limpar os selecionados
    let elements = document.querySelectorAll('.color')
    for(let index = 0; index < elements.length; index += 1){
        elements[index].className = 'color';
    }
    event.target.className = 'color selected';
}

paletteBox.addEventListener ('click',selected,false);

/*Criando o Input */

const containerHeader = document.createElement('div');
body.appendChild(containerHeader);

const btn = document.createElement('div');
btn.innerHTML = 'Limpar'
btn.id = 'clear-board';

containerHeader.appendChild (btn);

const entry = document.createElement ('div');

containerHeader.appendChild (entry);


const value = document.createElement ('input');

value.type = "number";
value.min = '1';
value.max = '50';
value.id = 'board-size'

entry.appendChild(value);
entry.id = 'form';

const submit = document.createElement ('button');

entry.appendChild(submit);
submit.innerHTML = 'VQV';
submit.id = 'generate-board'

submit.addEventListener ('click',function(){

    if(value.value == "") {
        alert('Board inválido!');
        return
    }
    killQuadro();

   if (value.value > 50) {
    N = 50;
    value.value = N;
   } 
   else  if (value.value < 5) {
        N = 5;
        value.value = N;
   } 
   else {
    N = value.value;
    value.value = N;

   } 
    criarQuadro ();
    

})

//Criar um botão

btn.addEventListener('click', function(){
    const pixels = document.getElementsByClassName('pixel');

    for(let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'white';
    }

})

let pixelBoard = document.createElement('div');
pixelBoard.id = "pixel-board";
pixelBoard.className = "display-table"

function killQuadro(){
    while(pixelBoard.lastChild != null){
        pixelBoard.removeChild(pixelBoard.lastElementChild)
    }
   
}

//Criando o Quadro de Pixels
function criarQuadro (){
    body.appendChild(pixelBoard);
    pixelBoard.style.boxShadow = '5px 5px grey';
   
    
    for (let linhas = 0; linhas < N; linhas += 1){
        const line = document.createElement('div');
        line.className = 'line'
        pixelBoard.appendChild(line);
    
        for (let colunas = 0; colunas < N; colunas += 1){
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
    
            pixel.style.minWidth = '40px';
            pixel.style.height = '40px';
    
            line.appendChild(pixel);
        }
    }
}

//Lógica para Preenchimento dos pixels

function fillColor(event){
    //Procurar o Selecionado
    const color = document.querySelector('.selected').style.backgroundColor
    event.target.style.backgroundColor = color
}

pixelBoard.addEventListener('click',fillColor,false)


pixelBoard.addEventListener('mouseover',function(event){
    const obj = event.target.style
   
    obj.transform = 'translateX(2px)';
    obj.transform = 'translateY(-2px)';

    obj.width = '40px';
    obj.height = '40px';

    obj.boxShadow = '2px 2px 2px grey';
   
})

pixelBoard.addEventListener('mouseout',function(event){
    const obj = event.target.style
    obj.transform = 'translateX(0px)';
    obj.transform = 'translateY(0px)';

    obj.width = '40px'
    obj.height = '40px'
   
    obj.boxShadow = '0px 0px 0px grey';
    console.log('to aqui')
   

})

