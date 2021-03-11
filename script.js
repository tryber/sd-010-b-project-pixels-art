function createPixelBoard(numberPixels) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let column = 0; column < numberPixels; column += 1) {
    const createColumn = document.createElement('div');
    createColumn.className = 'tr';
    pixelBoard.appendChild(createColumn);
    for (let row = 0; row < numberPixels; row += 1) {
      const createRow = document.createElement('div');
      createRow.className = 'pixel td';
      createColumn.appendChild(createRow);
    }
  }
}

function changeColor() {
  const colorBox = document.querySelectorAll('.color');
  const selected = document.querySelector('.selected');
  for (let index = 0; index < colorBox.length; index += 1) {
    const classListColor = colorBox[index].classList;
    if (classListColor[2] === 'selected') {
      selected.style.backgroundColor = `${classListColor[1]}`;
    } else if (classListColor.length <= 2) {
      colorBox[index].style.backgroundColor = classListColor[index];
    }
  }
}

function colorPixels() {
  const box = document.querySelectorAll('.td');
  const selected = document.querySelector('.selected');
  for (let index = 0; index < box.length; index += 1) {
    box[index].addEventListener('click', () => {
      box[index].style.backgroundColor = selected.style.backgroundColor;
    });
  }
  changeColor();
}

function selected() {
  const colorBox = document.querySelectorAll('.color');
  for (let index = 0; index < colorBox.length; index += 1) {
    colorBox[index].addEventListener('click', () => {
      for (let i = 0; i < colorBox.length; i += 1) {
        colorBox[i].classList.remove('selected');
      }
      colorBox[index].classList.add('selected');
      changeColor();
      colorPixels();
    });
  }
}

function clear() {
  const box = document.getElementsByClassName('td');
  const button = document.getElementById('clear-board');

  button.addEventListener('click', () => {
    for (let i = 0; i < box.length; i += 1) {
      box[i].style.backgroundColor = 'white';
    }
  });
}

clear();
createPixelBoard(5);
selected();
colorPixels();
