'use strict'

let rain = Math.random();
console.log(rain);

rain = Math.round(1);;
console.log(rain)

if (rain == 1) {
    console.log ('Пошёл дождь. Возьмите зонт!')
} else if (rain == 0) {
    console.log ('Дождя нет')
}
// задача 3

const mathematic = Number(prompt('Введите кол-во баллов по математике', ''));
const rusLang = Number(prompt('Введите кол-во баллов по русскому языку',''));
const computerScore = Number(prompt('Введите кол-во баллов по информатике',''));

const totalScore = mathematic + rusLang + computerScore;

if (totalScore >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!')
}
// task 4 

const amountOfMoney = Number(prompt('Какую суммы вы желаете снять',''));
if (amountOfMoney % 100 === 0 ) {
    console.log('сумма доступна')
} else {
    console.log('введите сумму кратную 100')
}

