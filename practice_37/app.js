// "use strict";


// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних посмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             }else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         }else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         }else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVizibleMyDB: function() {
//         if (personalMovieDB) {
//             personalMovieDB.privat = !personalMovieDB.privat;
//         }
//     },
//     writeYouGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
//             if (genre == '' || genre == null) {
//                 console.log('Вы ввели некорректные данные гли не ввели их вовсе');
//                 i--;
//             }else {
//                 personalMovieDB.genres[i-1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//         })
//     }
// };

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let wholeArea=0;
//     for (let i = 0; i < data.shops.length; i++) {
//         wholeArea += data.shops[i].width * data.shops[i].length;
//     }

//     let volume = wholeArea * data.height;
//     let allCosts = volume * data.moneyPer1m3;

//     if (allCosts >= data.budget) {
//         return ('Бюджета недостаточно');
//     }else {
//         return ('Бюджета достаточно');
//     }
// }

// console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }

    return [a ,b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}
console.log(sortStudentsByGroups(students));
