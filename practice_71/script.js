'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = height + 'px';
    console.log(box.scrollTop);
});


const style = window.getComputedStyle(box);

// console.log(style.display === 'block');

console.log(document.documentElement.scrollTop);