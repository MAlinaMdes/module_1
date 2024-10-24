'use strict'
// Во многих странах иная прогрессивная шкала налогообложения и вычисляется она более сложным способом: 


// Налоговая ставка 13% на доход до 15 000 ₽

// Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽

// Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.


// Напишите программу, которая корректно сможет посчитать налог и вывести сумму налога в консоль.


const incomePerMonth = 120000;
let taxAmont = 0;


if (incomePerMonth < 15000) {
    taxAmont = incomePerMonth * 0.13;
}
if (incomePerMonth >= 15000 && incomePerMonth <= 50000) {
    taxAmont = (incomePerMonth - 15000) * 0.2;
}
if (incomePerMonth > 50000) {
    taxAmont = (incomePerMonth - 50000) * 0.3;
}
console.log(`ваш налог ${taxAmont}`);