'use strict';

// ToString

// 1)
console.log(typeof(String(null))); //old and rare used

// 2) concatinate
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num); //https://vk.com/catalog/5

const fontSize = 26 + 'px'; //26px
console.log(fontSize);

// ToNumber

// 1)
console.log(typeof(Number('4'))); //number

// 2)
console.log(typeof(+'4')); //number

// 3)
console.log(typeof(parseInt('15px', 10))); //number

let answ = +prompt('Hello', '');

// To boolean

// 1)
0, '', null, undefined, NaN; // <== false all other are true

let switcher = null;

if (switcher) {
    console.log('Working...');
};

switcher = 1;

if (switcher) {
    console.log('Working...');
};

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'444'));