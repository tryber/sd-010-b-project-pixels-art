function paleta(cores) {
  for ( let index = 0; index < cores; index += 1) {
    let clicaCor = document.getElementById('color-palette');
    let criaCor = document.createElement('div');
    criaCor.className = 'color';
    clicaCor.appendChild(criaCor);
  }
}
paleta(4);

function colorePaleta() {
  document.getElementsByClassName('color')[0].getElementsByClassName.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].getElementsByClassName.backgroundColor = 'black';
  document.getElementsByClassName('color')[2].getElementsByClassName.backgroundColor = 'black';
  document.getElementsByClassName('color')[3].getElementsByClassName.backgroundColor = 'black';
}

function criaQuadros(quadrados) {
  for (let indexQuad = 0; indexQuad < quadrados * quadrados; indexQuad += 1) {
    let criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    let pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
  }
}