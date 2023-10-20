// ------------ mobile events --------------
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('start');
        console.log(e.targetTouches);
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
    //     console.log('Move');
    // });
});