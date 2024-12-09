// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.
'use strict'
function guessNumber (min, max) {
    
    let randomNumber = Math.floor(Math.random() * (max- min + 1)) + min;
     console.log(randomNumber)
    while(true) {
 
        let userNumber =  prompt(`Введите число`);
 
             
            if (userNumber > randomNumber) {
                prompt(`Меньше!Введите новый вариант`);  
            }
            else if (userNumber < randomNumber ) {
                prompt(`Больше!Введите новый вариант`);
            }
            else if (userNumber == randomNumber)  {
                alert(`Правильно!`);
            } 
             else if(userNumber == isNaN) {
                    prompt(`Введите число`);

                }                
                                          
            }
         }
    
 
 
console.log(guessNumber(1, 100));