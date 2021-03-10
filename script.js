let content = document.getElementsByClassName ('main-content');
let palette = document.getElementById('color-palette');
let colors = document.getElementsByClassName('color');
let columns = document.getElementById('pixel-board');
let pixels = document.getElementsByClassName("pixel");
	


//
let tableLines = function () {
	for (let index = 0; index < 5; index += 1) {
		line = document.createElement('div');
		columns.appendChild(line);
		for (let index = 0; index < 5; index += 1) {
			container = document.createElement('div')
			container.className = 'pixel';
			container.style.backgroundColor = 'white';
			line.appendChild(container);
		}
	}
}

tableLines();

//
palette.firstElementChild.classList.add('selected');

//
for (index = 0; index < colors.length; index += 1) {
	colors[index].addEventListener("click", selectColor);
}

function selectColor() {
	for (index = 0; index < colors.length; index += 1) {
		colors[index].classList.remove("selected")
	}
	this.classList.add("selected");
}

//
for (index = 0; index < pixels.length; index += 1) {
	pixels[index].addEventListener("click", paint);
}

function paint() {
	if (colors[0].className == "color selected") {
		this.style.backgroundColor = "black";
	} else if (colors[1].className == "color selected") {
		this.style.backgroundColor = "yellow";
	} else if (colors[2].className == "color selected") {
		this.style.backgroundColor = "red";
	} else if (colors[3].className == "color selected") {
		this.style.backgroundColor = "blue";
	}
}
//
let bt1 = document.createElement("button");
	bt1.innerText = 'Limpar';
	bt1.id = 'clear-board';
	bt1.addEventListener("click", reset);

let divPai = columns.parentNode;
	divPai.insertBefore(bt1, columns);

function reset() {		
	for(let index = 0; index < pixels.length; index += 1){
		pixels[index].style.backgroundColor = "white";
	}
}