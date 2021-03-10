window.onload = function() {
  let divUm = document.querySelector("#pixel-board")

  function addPixelTable() {
    for (let index = 0; index <= 5; index += 1){
      let linhaPx = document.createElement('div');
      for (let colunaPx = 1; colunaPx <= 5; colunaPx += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        linhaPx.appendChild(pixel);
      }
      divUm.appendChild(linhaPx);
    }
  }
  addPixelTable();
}