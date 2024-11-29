'use strict'
// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
    let calculate = (total, goods, promo) => {


    let totalNew = total;
    
    
    if (goods > 10) {
         const discountThree = total * .03;
         totalNew -= discountThree;
        //  console.log (totalNew)
    } 

    if (total > 30000 ) {
        const discountFifteen = (totalNew - 30000) * .85;
        
        totalNew -= discountFifteen ;
        // console.log (totalNew);
    }
   
    if (promo = 'METHED' && promo != 'G3H2Z1') {
        const discountTen = totalNew * 0.1;
        totalNew -= discountTen;
        // console.log (totalNew);

    }  else if (promo = 'G3H2Z1' && totalNew > 2000) {
        
        totalNew -= 500;
        // console.log (totalNew);
    } 
    return totalNew;
}

  
   console.log(calculate (30000, 12, 'G3H2Z1'));
   