'use strict';

try {
    console.log('normal1');
    console.log(a);
    console.log('normal2');
    console.log(b);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log('normal3');