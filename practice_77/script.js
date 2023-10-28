// 'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// }

// const kerim = new User('Kerim', 25);
// const alex = new User('Alex', 21);


// kerim.hello();
// alex.hello();

// kerim.exit();
// alex.exit();

// console.log(typeof (new User()));
// console.log(kerim);
// console.log(alex);


// ----------------------- Контекст вызова функции ------------------------

'use strict';
// 1
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// 2
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// }

// obj.sum();

// 3
// function User(name, id) {
//     // this = kerim or new any object
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// const kerim = new User('Kerim', 25);


// 4

// function sayName() {
//     console.log(this);  //undefined
//     console.log(this.name); //error
// }
// sayName();

// function sayName(surname) {
//     console.log(this);  // {name: 'John'}
//     console.log(this.name + surname); // John  => sayName.call(anyObj)
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);


// function count(num) {
//     return this * num;   // this = 2; num = 3
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

//--------------- Practice -----------------

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    //console.log(this);    //  this = event.target (<button></button>)
    this.style.backgroundColor = 'red';
});


const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

// btn.addEventListener('click', (e) => {
//     console.log(this);   // Window
//     e.target.style.background = 'red';
// });