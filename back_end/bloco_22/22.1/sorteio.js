const readline = require('readline-sync');

const random = Math.trunc(Math.random() * 11);
const askQuest = readline.questionInt('Escolha um número de 0 a 10: ')

askQuest === random ? console.log('\nParabéns, número correto!') : console.log(`\nOpa, não foi dessa vez. O número era ${random}`);
