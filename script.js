function criarDivs() {
  // chama minha div htm id pixel-bord
  let pixel = document.getElementById('pixel-board');
  //criação das novas divs no for
  for (index = 0; index < 25; index += 1) {
    let cd = document.createElement('div'); //variavel cd recebe as novas divs criadas
    cd.className = 'pixel'; // cd.className recebe a class pixel
    pixel.appendChild(cd); //pixel é adicionado na variavel cd
  }
}
criarDivs();

//7
let receved = document.getElementsByClassName('color');
for(let index =0; index < receved.length; index++){
  receved[index].addEventListener('click', addSelClass);
}
function addSelClass(event){
document.getElementsByClassName('selected')[0].
classList.remove('selected');
event.target.classList.add('selected');
}
//8
   let cor = document.querySelector('.selected');
   let pixels =document.querySelectorAll('.pixel')
   for(let index = 0; index < pixels.length; index+=1){
     pixels[index].addEventListener('click', colorize);
   }
function colorize(event){
       let selectedCor = document.querySelector('.selected').id;
       event.target.style.backgroundColor =  selectedCor ;

function limparPixel(){
  
   for (let index = 0; index < pixels.length; index++){
    pixels[index].style.backgroundColor = 'white';
   }
}
   let butao = document.getElementById('clear-board');
   butao.addEventListener("click", limparPixel);
}

