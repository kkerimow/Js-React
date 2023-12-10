'use strict';

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// console.log(str.next().value);

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(5);

// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

console.log(count(5).next());
console.log(count().next());