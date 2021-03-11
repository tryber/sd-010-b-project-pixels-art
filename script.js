function creatPixelBoard() {
  const pai = document.getElementById('pixel-board');
  const tamanho = document.getElementById('board-size').value;
  let tamanhoTotal = tamanho * tamanho;
  pai.style.width = ((43 * tamanho) + 'px');

  for (let index = 0; index < tamanhoTotal; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    div.id = ('box' + (index + 1));
    pai.appendChild(div);
  }
  escutaClick();
}

function setColor(event) {
  const idBox = event.target.id;
  const idPaleta = document.querySelector('.selected');
  const colorPaleta = window.getComputedStyle(idPaleta, null).backgroundColor;
  document.getElementById(idBox).style.backgroundColor = colorPaleta;
}

function changeSelected(event) {
  const identificador = event.target.id;
  document.getElementById('blackBox').classList.remove('selected');
  document.getElementById('blueBox').classList.remove('selected');
  document.getElementById('pinkBox').classList.remove('selected');
  document.getElementById('redBox').classList.remove('selected');
  document.getElementById(identificador).classList.add('selected');
}

function escutaClick() {
  document.getElementById('blackBox').addEventListener('click', changeSelected);
  document.getElementById('blueBox').addEventListener('click', changeSelected);
  document.getElementById('pinkBox').addEventListener('click', changeSelected);
  document.getElementById('redBox').addEventListener('click', changeSelected);
  const boxes = document.getElementsByClassName('pixel');
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].addEventListener('click', setColor);
  }
}

function clearBoard() {
  const board = document.getElementsByClassName('pixel');
  for (let index = 0; index < board.length; index += 1) {
    board[index].style.backgroundColor = 'white';
  }
}
