'use strict'

// Функция принимает один обязательный параметр 
// это количество элементов в массивеИ возвращает массив
//  со случайными числами от одного до 100 включительно

function generateArray (length) {
    const newArray = [];

   while (newArray.length < length) {
      const newNumber = Math.round(Math.random() *100); 
      newArray.push(newNumber)
}
      return newArray;
    };
  console.log(generateArray(10))