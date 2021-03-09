window.onload = function() { 
  let colorP = selector('.color-black')
  sessionStorage.selected = colorP.style.backgroundColor
  colorP.className += ' selected'

};
// Functions helper
let selector = (id) => {return document.querySelector(id)}
let selectorAll = (id) => {return document.querySelectorAll(id)}
// Constants
const colors = ["black", "red", "blue", "green"];
// Create Paleta
let createColor = (colors) => {
  colors.map((element) => {
    let color = element;
    element = document.createElement("div");
    selector("#color-palette").appendChild(element);
    element.className = `color color-${color}`;
    element.style.backgroundColor = color;
  });
};
// Create pixels
const numberFrame = 5;
let createLinesFrame = (number) => {
  let lineNumb = 1;
  for(indexLine = 1; indexLine <= number; indexLine++) {
    let indexLine = document.createElement('tr')
    selector("#board-content").appendChild(indexLine).className = `board-line-${lineNumb}`;
    for(indexContent = 1; indexContent <= number; indexContent++) {
      let indexContent = document.createElement('td')
      indexLine.appendChild(indexContent).className = `pixel`;
    }
    lineNumb += 1;
  }
};
createColor(colors);
createLinesFrame(5)