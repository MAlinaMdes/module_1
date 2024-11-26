'use strict'
// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие


// Пример:  "привет Мир" => "Привет мир"



  const text = (str) => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  };

  const newText = text ('сегодня пятница')
  console.log(newText)