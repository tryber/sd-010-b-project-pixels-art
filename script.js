let numeroPixel = 5;
function gerar_cor() {
	let preencherCor = document.querySelectorAll(".color");

	for (let cont = 1; cont < preencherCor.length; cont += 1) {

		let r = Math.random() * 255;
		let g = Math.random() * 255;
		let b = Math.random() * 255;
		let randomColor = `rgb(${r}, ${g} , ${b})`;

		if (r === 255 && g === 255 && b === 255) {
			r = Math.random() * 255;
			g = Math.random() * 255;
			b = Math.random() * 255;
			randomColor = `rgb(${r}, ${g} , ${b})`;
		}

		preencherCor[cont].style.backgroundColor = randomColor;
		preencherCor[0].style.backgroundColor = "rgba(0,0,0)";
		preencherCor[0].className = "color selected";

	}
}
gerar_cor();

function geraPixel(numeroPixel) {

	let pixels = document.getElementById("pixel-board");

	for (let cont = 0; cont < numeroPixel; cont += 1) {
		let itemPixel = document.createElement('div');
		pixels.appendChild(itemPixel);
		itemPixel.className = 'li';

		for (let cont2 = 0; cont2 < numeroPixel; cont2 += 1) {
			let itemPixel2 = document.createElement('div');
			itemPixel.appendChild(itemPixel2);
			itemPixel2.className = 'pixel';
		}
	}
}

geraPixel(numeroPixel);

function selecionaCor() {
	const color = document.querySelector('#color-palette');
	color.addEventListener('click', function (event) {
		document.querySelector('.selected').classList.remove('selected');
		event.target.classList.add('selected');
	});
}
selecionaCor();

function pintar() {
	const quadrados = document.querySelector('#pixel-board');
	quadrados.addEventListener('click', function (event) {
		const colorSelected = document.querySelector('.selected').style.backgroundColor;
		event.target.style.backgroundColor = colorSelected;
	});
}
pintar();


function botaoLimpar() {
	let botaoLimpar = document.querySelector("#clear-board")
	botaoLimpar.addEventListener('click', clear);
}

function clear() {
	const descolorir = document.querySelectorAll('.pixel');
	for (let cont = 0; cont < descolorir.length; cont += 1) {
		if (descolorir[cont].classList.contains('pixel')) {
			descolorir[cont].style.backgroundColor = "rgba(255,255,255)";
		}
	}

}
botaoLimpar();

function botaoVqv() {
	const botaoVQV = document.querySelector("#generate-board");
	botaoVQV.addEventListener('click', function (event) {
		const listaPixels = document.querySelectorAll('.li')
		// for (i = 0; i < listaPixels.length; i += 1){
		// 	listaPixels[i].parentNode.removeChild(listaPixels[i]);
		// }
		document.querySelector('#pixel-board').innerHTML = "";
		let adicionaPixel = document.querySelector("#board-size").value;
		if (adicionaPixel === '') {
			alert('Board inválido!');
		  }
		if (adicionaPixel < 5) {
			adicionaPixel = 5;
		  } 
		if (adicionaPixel > 50) {
			adicionaPixel = 50;
		  }
		  	numeroPixel = adicionaPixel;
		geraPixel(numeroPixel);
	
	});
}
botaoVqv();

