// Select color input
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');


const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height,width);


sizePicker.addEventListener('click',(e) => {

    e.preventDefault();


    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    table.firstChild.remove();


    makeGrid(height, width);
// make a grid
});

// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

//console.log(height.value, width.value);
 
//const row = table.insertRow(0);
//const cell = row.insertCell(0);

// Your code goes here!
for(let i = 0; i <= height; i++){
    let row = table.insertRow(i);
    for(let j = 0; j <= width; j++){
        let cell = row.insertCell(j);
        cell.addEventListener('click',(e) => {
            console.log(e);
            cell.style.background = color.value;
        });
    }
}

}
