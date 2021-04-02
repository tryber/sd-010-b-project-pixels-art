const coresPaleta = document.querySelectorAll('.color');
const preto = coresPaleta[0];
const vermelho = coresPaleta[1];
const verde = coresPaleta[2];
const azul = coresPaleta[3];

preto.style.backgroundColor = 'black';
vermelho.style.backgroundColor = 'red';
verde.style.backgroundColor = 'green';
azul.style.backgroundColor = 'blue';

preto.classList.add('selected');

function seleçãoDeCor() {
  for (let index = 0; index < coresPaleta.length; index += 1) {
    coresPaleta[index].classList.remove('selected');
  }
  this.classList.add('selected');
}
/*  Entendendo o objeto  this, site de referencia: https://serfrontend.com/blog/
diferenca-entre-this-target-e-currenttarget/index.html. Toda vez que da um click, o this vai atribuir a classe selected na origem do evento(O click do mouse) */

for (let index = 0; index < coresPaleta.length; index += 1) {
  coresPaleta[index].addEventListener('click', seleçãoDeCor);
}

function corPixel() {
  const claseSelected = 'color selected';
  if (preto.className === claseSelected) {
    this.style.backgroundColor = 'black';
  } else if (vermelho.className === claseSelected) {
    this.style.backgroundColor = 'red';
  } else if (verde.className === claseSelected) {
    this.style.backgroundColor = 'green';
  } else if (azul.className === claseSelected) {
    this.style.backgroundColor = 'blue';
  }
}

const cor = document.querySelectorAll('.pixel');
for (let index = 0; index < cor.length; index += 1) {
  cor[index].addEventListener('click', corPixel);
}
/* Resposta: A função criada corPixel esta fazendo comparacões para saber em qual cor o
usuario clicou e apos o click do usuario ele pode pintar os pixels com a cor que foi feito a comparção. */

/* Da linha 14 a linha 40 foi inspirado no codigo e na logica de Mateus Bodra.
Alguns sites foi usado para entender melhor o funcionamento de partes do codigo. Todos
serão listado abaixo. Entre as funcões darei pequenas explicações do que foi feito.

https://cursos.alura.com.br/forum/topico-duvida-sobre-classlist-add-98950
https://serfrontend.com/blog/diferenca-entre-this-target-e-currenttarget/index.html.
https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
http://devfuria.com.br/javascript/dom-append-child/
https://www.w3schools.com/css/default.asp */
