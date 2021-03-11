let color = ['black', 'red', 'blue', 'green'];
const trocarCor = document.querySelector('#color-palette');
function palette() {
  for (let index = 0; index < color.length; index += 1) {
    let colorGround = color[index];
    let paletteItem = document.createElement('div');
    paletteItem.className = 'color';
    paletteItem.style.backgroundColor = colorGround;
    trocarCor.appendChild(paletteItem);
  }
}
function quadrado() {
  const pixelsBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    let pixelcreate = document.createElement('div');
    pixelcreate.className = 'pixel';
    pixelsBoard.appendChild(pixelcreate);
  }
}
function corInicial() {
  let cores = document.querySelectorAll('.color')[0];
  cores.classList.add('selected');
}
function trocar () {
  let trocarCor = document.querySelectorAll('.color');
  trocarCor[0].addEventListener('click', function() {
    trocarCor[0].classList.add('selected');
    trocarCor[1].classList.remove('selected');
    trocarCor[2].classList.remove('selected');
    trocarCor[3].classList.remove('selected');
  });
  trocarCor[1].addEventListener('click', function() {
    trocarCor[1].classList.add('selected');
    trocarCor[0].classList.remove('selected');
    trocarCor[2].classList.remove('selected');
    trocarCor[3].classList.remove('selected');
  });
  trocarCor[2].addEventListener('click', function() {
    trocarCor[2].classList.add('selected');
    trocarCor[0].classList.remove('selected');
    trocarCor[1].classList.remove('selected');
    trocarCor[3].classList.remove('selected');
  });
  trocarCor[3].addEventListener('click', function() {
    trocarCor[3].classList.add('selected');
    trocarCor[0].classList.remove('selected');
    trocarCor[1].classList.remove('selected');
    trocarCor[2].classList.remove('selected');
  });
}
// function trocar(){
//   Let pexels = document.querySelectorAll(“.pixel”)
//   For (let i = 0; i < pexels.length; i += 1){
//     pexels[i].addEventListener(“click”, function(){
//     })
//   }
// }
function applySelectedColor() {
  const pixelItem = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelItem.length; i += 1) {
    pixelItem[i].addEventListener('click', (evento) => {
      const { target } = evento;
      target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}
function white() {
  const clear = document.getElementById("clear-board");
  clear.addEventListener("click", evento => {
  const pixelItem= document.querySelectorAll('.pixel');
  for(let i = 0; i < pixelItem.length; i++){
    pixelItem[i].style.backgroundColor = 'white';
  }
});
}
window.onload = function () {
  palette();
  quadrado();
  corInicial();
  trocar();
  applySelectedColor();
  white();
}