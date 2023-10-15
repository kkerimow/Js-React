// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// // console.log(options['colors']['border']);

// const {border, bg} = options.colors;
// console.log(border);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// function copy(mainObj) {
//     objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 4,
//     x: {
//         d: 5,
//         e: 6
//     }
// };

// const newObj = copy(numbers);

// console.log(numbers);
// newObj.a = 10;
// newObj.x.d = 10;
// console.log(newObj);

// const numbers2 = {
//     f: 7,
//     g: 9,
//     h: {
//         w: 1,
//         q: 6
//     }
// };

// console.log(Object.assign(numbers, numbers2));
// console.log(numbers);
// console.log(numbers2);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 4, 6];

// console.log(log(...num));

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(plan) {
//         let age = plan.age;
//         let languages = plan.skills.languages;
//         return (`Мне ${age} и я владею языками: ${languages[0].toUpperCase()}  ${languages[1].toUpperCase()}`);
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// function showExperience(plan) {
//     let {skills: {exp}} = plan;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let {skills:{programmingLangs: {js, php}}} = plan;
//     return `Язык js изучен на ${js} \nЯзык php изучен на ${php}`;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// const someString = 'This is some strange string';

// function reverse(str) {
//     let newStr =  str.split('').reverse().join('');
//     return newStr;
// }

// console.log(reverse(someString));
