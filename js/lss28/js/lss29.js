'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneheart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'green';
box.style.width = '100px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// };

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
// const text = document.createTextNode('some text'); //rarely used

div.classList.add('black');
// document.body.append(div);

// document.querySelector('.wrapper').append(div);

wrapper.prepend(div);
// wrapper.appendChild(div);

// hearts[1].before(div);
// hearts[2].after(div); //new

// wrapper.insertBefore(div, hearts[1]); //old

// circles[0].remove(); //new
// wrapper.removeChild(hearts[1]); //old

// hearts[0].replaceWith(circles[0]); //new
// wrapper.replaceChild(circles[0], hearts[1]); //old

div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = '<h1>Hello World</h1>';

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');