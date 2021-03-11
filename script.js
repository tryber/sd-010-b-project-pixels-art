//Criando uma função que escolhe a cor

function gerar_cor_hexadecimal()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

firstBoxColor = document.querySelector('.color');

firstBoxColor.style.backgroundColor = 'black';
firstBoxColor.nextElementSibling.style.backgroundColor = gerar_cor_hexadecimal();
firstBoxColor.nextElementSibling.nextElementSibling.style.backgroundColor = gerar_cor_hexadecimal();
firstBoxColor.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = gerar_cor_hexadecimal();
// Pegando os elementos de depois

// Colocando as cores na paleta de cores --> Amazon App

let amazonButton = document.querySelector("#amazon-app");
amazonButton.addEventListener("click", function(){
    firstBoxColor.nextElementSibling.style.backgroundColor = '#CEA968';
    firstBoxColor.nextElementSibling.nextElementSibling.style.backgroundColor = '#E4C083';
    firstBoxColor.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = '#08AAE3';
});

// Pegando os elementos de depois 

//Criando um quadro de pixels dinamicamente
const inputNumber = document.querySelector("#board-size")
let count = 1;

function buildBoard(){
   

    if(inputNumber.value == '' ){
        if(count !== 1){
            alert("Board inválido!");
        }
        lines = 5;
        columns = 5;
        count += 1;
    }
    else if(inputNumber.value >= 5 && inputNumber.value <= 50){
        lines = inputNumber.value;
        columns = inputNumber.value;   
    }
    else if(inputNumber.value < 5){
        lines = 5;
        columns = 5; 
    }
    else{
        lines = 50;
        columns = 50;
    }

    if(document.querySelector('#pixel-board') !== null){
        document.querySelector('#pixel-board').remove();
        divTable = document.createElement('div');
        divTable.id = 'pixel-board';
    }    
    else{
        divTable = document.createElement('div');
        divTable.id = 'pixel-board';
    }

    document.body.appendChild(divTable);

    for(let index = 0; index < lines; index +=1){
        divTr = document.createElement('div');
        divTr.className = 'tr';
        divTable.appendChild(divTr);
        for(let index = 0; index < columns; index +=1){
            divBox = document.createElement('div');
            divBox.className = 'pixel';
            divBox.style.backgroundColor = 'rgb(255, 255, 255)';
            divTr.appendChild(divBox);
        }
    }


    // console.log(document.querySelector('.color').className)
    let pixelArray = document.querySelectorAll(".pixel");

    for (let i = 0; i < pixelArray.length; i += 1) {
        pixelArray[i].addEventListener("click", function(event) {
            let selectedColor = document.querySelector(".color.selected")
            event.target.style.backgroundColor = selectedColor.style.backgroundColor;
        }) 
    }

    let clearButton = document.querySelector("#clear-board");
    clearButton.addEventListener("click", function(event) {
        for (let i = 0; i < pixelArray.length; i += 1) {
            pixelArray[i].style.backgroundColor = 'white';
            
        } 
    })

    }


    let colorArray = document.querySelectorAll(".color")
        for (let i = 0; i < colorArray.length; i += 1) {
            colorArray[i].addEventListener("click", function(event) {
                for (let j = 0; j < colorArray.length; j += 1){
                    colorArray[j].className = 'color';
                }
                event.target.className = 'color selected';
            }) 
    }

buildBoard();

let generateButton = document.querySelector("#generate-board");
generateButton.addEventListener("click", buildBoard);
