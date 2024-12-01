'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];


const filter = (arr1, arr2) => {
    const passedStudents = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            
        }  
        if (!arr2.includes(arr1[i]))      
        passedStudents.push(arr1[i]);
    }
    return passedStudents;
}

console.log(filter(allStudents, failedStudents))



// const numbers = [-1, 3, 9, -9, 100, -100];
// const positiveNumbers = [];
// for (const number of numbers) {
//   if (number > 0) {
//     positiveNumbers.push(number);
//   }