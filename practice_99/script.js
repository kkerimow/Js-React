'use strict';

// Getters and Setters

// const person = {
//     name: 'Alex',
//     age: 25,
//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// person.userAge = 27;
// console.log(person.userAge);


// ------------- Encapsulation -----------------

class User {
    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    #surname = 'Kerimov';

    say() {
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        }else {
            console.log('Incorrect value');
        }
    }
}

const kerim = new User('Kerim', 26);

console.log(kerim.age);

kerim.age = 99;
console.log(kerim.age);

console.log(kerim.surname);

kerim.say();