'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: () => {
        console.log('test');
    }
};

options.makeTest();

const {border, background} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} in property ${options[key]} has value ${options[key][i]}`);
        }
        
    } else{
        console.log(`Property ${key} has value ${options[key]}`);
        counter++;
    }
}