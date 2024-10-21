'use strict'

{
  const item = 'smart проектор philips';
  const count = 15;
  const category = 'видео техника';
  const price = 1200;

  // console.log(item);
  // console.log(`общая сумма товара: ${count * price}`);
}

{
    const itemSecond = 'серьги';
    const categorySecond = 'jewellery'
}
  /**
  *   Создайте второй товар
  *   Другой категории
  */
  {
    const nameOfGood = prompt('Укажите наименование товара', '');
    const priceOfGood = Number(prompt('цена товара', ''));

    const countOfGood = Number(prompt('Количество товара', ''));
 
    const typeOfGood = prompt('Тип товара', '');

    // console.log(typeof(priceOfGood));
    // console.log(typeof(countOfGood));
    // console.log(`На складе ${countOfGood} единицы товара "${nameOfGood}" на сумму ${priceOfGood * countOfGood} ${typeOfGood}`);
  
   
    if (Number.isFinite(priceOfGood)) {
      console.log(`На складе ${countOfGood} единицы товара "${nameOfGood}" на сумму ${priceOfGood * countOfGood} ${typeOfGood}`);
    } else
       console.log('Вы ввели неккоректные данные!')



  }
  