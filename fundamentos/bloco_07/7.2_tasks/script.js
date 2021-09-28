// Desenvolva uma função que receba um array como parâmetro e
// retorne um array com os números pares
​
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
​
const isEven = (val) => val % 2 === 0;
​
const getEvenNumbers = (array) => array.filter(isEven);
​
console.log(getEvenNumbers(arr)); // [2,4]