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


// ------------------- Дескрипторы свойств -------------------------

// writable - если этот параметр true то свойство в обекте можно будеть изменит (false только для чтение)
// enumerable - если этот параметр true то свойство будеть перечислятся в цикл в false цикл будеть игнорироват
// configurable - если этот параметр true то свойство будеть удалить а аттрибуты его можно будеть изменит
//              эти значении по умолчанию всегда равно true

// Object.defineProperty - с помощю defineProperty мы можем создать свойству и дескрипторы там будет по умолчанию false

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});

// Object.defineProperty(user, 'birthday', {writable: false});


// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// const date = prompt('Date?');
// Object.defineProperty(user, 'birthday', {value: `${date}`, enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// Object.defineProperty(user, 'showMyPublicData', {enumerable: false})
// for (const key in user) console.log(key);

// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// })



// ------------------- Итерируемые конструкции -------------------------


// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// for (const key in user) {
//     console.log(user[key]);
// }

// const arr = ['a', 'b', 'c'];

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// salaries[Symbol.iterator] = function() {
//     return {
//         current: this.john,
//         last: this.ann,
//         next() {
//             if (this.current < this.last) {
//                 this.current += 500;
//                 return {done: false, value: this.current}
//             }else {
//                 return {done: true}
//             }
//         }
//     }
// }

// for (const res of salaries) {
//     console.log(res);
// }
// console.log(Object.keys(salaries).length);
// когда цикл forof будеть запускатся на обекте salaries то он вызывает этот метод и этот метод
// должен нам вернут итератор это объект с методом next дальше forof будеть работать с этим
// объектам которое вернулся из этого метода. Когда forof получил объект с методом next
// и наш перебор (итератор) хочет получит следуюшее значение он вызывает метод next с этого объекта
// и результать вызова метода next должен иметь определенный вид







// ------------------- Map -------------------------


// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// console.log(typeof Object.keys(user)[0]);

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];

// const map = new Map([
//     [{paper: 400}, 12000]
// ]);

// const budget = [5000, 15000, 25000];

// map.set(shops[0], 5000)
//    .set(shops[1], 8000)
//    .set(shops[2], 25000);
// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// })

// console.log(map);

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// console.log(map.delete(shops[0]));
// console.log(map.clear(shops[0]));
// console.log(map.size);

// console.log(map.keys());

// const goods = [];
// for (const shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (const price of map.values()) {
//     console.log(price);
// }

// for (const item of map.entries()) {
//     console.log(item[0], item[1]);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const user = {
//     name: 'Kerim',
//     surname: 'Kerimov',
//     [Symbol('id')]: 456
// };

// let id = Symbol('id');
// user[id] = 123
// console.log(typeof user[id]);
// console.log(typeof id);

// console.log(Object.keys(user).length);




// ------------------- Set -------------------------

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];
// const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

// const set = new Set(arr);

// set.add('Ivan')
//    .add('Oleg');

// console.log(set);

// // for (const value of set) console.log(value);
// // console.log(set[1]);

// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// })




// ------------------- BigInt -------------------------

// console.log(15n / 3n);




// function amountOfPages(summary){
//     let str = '';
//     let result = 0;
//     for (let i = 1; i <= summary; i++) {
//         str += i;
//         if (str.length === summary) {
//             result = i;
//             break;
//         }
//     }
//     return result;
// }

// console.log(amountOfPages(17));



// function isPangram(string) {
//     let abc = 'abcdefghijklmnopqrstuvwxyz';
//     let str = string.toLowerCase().replaceAll(' ', '');
//     str = new Set(str);
//     for (let i = 0; i < abc.length; i++) {
//         if(str.has(abc[i])){
//             return true;
//         }else {
//             return false;
//         }
//     }
// }

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('aBcdefg hijKlmnopqr stuVwxyz'));
// console.log(isPangram('Hello world'));
// isPangram('The quick brown fox jumps over the lazy dog');

// let abc = 'abcdefghijklmnopqrstuvwxyz';
// let abc2 = 'abcdefghijklmnopqrstuvwxyz';
// // let str = new Set(abc);
// // let str2 = new Set(abc);
// // console.log(abc === abc2);

// let a = '123';
// let b = '321';
// console.log(a === b);