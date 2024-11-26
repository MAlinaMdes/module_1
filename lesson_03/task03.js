'use strict'
// Третья задача:



// Напишите функцию, которая принимает строку и возвращает обратную строку


// Пример: "Привет мир" => "рим тевирП"

const originalText = (str) => {
    if(!str) return str;
    return str.split('').reverse().join('');
}
const reversed = originalText('итоги дня')
console.log(reversed);