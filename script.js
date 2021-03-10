const getFirstColor = document.querySelector('#firstColor');
const getSecondColor = document.querySelector('#secondColor');
const getThirdColor = document.querySelector('#thirdColor');
const getFourthColor = document.querySelector('#fourthColor');

const firstColor = window.getComputedStyle(getFirstColor).backgroundColor;
const secondColor = window.getComputedStyle(getSecondColor).backgroundColor;
const thirdColor = window.getComputedStyle(getThirdColor).backgroundColor;
const fourthColor = window.getComputedStyle(getFourthColor).backgroundColor;

const pixelList = document.querySelectorAll('.pixel');
const selected = document.getElementsByClassName('selected');
//
window.onload = function () {
  getFirstColor.className += ' selected';
};
let colorChange = firstColor;

getFirstColor.addEventListener('click', function () {
  colorChange = firstColor;

  if (getFirstColor.className === 'color selected' || getSecondColor.className === 'color selected' || getThirdColor.className === 'color selected' ||
    getFourthColor.className === 'color selected') {
    selected[0].className = "color";
  }
  getFirstColor.className += ' selected';

});

getSecondColor.addEventListener('click', function () {
  colorChange = secondColor;
  if (getFirstColor.className === 'color selected' || getSecondColor.className === 'color selected' || getThirdColor.className === 'color selected' ||
    getFourthColor.className === 'color selected') {
    selected[0].className = "color";
  }
  getSecondColor.className += ' selected';
});

getThirdColor.addEventListener('click', function () {
  colorChange = thirdColor;
  if (getFirstColor.className === 'color selected' || getSecondColor.className === 'color selected' || getThirdColor.className === 'color selected' ||
    getFourthColor.className === 'color selected') {
    selected[0].className = "color";
  }
  getThirdColor.className += " selected";
});

getFourthColor.addEventListener('click', function () {
  colorChange = fourthColor;
  if (getFirstColor.className === 'color selected' || getSecondColor.className === 'color selected' || getThirdColor.className === 'color selected' ||
    getFourthColor.className === 'color selected') {
    selected[0].className = "color";
  }
  getFourthColor.className += " selected";
});

pixelList.forEach(function (pixel) {
  pixel.addEventListener('click', function (element) {
    element.target.style.backgroundColor = colorChange;
  })
});
