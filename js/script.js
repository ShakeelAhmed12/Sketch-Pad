let gridSize = 16;
const container = document.querySelector('.grid');
const colorPicker = document.querySelector('#color');

function grid() {

  for(let i = 0; i < gridSize * gridSize; i++){
    let newDiv = document.createElement('div');
    container.appendChild(newDiv).classList.add('grid-item');
    const test = document.getElementById

    const gridItem = document.querySelectorAll('.grid-item')[i];
    gridItem.style.height = (600 / gridSize) + "px";
    gridItem.style.width = (600 / gridSize) + "px";

    gridItem.addEventListener('mouseover', function (e) {
      this.style.background = colorPicker.value;
    });
  }
}

grid();

let resize = document.getElementById('resize');
resize.addEventListener('click', function (e) {
  container.innerHTML = "";
  gridSize = parseInt(prompt('What grid size would you like?'))
  grid();
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function (e) {
  if (confirm('Would you like to clear the canvas?')) {

    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }

    grid();
  }
})
