const main=document.querySelector('#main');
const rowDiv = [];
const colDiv = [];

let Column;
let Row;

let Grid = prompt("Square size");
let ColumnRoot;
let SquareSize=450/Grid;

let gridClick = false

main.addEventListener('mousedown', function(){
    gridClick = true;
})

main.addEventListener('mouseup',function(){
    gridClick = false;
})



for(let i=0; i<Grid; i++){
    
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

function divColor(e){

    if(gridClick==true){
    e.target.style.backgroundColor="black";
    console.log("ass")
    }

}


