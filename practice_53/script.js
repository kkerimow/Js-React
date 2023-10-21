// --------------- Nillsish operator ------------

'use strict';

// const box = document.querySelector('.box');

// const newHeight = 3;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h || 200}px`;
//     elem.style.width = `${w || 200}px`;
// }

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
// }

// // changeParams(box, newHeight, newWidth);
// // changeParams(box);
// // changeParams(box, newHeight, newWidth);

// let userName = 'bla';
// let userKey = 0;


// console.log(userName ?? userKey ?? 'Kerim');


// -------------- optional chaining operator ---------------

const box = document.querySelector('.box');
const block = document.querySelector('.block');

// console.log(block);

// if (block) console.log(block.textContent);
// console.log(block.textContent);
// console.log(block?.textContent);

// console.log(1 + 2);

const userData = {
    name: 'Kerim',
    age: null,
    say: function () {
        console.log('Hello');
    }
};

// console.log(userData.skills.js);

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

userData.say();
userData.hey?.();

// console.log(userData?.skills?.js); //undefined