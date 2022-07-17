const main=document.querySelector('#main');
const rowDiv = [];
const colDiv = [];

let Column;
let Row;


for(let i=0; i<16; i++){
    
    Row = `row${i}`

    rowDiv[i] = document.createElement('div');
    rowDiv[i].classList.add('row')
    rowDiv[i].setAttribute('id',Row)
    
    main.appendChild(rowDiv[i]);
    
    for(let x=0; x<16; x++){
        
        Column = `column${x}`;

        colDiv[x] = document.createElement('div');
        colDiv[x].classList.add('column');
        colDiv[x].setAttribute('id',Column);

        rowDiv[i].appendChild(colDiv[x]);

    }
}