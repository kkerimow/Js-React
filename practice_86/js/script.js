'use strict';

// // console.log('Запрос данных...');


// // const req = new Promise(function(resolve, reject) {
// //     setTimeout(() => {
// //         console.log('Подготовка данных...');
// //         const product = {
// //             name: 'TV',
// //             price: 2000
// //         };
// //         resolve(product);
// //     }, 2000);
// // });

// // req.then((data) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             data.status = 'order';
// //             resolve(data);
// //             // reject();
// //         }, 2000);
// //     });
// // }).then((data2) => {
// //     data2.modify = true;
// //     return data2
// // }).then(data3 => {
// //     console.log(data3);
// // }).catch(() => {
// //     console.error('Произошла ошибка!!!');
// // }).finally(() => {
// //     console.log('Finally...');
// // });



// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, time);
//     });
// };

// // test(1000).then(() => console.log('1000 - ms'));
// // test(2000).then(() => console.log('2000 - ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('Race');
// });


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json))