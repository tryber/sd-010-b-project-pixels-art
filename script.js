let table = document.getElementById('pixel-board');

for (let cl = 0; cl < 5; cl += 1 ){
  let column = document.createElement('tr');
    for(let ln = 0; ln < 5; ln += 1){
      let line = document.createElement('td');
        line.setAttribute('class' , 'pixel');
           column.appendChild(line); 
        }
        table.appendChild(column);    
}

		const btn = document.querySelector('#clear-board');
		btn.addEventListener('click', function () {
		const clear = document.getElementsByClassName('pixel');

	for (let index = 0; index < clear.length; index += 1) {
		clear[index].style.backgroundColor = 'white';
	} 
})

  let colBlack = document.querySelector('#colorBlack');
  let colRed = document.querySelector('#colorRed');
  let colBlue = document.querySelector('#colorBlue');
  let colGreen = document.querySelector('#colorGreen');

    colRed.addEventListener('click' , function () {   
    colRed.classList.add('selected');
    colBlack.classList.remove('selected');
    colBlue.classList.remove('selected');
    colGreen.classList.remove('selected');
  }); 
    colBlack.addEventListener('click' , function () {   
    colBlack.classList.add('selected');
    colRed.classList.remove('selected');
    colBlue.classList.remove('selected');
    colGreen.classList.remove('selected');
  });
    colBlue.addEventListener('click' , function () {   
    colBlue.classList.add('selected');
    colRed.classList.remove('selected');
    colBlack.classList.remove('selected');
    colGreen.classList.remove('selected');
  });
    colGreen.addEventListener('click' , function () {   
    colGreen.classList.add('selected');
    colRed.classList.remove('selected');
    colBlack.classList.remove('selected');
    colBlue.classList.remove('selected');
  });
   
      let colInitial = document.querySelectorAll('.pixel');
      for(let index = 0; index < colInitial.length; index += 1 ){
      colInitial[index].addEventListener('click', function(col) {
      colInitial[index].style.backgroundColor = 'black';
      let selected = document.getElementsByClassName('selected')[0]; // variavel para guardar o elemento selecionado da paleta
      let restore = window.getComputedStyle(selected).backgroundColor; // restaura o valor guardado no caso a cor selecionado na paleta
      col.target.style.backgroundColor = restore; 
      });      
  
    }


  


  
