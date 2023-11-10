'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortName = names.filter(name => name.length < 5);
// console.log(shortName);

// ------------------------------
// map
// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);
// ------------------------------
// some
// const some = ['qwq', 'dfdfd', 5];

// // const newSome = some.some(item => typeof item === 'number');
// // every
// const newSome = some.every(item => typeof item === 'number');
// console.log(newSome);

// ------------------------------

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);
// const fruit = ['apple', 'pear', 'plum'];
// const res = fruit.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// ------------------------------

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr =Object.entries(obj)
//     .filter(item => item[1] === 'persone')
//     .map(item => item[0])
//     .reduce((sum, current) => `${sum}, ${current}`);
// console.log(newArr);

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

const newFilms = films.map(film => film.id = 1);
console.log(newFilms);

// const newArr = films.map(item => item.id = 1)
// console.log(newArr);