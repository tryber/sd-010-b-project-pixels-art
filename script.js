document.getElementsByClassName('color')[0].className = 'color selected';

const color = document.getElementsByClassName('color');
const palette = document.getElementById('color-palette');
function colorPicker() {
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function () {
      palette.querySelector('.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

colorPicker();

const pixel = document.getElementsByClassName('pixel');
function brush() {
  for (let pix = 0; pix < pixel.length; pix += 1) {
    pixel[pix].addEventListener('click', function (event) {
      let selectColor = document.getElementsByClassName('selected')[0];
      let paint = window.getComputedStyle(selectColor).backgroundColor;
      event.target.style.backgroundColor = paint;
    });
  }
}
brush();
