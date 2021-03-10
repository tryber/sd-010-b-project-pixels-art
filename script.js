
function createDivpixel(){
  let quant = 25
  let divContainer = document.querySelector('#pixel-board');

  for (let i = 0; i < quant; i += 1){
    let divs = document.createElement('div');
    divs.className = 'pixel'
    divContainer.appendChild(divs);
    divs.addEventListener('click', function(event){
    event.target.style.backgroundColor = currentColor;})

  }
}
createDivpixel()
let currentColor ='black';


function selectedPaletaCores(){
  let colorSelection = document.querySelector('#color-palette ');

  colorSelection.addEventListener('click', function(event){
  let colorSelected = '';
  colorSelected = event.target.className;
  colorSelected = colorSelected.replace(/color/gi,'');
  colorSelected = colorSelected.replace(/selected/gi,'');
  let format = colorSelected + '';
  currentColor = format;
  console.log(colorSelected);
  let atualCollor = document.querySelector('.selected');
    if(atualCollor){
      atualCollor.classList.remove('selected');
    }
    event.target.classList.add('selected');
  })
}
selectedPaletaCores();

function cleanBoard() {
  const boton =document.querySelector('#clear-board');
  boton.addEventListener('click', function(event){
    const cleanPixel= document.getElementsByClassName('pixel');
    for(let index =0; index < cleanPixel.length; index+=1){
      let capture = cleanPixel[index];
      capture.style.backgroundColor = 'white';
    }
  })
}
cleanBoard();














// function rgb(){
//   const r = Math.ceil(Math.random() * 255);
//   const g = Math.ceil(Math.random() * 255);
//   const b = Math.ceil(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`;
// }



