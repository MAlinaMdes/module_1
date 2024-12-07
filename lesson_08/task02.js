'use strict'

function generateArray (length, n, m) {
  const newArray = [];
  const betweenNumbers = Math.abs(m - n) + 1;
  const min = Math.min(n, m);
  const max = Math.max(n, m);

 while (newArray.length < length) {
    const newNumber = Math.round(Math.random() * betweenNumbers) + min; 
    newArray.push(newNumber)
}
    return newArray;
  };
console.log(generateArray(10, -10, 20))


 

