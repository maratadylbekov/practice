'use strict';

let str = 'some';
let strObj = new String(str);

console.log(strObj);
console.log(typeof(str));
console.log(typeof(strObj));

const soldiers = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log("Hello!");
    }
};

const john = Object.create(soldiers);

// const john = {
//     health: 100
// };

// // john.__proto__ = soldiers; // old version

// Object.setPrototypeOf(john, soldiers); //new version

console.log(john.armor);
john.sayHello();