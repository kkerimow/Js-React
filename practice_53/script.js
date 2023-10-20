// Nillsish operator

'use strict';

// const box = document.querySelector('.box');

// const newHeight = 3;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h || 200}px`;
//     elem.style.width = `${w || 200}px`;
// }

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
}

// changeParams(box, newHeight, newWidth);
// changeParams(box);
// changeParams(box, newHeight, newWidth);

let userName = 'bla';
let userKey = 0;


console.log(userName ?? userKey ?? 'Kerim');