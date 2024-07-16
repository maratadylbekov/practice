'use strict';

function countBy(x, n) {
    let z = [];
    let i = 1;

    while (i <= n) {        
      z.push(i * x);
      i++;
    }
  
    return z;
  };

  console.log(countBy(23, 5));

  function countSheeps(sheep) {
    // TODO
    if(!Array.isArray(sheep)) {
        return 0;
    }
    let count = 0;
    for(let i = 0; i < sheep.length; i++) {
        if(sheep[i])
            count++;
    }
    return count;
  };

  const countSheeps = (x) => x.reduce((count, s) => s ? count + 1 : count, 0);

  console.log('1) - ' + countSheeps([undefined,null,false,true,true,false,null,undefined]));
  console.log('2) - ' + countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));


  const sortArray = (a) => {
    const odd = a.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    let i = 0;
    return a.map(num => num % 2 === 0 ? num : odd[i++]);
  };
  const odds = (array) => array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  console.log(odds([5, 3, 1, 8, 0]));
  console.log(sortArray([5, 3, 1, 8, 0]));


  function findUniq(arr) {
    if(arr[0] !== arr[1] && arr[1] === arr[2])
        return arr[0]
    // do magic
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i + 1])
        return arr[i + 1];
    }
  }

  console.log(findUniq([ 1, 0, 0 ]));
  console.log(findUniq([ 0, 1, 0 ]));
  console.log(findUniq([ 0, 0, 1 ]));
  console.log(findUniq([ 3, 10, 3, 3, 3 ]));
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

  
  const isIsogram = (str) => {
    str = str.toLowerCase();
    const letter = {};
    for(let i = 0; i < str.length; i++){
      const char = str[i];
      if(letter[char])
        return false;
      letter[char] = true;
    }
    return true;
  };

  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("aba"));