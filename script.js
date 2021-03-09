window.onload = function () {
  let colorP = selector('.color-black');
  colorP.className += ' selected';
  sessionStorage.selected = colorP.style.backgroundColor;
};
// Functions helper
let selector = (id) => {
  return document.querySelector(id);
};
let selectorAll = (id) => {
  return document.querySelectorAll(id);
};
// Constants
const colors = ['black', 'red', 'blue', 'green'];
// Create Paleta
let createColor = (colors) => {
  colors.map((element) => {
    let color = element;
    element = document.createElement('div');
    selector('#color-palette').appendChild(element);
    element.className = `color color-${color}`;
    element.style.backgroundColor = color;
  });
};
// Create pixels
const numberFrame = 5;
let createLinesFrame = (number) => {
  let lineNumb = 1;
  for (indexLine = 1; indexLine <= number; indexLine++) {
    let indexLine = document.createElement('tr');
    selector('#board-content').appendChild(
      indexLine
    ).className = `board-line-${lineNumb}`;
    for (indexContent = 1; indexContent <= number; indexContent++) {
      let indexContent = document.createElement('td');
      indexLine.appendChild(indexContent).className = `pixel`;
    }
    lineNumb += 1;
  }
};
createColor(colors);
createLinesFrame(5);
//Paleta Selected
let paletaSelected = () => {
  for (color of selectorAll('.color')) {
    color.addEventListener('click', (elem) => {
      elem = elem.target;
      swapColor(elem);
    });
  }
};
paletaSelected();
//Swap colors
let swapColor = (elem) => {
  let color = sessionStorage.selected;
  let delet = selector(`.color-${color}`).className.replace(' selected', '');
  selector(`.color-${color}`).className = delet;
  elem.className += ' selected';
  sessionStorage.selected = elem.style.backgroundColor;
};
// Paint Pixel
for (pixel of selectorAll('.pixel')) {
  pixel.addEventListener('click', (check) => {
    check = check.target;
    check.style.backgroundColor = sessionStorage.selected;
    console.log(check);
  });
}
// Create button
let createButton = (name) => {
  let button = document.createElement('button');
  selector('#inputs').appendChild(button).id = 'clear-board'
  button.innerText = name;
  button.addEventListener('click', clear => {
    for(pixel of selectorAll('.pixel')) {
      pixel.style.backgroundColor = 'white';
    }
  })
}

createButton('Limpar')
