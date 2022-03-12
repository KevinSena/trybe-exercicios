const imcCalc = (weight, height) => weight / height ** 2;
const readline = require('readline-sync');

const weight = readline.questionFloat('Qual seu peso em Kg? ');
const height = readline.questionFloat('Qual sua altura em M? ');
const imc = imcCalc(weight, height);
let imcResult = '';

if (imc < 18.5) {
  imcResult = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 24.9) {
  imcResult = 'Peso normal';
} else if (imc >= 25 && imc <= 29.9) {
  imcResult = 'Acima do peso';
} else if (imc >= 30 && imc <= 34.9) {
  imcResult = 'Obesidade grau I';
} else if (imc >= 35 && imc <= 39.9) {
  imcResult = 'Obesidade grau II';
} else {
  imcResult = 'Obesidade grau III';
}

console.log(`\nSeu imc é: ${imc}\nO que te categoriza como ${imcResult}`);


module.exports = imcCalc;
