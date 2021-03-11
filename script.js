  criaPixelBoard();

  function criaPixelBoard() {
    let pixelBoard = document.getElementById("pixel-board");

    for (let linha = 0; linha < 5; linha++) {

      let criaLinha = document.createElement("div")
      criaLinha.className = "linha";
      criaLinha.id = linha;
      pixelBoard.appendChild(criaLinha);
      criaLinha.addEventListener('click', pintaPixel)


      for (let coluna = 0; coluna < 5; coluna++) {

        let criaColuna = document.createElement("div");
        criaColuna.className = "pixel";
        criaLinha.appendChild(criaColuna);
        criaColuna.id = linha + "." + coluna;

      }

    }

    click();

  }

  function click() {

    document.querySelector("#black").addEventListener('click', selecionaCor);
    document.querySelector("#red").addEventListener('click', selecionaCor);
    document.querySelector("#blue").addEventListener('click', selecionaCor);
    document.querySelector("#green").addEventListener('click', selecionaCor);

  }

  function selecionaCor(event) {
    let boxSelecionada = event.target.id;
    let selecionandoPaleta = document.getElementsByClassName("color");

    for (let index = 0; index < selecionandoPaleta.length; index++) {
      selecionandoPaleta[index].classList.remove("selected");
    }

    document.getElementById(boxSelecionada).classList.add("selected");

  }

  function pintaPixel(event) {

    let idPixelEmBranco = event.target.id;
    let paletaComSelected = document.querySelector(".selected");
    let corSelecionada = window.getComputedStyle(paletaComSelected, null).backgroundColor;

    document.getElementById(idPixelEmBranco).style.backgroundColor = corSelecionada;

    console.log(corSelecionada);
  }

  function limparPixels() {

    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index ++) {

      pixels[index].style.backgroundColor = 'white';

    }
  }
