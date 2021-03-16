const sizeButton = document.getElementById('generate-board');
let userText = 5;
sizeButton.addEventListener('click', function () {
  userText = document.getElementById('board-size').value;
  if (userText === '') {
    alert('Board inválido!');
  }
  if (userText <= 5) {
    document.getElementById('pixel-board').innerHTML = ''; //contei com Fernanda Porto - T10B para me explicar como fazer apagar a tabela existente e colocar a nova redimensionada
    tableMaker(5);
  }
  if (userText > 5 && userText <= 50) {
    document.getElementById('pixel-board').innerHTML = '';
    tableMaker(userText);
  }
  if (userText > 50) {
    document.getElementById('pixel-board').innerHTML = '';
    tableMaker(50);
  }
  selection();
  colorAcquire();
})

//criando a tabela com disponibilidade para alteração de userText
function tableMaker(userText) {
  const tabela = document.querySelector("#pixel-board")//chamada tabela
  for (let index = 1; index <= userText; index += 1) {
    let linha = document.createElement('tr');
    for (let index2 = 1; index2 <= userText; index2 += 1) {
      let pixel = document.createElement('td');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
    linha.className = 'line';
    tabela.appendChild(linha);
  }
}
tableMaker(userText);

let backButton = document.getElementById('clear-board');
backButton.addEventListener('click', resetButton);

function resetButton() {
  const clear = document.querySelectorAll('.pixel');
  for (let index = 0; index < clear.length; index += 1) {
    clear[index].style.backgroundColor = 'white';
  }
}

let listCollors = document.querySelectorAll('.color');
let black = document.querySelector('.color');
black.classList.add('selected');
let fullColors = document.getElementsByClassName('pixel');
let selectedColor = document.getElementsByClassName('selected');

//para a função de pegar cor e repassar para o pixel contei com a aula/ajuda de Luiz Paulo 'LP' T10B para entender sobre addEventlistener e seu acompanhamento para a elaboração das funções
function selection() {
  for (let index = 0; index < listCollors.length; index += 1) {
    listCollors[index].addEventListener('click', changeClass);
  }
}
selection();

function changeClass(styleClass) {
  for (let index = 0; index < listCollors.length; index += 1) {
    if (listCollors[index].classList.contains('selected')) {
      listCollors[index].classList.remove('selected');
    }
  }
  styleClass.target.classList.add('selected');
}

function colorAcquire() {
  for (let index = 0; index < fullColors.length; index += 1) {
    fullColors[index].addEventListener('click', colorSelector);
  }
}
colorAcquire();

function colorSelector(clickar) {
  clickar.target.style.backgroundColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
}

//função retirada do site https://stackoverflow.com/questions/1484506/random-color-generator e editada para incorporar ao código

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomColors() {
  for (let index = 1; index < listCollors.length; index += 1) {
    listCollors[index].style.backgroundColor = getRandomColor();
  }
}
randomColors();