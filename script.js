window.onload = function() {
  let arrayBackground = ["red", "blue", "green", "gray", "yellow", "brown"]
  let paletteColor = document.querySelector("#color-palette")
  // console.log(paletteColor)
  let color = 0;
  for (index = 1; index <= 3; index += 1){
    cor = Math.floor(Math.random() * arrayBackground.length)
    let div = document.createElement("div");
    div.className = "color";
    div.style.backgroundColor = arrayBackground[cor]
    paletteColor.appendChild(div);    
  }  

  let selected = document.querySelectorAll(".color");
  for (let index = 0; index < selected.length; index+=1) {
    selected[index].addEventListener("click", changeSelected)
  } 
}

let pixelBoard = document.getElementById("pixel-board");
for (let cont = 1; cont <= 5; cont+=1) {
  let div = document.createElement("div");
  div.className = "tr"
  for (let cont2 = 1; cont2 <= 5; cont2+=1){
    let div2 = document.createElement("div");
    div2.classList.add("pixel");
    div.appendChild(div2);
  }  
  pixelBoard.appendChild(div);
}

let btnGenerate = document.querySelector("#generate-board")
let input = document.querySelector("#board-size");
btnGenerate.addEventListener("click", function() {
  if (input.value > 5 && input.value < 50) {
    removeChild()
    createNewBoard()
  } else {
    compareValue(input.value)
  }

  let pixelSelected = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].addEventListener("click", changeColor);
  }
  
  let buttonClear = document.getElementById("clear-board");
  buttonClear.addEventListener("click", clearPixels);
  function clearPixels() {
    for (index = 0; index < pixelSelected.length; index+=1) {
      pixelSelected[index].style.backgroundColor = "white";
    }
  }
})



function changeSelected(event) {
  let selectElement = document.querySelector(".selected")
  selectElement.classList.remove("selected")
  event.target.classList.add("selected")
}


let pixelSelected = document.querySelectorAll(".pixel");
  for (let index = 0; index < pixelSelected.length; index += 1) {
    pixelSelected[index].addEventListener("click", changeColor);
  }
  
  let buttonClear = document.getElementById("clear-board");
  buttonClear.addEventListener("click", clearPixels);
  function clearPixels() {
    for (index = 0; index < pixelSelected.length; index+=1) {
      pixelSelected[index].style.backgroundColor = "white";
    }
  }

function changeColor(event) {
  let selectElement = document.querySelector(".selected")
  let color = window.getComputedStyle(selectElement).backgroundColor
  event.target.style.backgroundColor = color    
}

function removeChild() {
  let rowPixel = document.querySelectorAll(".tr")
  for (index = 0; index < rowPixel.length; index += 1) {
    element = rowPixel[index]
    pixelBoard.removeChild(element)
  }
}

function createNewBoard() {
  for (let cont = 1; cont <= input.value; cont+=1) {
    let div = document.createElement("div");
    div.classList.add("tr")
    for (let cont2 = 1; cont2 <= input.value; cont2+=1){
      let div2 = document.createElement("div");
      div2.classList.add("pixel");
      div2.style.backgroundColor = "white";
      div.appendChild(div2);
    }  
    pixelBoard.appendChild(div);
  }
}

function compareValue(value) {
  if (value > 0 && value <= 5) {
    removeChild()
    for (let cont = 1; cont <= 5; cont+=1) {
      let div = document.createElement("div");
      div.className = "tr"
      for (let cont2 = 1; cont2 <= 5; cont2+=1){
        let div2 = document.createElement("div");
        div2.classList.add("pixel");
        div.appendChild(div2);
      }  
      pixelBoard.appendChild(div);
    }
  } else if (value >= 50) {
    removeChild()
    for (let cont = 1; cont <= 50; cont+=1) {
      let div = document.createElement("div");
      div.className = "tr"
      for (let cont2 = 1; cont2 <= 50; cont2+=1){
        let div2 = document.createElement("div");
        div2.classList.add("pixel");
        div.appendChild(div2);
      }  
      pixelBoard.appendChild(div);
    }
  } else {
    alert("Board inválido!")
  }
}

