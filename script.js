const cores = document.querySelectorAll(".color");
for(let i = 0; i < cores.length; i++){
  cores[i].addEventListener("click", selecionaCor);
}
function selecionaCor(event){
  document.querySelector(".selected").classList.remove("selected");
  event.target.classList.add("selected");
}

const pixels = document.getElementsByClassName('pixel');
for(let i = 0; i < pixels.length; i++){
  pixels[i].addEventListener("click", function(){
  let corNova = document.getElementsByClassName("selected")[0].style.backgroundColor;
  pixels[i].style.backgroundColor = corNova;
  })
}

const button = document.getElementById("clear-board");
button.addEventListener('click', clearBtt);
function clearBtt (){
  for(let i = 0; i < pixels.length; i++){
    document.getElementsByClassName("pixel")[i].style.backgroundColor = "rgb(255,255,255)"
  }
}


document.getElementsByClassName("color")[0].style.backgroundColor = "rgb(0,0,0)"
document.getElementsByClassName("color")[1].style.backgroundColor = "rgb(255,0,0)"
document.getElementsByClassName("color")[2].style.backgroundColor = "rgb(0,255,0)"
document.getElementsByClassName("color")[3].style.backgroundColor = "rgb(0,0,255)"

