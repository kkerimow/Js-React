const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     console.log('clik clik clik');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });
// let  i = 0;
let removeElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', removeElement);
    // }
};

btn.addEventListener('click', removeElement);
overlay.addEventListener('click', removeElement, {once: true});


const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
})