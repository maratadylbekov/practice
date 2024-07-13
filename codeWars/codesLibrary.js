const descendingOrder = (str) => str.split('').sort().reverse().join('');

  // console.log(descendingOrder(0));
  // console.log(descendingOrder(1));
  // console.log(descendingOrder(111));
  // console.log(descendingOrder(15));
  // console.log(descendingOrder(1021));
  // console.log(descendingOrder(123456789));

//   assert.strictEqual(descendingOrder(0), 0)
//     assert.strictEqual(descendingOrder(1), 1)
//     assert.strictEqual(descendingOrder(111), 111)
//     assert.strictEqual(descendingOrder(15), 51)
//     assert.strictEqual(descendingOrder(1021), 2110)
//     assert.strictEqual(descendingOrder(123456789), 987654321)


const getMiddle = (str) => {
  const mid = Math.floor(str.length / 2);
  if (str.length % 2 !== 0)
    return str[mid];
  return str.slice(mid - 1, mid + 1);
  
};

console.log(getMiddle("testing"));
console.log(getMiddle("test"));

const toUpperAfterSpace = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if(str[i] === ' ' && i + 1 < str.length){
       res += ' ' + str[i + 1].toUpperCase();
       i++
    } else {
      res += str[i];
    }
  }
  return res;
};

console.log(toUpperAfterSpace("How Can Mirrors Be Real If Our Eyes Aren't Real"));

const getGrade = (a, b, c) => {
  const ave = (a + b + c) / 3;
  
    if (ave >= 90 && ave <= 100) {
      return 'A';
    } else if (ave >= 80 && ave <= 89) {
      return 'B';
    } else if (ave >= 70 && ave <= 79) {
      return 'C';
    } else if (ave >= 60 && ave <= 69) {
      return 'D';
    } else {
      return 'F';
    }
};

