const box2 = document.getElementById('color2');
const box3 = document.getElementById('color3');
const box4 = document.getElementById('color4');


function selectColor(event) {
  const elementSelecionado = document.querySelector('.selected');
  elementSelecionado.classList.remove('selected');
  event.target.classList.add('selected');
}

box2.addEventListener('click', selectColor);
box3.addEventListener('click', selectColor);
box4.addEventListener('click', selectColor);

// Função para pintar os Pixels
function colorPixel() {
  const pixel = document.getElementsByClassName('pixel')
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function () {
      let selectedColor = document.querySelector('.selected')
      pixel[index].style.backgroundColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
    })
  }
}
colorPixel();

// Botão Limpar Pixels
function buttonClear() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function () {
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = "";
    }
  })
}
buttonClear();
