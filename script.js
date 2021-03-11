window.onload = function () {
  function colourSetUp(colorArray) {
    let colors = colorArray;
    colors[0].style.backgroundColor = 'black';
    colors[1].style.backgroundColor = 'red';
    colors[2].style.backgroundColor = 'blue';
    colors[3].style.backgroundColor = 'green';
  }

  function paletteColour(number) {
    const divFather = document.createElement('div');
    divFather.setAttribute('id', 'color-palette');
    document.body.appendChild(divFather);
    for (let i = 0; i < number; i += 1) {
      const colorPallete = document.createElement('div');
      colorPallete.setAttribute('class', 'color');
      divFather.appendChild(colorPallete);
    }
    const colorsDiv = document.querySelectorAll('.color');
    colourSetUp(colorsDiv);
  }

  function clean() {
    let btnClear = document.createElement('button');
    btnClear.setAttribute('id', 'clear-board');
    btnClear.innerText = 'Limpar'
    let fatherBtnClear = document.body
    fatherBtnClear = document.body.appendChild(btnClear);
    btnClear.addEventListener('click', function(){
      console.log('clicou');
      let pixels = document.querySelectorAll('.pixel');
      for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
      }
    })
  }

  function makeBoard() {
    const pixelBoard = document.createElement('div'); //table
    pixelBoard.setAttribute('id', 'pixel-board');
    document.body.appendChild(pixelBoard);
    for (let i = 0; i < 5; i += 1) {
      const headRow = document.createElement('div') //th
      headRow.setAttribute('class', 'row-head');
      pixelBoard.appendChild(headRow);
      for (let j = 0; j < 5; j += 1) {
        const lineElemento = document.createElement('div') //td
        lineElemento.setAttribute('class', 'pixel');
        headRow.appendChild(lineElemento);
      }
    }
  }

  function selectedBlack() {
    let colorsDiv = document.querySelectorAll('.color');
    for (let k = 0; k < colorsDiv.length; k += 1) {
      if (colorsDiv[k].style.backgroundColor === 'black') {
        colorsDiv[k].className = 'color selected';
      }
    }
  }

  function selectedPallete() {
    let allColors = document.querySelectorAll('.color')

    let zeroColor = document.querySelectorAll('.color')[0];
    zeroColor.addEventListener('click', function (event) {
      if (zeroColor.className === 'color') {
        event.target.className = 'color selected'
        for (let i = 0; i < allColors.length; i += 1) {
          if (i == 0) {
            continue;
          } else {
            allColors[i].className = 'color';
          }
        }
      }
    })
    let oneColor = document.querySelectorAll('.color')[1];
    oneColor.addEventListener('click', function (event) {
      if (oneColor.className === 'color') {
        event.target.className = 'color selected'
        for (let i = 0; i < allColors.length; i += 1) {
          if (i == 1) {
            continue;
          } else {
            allColors[i].className = 'color';
          }
        }
      }
    })
    let twoColor = document.querySelectorAll('.color')[2];
    twoColor.addEventListener('click', function (event) {
      if (twoColor.className === 'color') {
        event.target.className = 'color selected'
        for (let i = 0; i < allColors.length; i += 1) {
          if (i == 2) {
            continue;
          } else {
            allColors[i].className = 'color';
          }
        }
      }
    })
    let threeColor = document.querySelectorAll('.color')[3];
    threeColor.addEventListener('click', function (event) {
      if (threeColor.className === 'color') {
        event.target.className = 'color selected'
        for (let i = 0; i < allColors.length; i += 1) {
          if (i == 3) {
            continue;
          } else {
            allColors[i].className = 'color';
          }
        }
      }
    })

  }

  function setColor() {
    let pixels = document.querySelector('#pixel-board');
    pixels.addEventListener('click', function(event) {
      let colorSelected = document.getElementsByClassName('color selected')[0];
      let color = colorSelected.style.backgroundColor;
      console.log(color);
      event.target.style.backgroundColor = color;
      
    })
  }


  
  paletteColour(4);
  clean();
  makeBoard();
  selectedBlack();
  selectedPallete();
  setColor();
};


// tentativa
// let oneColor = document.querySelectorAll('.color')
// for (let i = 0; i < oneColor; i += 1) {
//   oneColor[i].addEventListener('click', function (event) {
//     if (oneColor[i].className === 'color') {
//       event.target.className = 'color selected';
//       for (let k = 0; k < oneColor.length; k += 1) {
//         if (oneColor[k].style.backgroundColor === oneColor[i].style.backgroundColor) {
//           continue
//         } else {
//           event.oneColor[k].className = 'color';
//         }
//       }
//     }
//   })
// }
