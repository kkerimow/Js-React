'use strict';

// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');
// const wrapper = document.querySelector('.wrapper');

// boxesQuery.forEach(box => {
//     if (box.matches('.this')) console.log(box);
// })

// console.log(boxesQuery[0].closest('.wrapper'));
// console.log(wrapper.closest('.this'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery);
// console.log(boxesGet);

// console.log(Array.from(boxesGet));

// -------------- Symbol ---------------
// let id = Symbol('id');
// const obj = {
//     name: 'Test',
//     [Symbol('id')]: 4,
//     getId: function() {
//         return this[id];
//     }
// };

// let id = Symbol('id');
// obj[id] = 1;

// console.log(obj[id]);
// console.log(obj);
// console.log(obj.getId());
// for (const value in obj) console.log(value);

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     [Symbol.for('id')]: 123
// };

// console.log(myAwesomeDB[Symbol.for('id')]);
// console.log(myAwesomeDB);


// ------------------- Дескриа=пторв свойств -------------------------

// writable - если этот параметр true то свойство в обекте можно будеть изменит (false только для чтение)
// enumerable - если этот параметр true то свойство будеть перечислятся в цикл в false цикл будеть игнорироват
// configurable - если этот параметр true то свойство будеть удалить а аттрибуты его можно будеть изменит
//              эти значении по умолчанию всегда равно true

// Object.defineProperty - с помощю defineProperty мы можем создать свойству и дескрипторы там будет по умолчанию false

const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});

// Object.defineProperty(user, 'birthday', {writable: false});


// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// const date = prompt('Date?');
// Object.defineProperty(user, 'birthday', {value: `${date}`, enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable: false})
// for (const key in user) console.log(key);

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

