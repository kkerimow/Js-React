'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 4000);

// setTimeout(() => {
//     console.log('timeout 4');
// }, 4000);

// console.log(2);


// let k = 0;

// function count(params) {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('done');
// }
// count();

// setTimeout(() => {
//     console.log(1);
// }, 0);

// console.log(2);



setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

console.log('code');