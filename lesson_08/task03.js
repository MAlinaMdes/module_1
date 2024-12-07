'use strict'
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

function generateArray (length, n, m, type) {
  const newArray = [];
  const betweenNumbers = Math.abs(m - n) + 1;
  const min = Math.min(n, m);
  const max = Math.max(n, m);

 while (newArray.length < length) {
    const newNumber = Math.round(Math.random() * betweenNumbers) + min; 
    


    if (type === 'even' && newNumber % 2 === 0) {
        newArray.push(newNumber);
        
        } else if (type === 'odd' && newNumber % 2 !== 0) {
            newArray.push(newNumber);
        }
    }
    return newArray;
  };
console.log(generateArray(10, -10, 20, 'odd'))


 

  