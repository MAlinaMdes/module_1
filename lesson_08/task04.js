// Создайте файл task04.js

// Необходимо написать функцию, которая принимает 2 параметра n и m

// И возвращает массив с високосными годами в диапазоне между n и m
'use strict'

function highYear (n, m) {
    const yearsArray = [];
   
   
    for (let i = n; i <= m; i++) {
        yearsArray.push(i);
    }

    const leapYear = [];
    yearsArray.forEach(year  => {
        if (checkLeapYear(year)) 
        return leapYear.push(year);
    })
        return leapYear;
    
     
    function checkLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0 && year % 100 === 0)){
            return year;
        } else {
            return false
        }

    };
};
 
console.log(highYear(1988, 2025))

