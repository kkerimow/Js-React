"use strict";

// let swithcher = null;

// if (swithcher) {
//     console.log('Working...');
// }

// swithcher = 5;
// console.log(swithcher);
// if (swithcher) {
//     console.log('worked....');
// }


// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;
// logNumber(); debugger

// function foo(a,b) {
//     console.log(a);
//     console.log(b);
//     const [first] = a;
//     const {ru} = b;
//     console.log(first);
//     console.log(ru);
//     return `${first} ${ru}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

// console.log(result);
let num = 5;
// alert(num++); //5
// console.log([] + false - null + true); // NaN
let y = 1;
let x = y = 2;
// alert(x); //2

// console.log([] + 1 + 2); // 12

// alert( "1"[0] );

// console.log('false' - null); //NaN

// console.log([] + 1 + 2); //12

// console.log('sdfsdfdsf'[5]);
// console.log(2 && undefined); //undefined

// console.log(3||4); //первое правильное 3
// console.log(9&&4); //последное правильное 4

// console.log(+'ddfdfdfdfdfd'); NaN
// console.log(+'Infinity'); Infinity

// console.log(2 || '');


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    !prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0].price, restorantData.menu[1].price, restorantData.averageLunchPrice));


function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));
