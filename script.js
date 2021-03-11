const pixel = document.getElementById('pixel-board');

function matrix() {
  for (let index = 0; index < 5; index += 1) {
    const square = document.createElement('div');
    pixel.appendChild(square);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const variable = document.createElement('div');
      square.appendChild(variable);
      variable.className = 'pixel';
    }
  }
}
matrix();
// questão resolvida com a ajuda do colega durante grupo de estudos;

function SelectColor() {
  const Colors = document.querySelectorAll('.color');

  for (let index = 0; index < Colors.length; index += 1) {
    Colors[index].addEventListener('click', function () {
      const firstColorSelected = document.getElementsByClassName('selected')[0];
      console.log(firstColorSelected.style);
      firstColorSelected.className = 'color';
      Colors[index].classList.add('selected');
    });
  }
}
SelectColor();
// Esta questão foi resolvida após ver a postagem de uma colega no Slack da Turma 10/Tribo A.

function paintPixel() {
  const boardPaint = document.querySelectorAll('.pixel');
  const ColorPicked = document.querySelectorAll('.color');

  for (let index = 0; index < boardPaint.length; index += 1) {
    boardPaint[index].addEventListener('click', function (){
      const ColorPicked = document.querySelector('.selected');
      const sty = getComputedStyle(ColorPicked);
      const backgroundColor = sty.backgroundColor;
      boardPaint[index].style.backgroundColor = backgroundColor;
    });
  }
}
paintPixel();
