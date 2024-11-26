'use strict'
// Первая задача:

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

// 1 евро = 1.2 доллара,

// 1 доллар = 64 рубля.

// const euro = usd * 1.2;
// const usd = rub * 64;
// let rub = 1;


const calcPrice = (euro) => {
    return euro * 1.2 * 64;
};

const res1 = calcPrice(10);
console.log(`${res1} рублей`);