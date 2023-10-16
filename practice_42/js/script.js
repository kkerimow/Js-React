'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.cssText = 'background-color: blue; width: 600px;'

const div = document.createElement('div');
div.classList.add('black');

// document.body.append(div);
// wrapper.append(div);
// hearts[0].before(div);
// hearts[0].after(div);

// hearts[0].replaceWith(circles[0]);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.replaceChild(circles[0], hearts[1]);
wrapper.append(div);
// div.innerAdjacentHTML('beforebegin','<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');