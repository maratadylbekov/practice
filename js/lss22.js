'use strict';

// let a = 3,
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 4,
//     b: 3
// }

// const copy = obj;
// copy.a = 7;

// console.log(copy);
// console.log(obj);

const copy = (mainObj) => {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const num = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 9
    }

};

const newNum = copy(num);

newNum.a = 3;

console.log(num);
console.log(newNum);

const add = {
    d: 6,
    e: 20
};

console.log(Object.assign(num, add));

const oldArr = ['1', '2', '3'];
const newArr = oldArr.slice();

newArr[1] = '2344';

console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'blive', 'namba'];
const blogs = ['wordpress', 'vb', 'speedInfo'];
const internet = [...video, ...blogs, 'ok', 'mAgent'];

console.log(internet);

const log = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};

const numb = [2, 5, 9];

log(...numb);