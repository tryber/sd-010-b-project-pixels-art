const colors = ["black", "red", "green", "cyan", "orange"];
console.log(colors);

let createColor = (colors) => {
  let seletor = document.querySelector("#color-palette");
  colors.map((element) => {
    let color = element;
    element = document.createElement("div");
    seletor.appendChild(element);
    element.className = `color ${color}`;
    element.style.backgroundColor = color;
  });
};
createColor(colors);

const numberFrame = 5;
let createLinesFrame = (number) => {
  let seletor = document.querySelector("#board-content");
  let lineNumb = 1;
  for(indexLine = 1; indexLine <= number; indexLine++) {
    let indexLine = document.createElement('tr')
    seletor.appendChild(indexLine).className = `board-line-${lineNumb}`;
    for(indexContent = 1; indexContent <= number; indexContent++) {
      let indexContent = document.createElement('td')
      indexLine.appendChild(indexContent).className = `pixel`;
    }
    lineNumb += 1;
  }
};
createLinesFrame(5)

