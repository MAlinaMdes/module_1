'use strict'

// Первая задача:


// Выведите в консоль таблицу степеней от 1 до 10 по аналогии как в уроке выводится таблица умножения



for (let i=1; i <= 10; i++) {
    console.log('------')
    for (let y=1; y <= 10; y++) {
        console.log(`${i} ** ${y} = ${i ** y}`)

    }
}