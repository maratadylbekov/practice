'use strict';

const greeting = () => {
    setTimeout (() => {
        console.log('Hi!');
    }, 500);
}

const bye = () => {
    console.log('Bye!');
}

greeting();
bye();

const learnJS = (lang, callback) => {
    console.log(`I'm learning ${lang}`);
    callback();
}

const done = () => {
    console.log('I learned this lesson');
}

learnJS('JavaScript', done);