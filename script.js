//Starting

window.onload = whitePixels()
window.onload = blackColorSelected()

function randomColorGenerator() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor
}
//Para resolver essa questão, pesquisei e encontrei um artigo muito bom na CSS Tricks, que instruiu como gerar uma cor aleatória. Segue o link: https://css-tricks.com/snippets/javascript/random-hex-color/

document.querySelectorAll(".color")[0].style.backgroundColor = "black"
document.querySelectorAll(".color")[1].style.backgroundColor = "#" + randomColorGenerator();
document.querySelectorAll(".color")[2].style.backgroundColor = "#" + randomColorGenerator();
document.querySelectorAll(".color")[3].style.backgroundColor = "#" + randomColorGenerator();

function whitePixels () {
  let pixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = "white"
  }
}

function blackColorSelected () {
  let element = document.querySelectorAll(".color")[0];
  element.classList.add("selected");
  // Para essa função pesquisei no seguinte artigo da W3Schools: https://www.w3schools.com/howto/howto_js_add_class.asp
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("color") && !event.target.classList.contains("selected") ) {
    document.querySelectorAll(".selected")[0].className = "color";
    event.target.className = "color selected";}
  if (event.target.classList.contains("pixel")) {
    event.target.style.backgroundColor = document.querySelectorAll(".selected")[0].style.backgroundColor}
  if (event.target.id === "clear-board") {
    let pixelsWhiteAgain = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixelsWhiteAgain.length; i += 1) {
      pixelsWhiteAgain[i].style.backgroundColor = "white"
    }
  }
  //Recebi um grande auxílio do Thiago Marchini nessa questão, ele realmente me ajudou a compreender esse código.
  if (event.target.id === "generate-board" && parseInt(document.getElementById("board-size").value) >= 5 && parseInt(document.getElementById("board-size").value) <= 50) {
    let clearTable = document.getElementById("pixel-board");
    clearTable.innerHTML = "";
    let valueInput = parseInt(document.getElementById("board-size").value);
    for (let i = 1; i <= valueInput; i += 1) {
      let table = document.getElementById("pixel-board");
      let row = document.createElement("TR");
      for (let j = 1; j <= valueInput; j += 1) {
        let pixelTable = document.createElement("TD");
        pixelTable.setAttribute("class", "pixel");
        row.appendChild(pixelTable);
      }
    table.appendChild(row)
    }
  whitePixels()
  }
  if (event.target.id === "generate-board" && parseInt(document.getElementById("board-size").value) > 50) {
    let clearTable = document.getElementById("pixel-board");
    clearTable.innerHTML = "";
    let valueInput = parseInt(document.getElementById("board-size").value);
    for (let i = 1; i <= 50; i += 1) {
      let table = document.getElementById("pixel-board");
      let row = document.createElement("TR");
      for (let j = 1; j <= 50; j += 1) {
        let pixelTable = document.createElement("TD");
        pixelTable.setAttribute("class", "pixel");
        row.appendChild(pixelTable);
      }
    table.appendChild(row)
    }
    whitePixels()
  }
  if (event.target.id === "generate-board" && document.getElementById("board-size").value.length === 0) {
    alert("Board inválido!");
  }
})

