'use strict';

// const arr = [1, 2, 3, 5, 6];

// arr[99] = 0;
// console.log(arr.length); // 100
// console.log(arr);

// arr.forEach((item, i, arr) => {
//     console.log(`${i}: ${item} in array ${arr}`);
// })

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt('', '');
const products = str.split(', ');
products.sort((a, b) => b.localeCompare(a));
console.log(products.join('; '));