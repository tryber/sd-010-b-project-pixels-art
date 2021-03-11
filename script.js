window.onload = function () {
  let getBlack = document.getElementById('color-palette')
  let newBlack = getBlack.childNodes[0]
  newBlack.className += ' selected'
}

function titleContent() { 
  let getBody = document.querySelector('body')
  let title = document.createElement('h1')
  title.id = 'title'
  title.innerHTML = 'Paleta de Cores'
  getBody.appendChild(title)
}
titleContent()

function colorPalette() {
  let getBody = document.querySelector('body');
  let session = document.createElement('section');
  session.id = 'color-palette'
  getBody.appendChild(session)
  for (let index = 0; index < 4; index += 1){
    let square = document.createElement('div')
    let sess = document.querySelector('#color-palette')
    square.className = "color"
    sess.appendChild(square)
  }
}
colorPalette()

function applyColor() {
  let getSession = document.querySelectorAll('#color-palette>div');
  let backgroundColor = ['black', 'red', 'blue','pink'];
  for(let index = 0; index < getSession.length; index +=1 ){
    for(let j = 0; j < backgroundColor.length; j +=1){
      if(index == j){
        getSession[index].style.backgroundColor = backgroundColor[j]
      }
    }
  }
}
applyColor()

function createInput() {
  let getBody = document.querySelector('body');
  let createInput = document.createElement('input')
  createInput.id = 'board-size'
  createInput.setAttribute('type', 'number')
  getBody.appendChild(createInput)
  let createButton = document.createElement('button')
  createButton.id = 'generate-board'
  createButton.innerHTML = '"VQV"'
  getBody.appendChild(createButton)
}
createInput()

  function getEvent() {
  let getInput= document.querySelector('#board-size');
  getInput.addEventListener('click', function(evt){
    console.log(evt.target.value)
    // if(evt.target.value < 0){
    //   console.log(evt.preventDefault())
    // }
  })
}
getEvent()

function createDivs() {
  let getBody = document.querySelector('body')
  let session = document.createElement('section')
  let sessionButton = document.createElement('button')
  sessionButton.id = "clear-board"
  getBody.appendChild(sessionButton)
  session.id = "pixel-board"
  getBody.appendChild(session)
  }
createDivs()


function createButton() {
  let getButton = document.querySelector('#clear-board')
  getButton.innerHTML = "Limpar"
  getButton.addEventListener('click', function(){
    let getPixel = document.querySelectorAll('#pixel-board>div')
    for(let index =0 ; index < getPixel.length; index += 1){ 
      getPixel[index].style.backgroundColor='white'
      }
    })
  }
  createButton()

function createPixel() {
  let getSession = document.querySelector('#pixel-board')
  let pixelSize = 5;
  for (let index = 0; index < pixelSize * pixelSize; index += 1){
    let createDiv = document.createElement('div')
    createDiv.className = 'pixel'
    getSession.appendChild(createDiv)
  }
}
createPixel()

function changeSelect() {
  let setPaleta = document.querySelector('#color-palette');
  setPaleta.addEventListener('click', function(evt){
    if(evt.target.className === 'color'){
      let newClass = document.querySelector('.selected')
      newClass.className='color'
      evt.target.className += ' selected'
    }
  })
}
changeSelect()

// Facilitação do uso da Arrow Function. 
// Pesquisa: https://www.w3schools.com/js/js_arrow_function.asp
function ColorPixelChange() {
  let getPixelBoard = document.querySelector('#pixel-board');
  getPixelBoard.addEventListener('click', (colorChanges) => {
    let change = document.querySelector('.selected').style.backgroundColor;
    let getPixels = document.querySelectorAll('.pixel')
      for(index = 0; index < getPixels.length; index += 1){
        if(getPixels[index] == colorChanges.target) {
          getPixels[index].style.backgroundColor = change;
        }
      }
    })
  }
  ColorPixelChange();





