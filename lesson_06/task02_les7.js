'use strict'

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    const sum = allСashbox.reduce((a, b) => a +b);
    const avg = sum / allСashbox.length;

    return Math.floor(avg);

}

console.log(getAverageValue(allСashbox))

