const table = document.getElementById('color-palette');
const pixel = document.getElementById('pixel-board');

function structureTable() {
  const line1 = document.createElement('tr');
  line1.className = 'palette';
  table.appendChild(line1);
  for (let columns = 0; columns < 4; columns += 1) {
    const column = document.createElement('td');
    column.className = 'color';
    line1.appendChild(column);
  }
} structureTable();
const column = document.querySelectorAll('.color');
function styleTable() {
  for (let index = 0;index < column.length;index += 1){
    column[0].style.backgroundColor = 'black';
    column[1].style.backgroundColor = 'green';
    column[2].style.backgroundColor = 'red';
    column[3].style.backgroundColor = 'blue';
  }
} styleTable();
function blackSelect() {
  column[0].classList.add('selected');
} blackSelect();
document.addEventListener('click', (event) => {
  const selected = document.querySelector(".selected");
  const evento = event.target;
  if(evento.classList.contains('color') && !event.target.classList.contains(".selected")){
    selected.className = "color";
    evento.classList.add('selected');
  }
  if(evento.classList.contains('pixel')){
    evento.style.backgroundColor = selected.style.backgroundColor;
  }
});
const btnReset = document.querySelector("#clear-board");
const generateSize = document.getElementById('board-size');
const btnRandom = document.getElementById('generate-board');
btnRandom.innerHTML = 'VQV';
function generate () {
  generateSize.value = 5;
} generate();
function pixelStructure(valor) {
  for (let lines = 0; lines < valor; lines += 1) {
    const pixelLine = document.createElement('tr');
    pixelLine.className = 'pixelLine';
    pixel.appendChild(pixelLine);
    for (let columns = 0; columns < valor; columns += 1) {
      const column1 = document.createElement('td');
      column1.className = 'pixel';
      pixelLine.appendChild(column1);
      column1.style.backgroundColor = 'white';
    }
  }
} pixelStructure(generateSize.value);
// Com o auxilio de Andre de Bem e Henrique Zozimo
function buttonReset() {
  btnReset.innerHTML = 'Limpar';
} buttonReset();
btnReset.addEventListener('click', () => {
  const column1 = document.querySelectorAll('.pixel');
  for (let index = 0; index < column1.length; index += 1) {
    column1[index].style.backgroundColor = 'white';
  }
});
function resetPixel() {
  pixel.innerHTML = '';
}

btnRandom.addEventListener('click', () => {
  resetPixel();
  if(generateSize.value === ''){
    alert('Board inválido!');
  }
  else if(generateSize.value < 5){
    generateSize.value = 5;
  }
  else if(generateSize.value > 50){
    generateSize.value = 50;
  }
  const valor = generateSize.value;
  pixelStructure(valor);
});
