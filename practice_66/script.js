//---------------- Сборщик мусора ---------------------

// let user = {
//     name: 'John'
// };

// let admin = user;

// user = null;

// console.log(user);
// console.log(admin);


// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;

//     return {
//         father: man,
//         mother: woman
//     };
// }

// let family = marry(
//     {
//         name: 'John'
//     },
//     {
//         name: 'Ann'
//     }
// );

// console.log(family);

// delete family.father;
// delete family.mother.husband;
// console.log('--------------');
// console.log(family);

// console.log('--------------');
// family = null;

// console.log(family);
// 'use strict';
// function myFunc() {
//     const something = 'bla bla';
//     return something;
// }

// console.log(myFunc());


// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log(potentiallyHugeArray);
//         console.log('Bye');
//     }
// }

// const sayHello = outer();

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];
// const budget = [ 5000, 15000, 25000];
// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// // map.set({rice: 500}, 5000);
// // console.log(map);

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// })

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// console.log(map.has(15000));
// console.log(map);

// const goods = [];

// for (const shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }

// console.log(goods);

// for (const price of map.values()) {
//     console.log(price);
// }

// for (const [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(map[0][key]);
// });


// -------------- WeakMap and WeakSet ----------------

// let user = {name: 'Kerim'};

// const arr = [user];
// let map = new WeakMap();
// map.set(user, 'data');
// user = null;

// console.log(user);
// console.log(arr[0]);
// console.log(map);


// let cache = new WeakMap();

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }

//     return cache.get(user);
// }

// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// -------------- WeakSet ----------------

// let user = {name: 'Kerim'};

// let sett = new WeakSet();
// sett.add(user);
// user = null;

// console.log(sett.has(user));


// let messages = [
//     {text: 'hello', from: 'John'},
//     {text: 'world', from: 'Alex'},
//     {text: '...blabla', from: 'Mia'},
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// // readMessages.add(messages[1]);

// console.log(readMessages.has(messages[0]));

// messages.shift();

// console.log(readMessages.has(messages[0]));


// -------------- Date ----------------

const now = new Date();
// const now = new Date('2023-05-01');

console.log(now);
console.log(now.getHours()); //
console.log(now.getUTCHours()); //.getHours - 3 (for Russia)
