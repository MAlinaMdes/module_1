'use strict'

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

 const newNames = Array.from(names, function (val, i) {
   
        return 'Mr ' + val;
}
);
console.log(newNames);

// function addPrefix () {
//     const newNames =  Array.from(names, function (val, i) {
   
//                 return 'Mr ' + val;
//         });
// }

// console.log(addPrefix(names, 'Mr'))