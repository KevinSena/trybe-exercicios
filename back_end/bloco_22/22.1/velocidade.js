const readline = require('readline-sync');

const speedCalc = (distance, time) => distance / time;
const distance = readline.questionInt('Quantos metros percorridos? ');
const time = readline.questionInt('Em quantos segundos foi percorrido? ')

console.log(`\n A velocidade calculada é ${speedCalc(distance, time)} m/s`);
