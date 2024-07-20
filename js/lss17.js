'use strict';

const str = 'text';
const arr = [1, 3, 5];

console.log(arr.length);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('q')); // -1
console.log(fruit.indexOf('fruit')); // 5

const logg = 'Hello World';
console.log(logg.slice(10)); //d

console.log(logg.substr(3, 4)); //lo W

const num = 1.5;
console.log(Math.round(num)); //2

const test = '12.8px';
console.log(parseInt(test)); //12