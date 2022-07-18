const main=document.querySelector('#main');
const rowDiv = [];
const colDiv = [];

const sizeButton = document.querySelector('#gridsize');

let Column;
let Row;

let Grid = 16;
let SquareSize;

let gridClick = false

sizeButton.addEventListener('click', function(){
    
    Grid = prompt('Enter pixel size:');
    
    clearGrid();
    createGrid();
})

main.addEventListener('mousedown', function(){
    gridClick = true;
})

main.addEventListener('mouseup',function(){
    gridClick = false;
})

function createGrid(){

for(let i=0; i<Grid; i++){
    
    SquareSize = 450/Grid;

    Row = `row${i}`

    rowDiv[i] = document.createElement('div');
    rowDiv[i].classList.add('row')
    rowDiv[i].setAttribute('id',Row)
    
    main.appendChild(rowDiv[i]);
    
    for(let x=0; x<Grid; x++){
        
        Column = `row${i}column${x}`;

        colDiv[x] = document.createElement('div');
        colDiv[x].classList.add('column');
        colDiv[x].setAttribute('id',Column);
        colDiv[x].style.height=`${SquareSize}px`;
        colDiv[x].style.width=`${SquareSize}px`;
        colDiv[x].addEventListener('mouseover',divColor)

        rowDiv[i].appendChild(colDiv[x]);

    }
}
}

function clearGrid(){

    while(main.firstChild){
        main.removeChild(main.firstChild);
    }

    rowDiv.length=0;
    colDiv.length=0;

}

function divColor(e){

    if(gridClick==true){
    e.target.style.backgroundColor="black";
    console.log("ass")
    }

}

createGrid();


