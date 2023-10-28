'use strict';
// Rest operator
const log = function (a, b, ...rest) {
    console.log(a, b, ...rest);
}

log('aaaaaa', 'bbbbbb', 'basic', 'rest', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3)