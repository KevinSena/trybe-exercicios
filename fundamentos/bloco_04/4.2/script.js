let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// task 1

console.log("Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()");

for (const number of numbers) {
  console.log(number)
}

//task 2

console.log("\nPara o segundo exercício, some todos os valores contidos no array e imprima o resultado");

let soma = 0

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i]
}

console.log(soma);

// task 3

console.log("\nPara o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array");

let mediaAritmetica = 0

for (let i = 0; i < numbers.length; i++) {
  mediaAritmetica = soma/numbers.length
}

console.log(mediaAritmetica);