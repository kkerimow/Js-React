'use strict';

const persone = {
    name: 'Alex',
    tel: '+7123456789',
    parents: {
        mom: 'Alice',
        dad: 'John'
    }
};

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

console.log(clone);