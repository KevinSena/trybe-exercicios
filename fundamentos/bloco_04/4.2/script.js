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

// task 4

console.log("\nCom o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 'valor maior que 20'. Caso não seja, imprima a mensagem: 'valor menor ou igual a 20':")
if (mediaAritmetica > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor que 20");
}

// task 5

console.log("\nUtilizando for , descubra qual o maior valor contido no array e imprima-o:");

let maiorValor = numbers[0]

for (let index = 1; index < numbers.length; index+=1) {
  if(numbers[index] > maiorValor){
    maiorValor = numbers[index]
  }
}

console.log(maiorValor);

// task 6

console.log("\nDescubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: 'nenhum valor ímpar encontrado'");

let numeroImpares = 0

for (let i = 0; i < numbers.length; i+=1) {
  if(numbers[i]%2 !== 0){
    numeroImpares += 1
    console.log(numbers[i])
  }
}

if(numeroImpares === 0){
  console.log("nenhum valor ímpar encontrado");
}

// task 7 

console.log("\nUtilizando for , descubra qual o menor valor contido no array e imprima-o");

let menorValor = numbers[0]

for (let index = 1; index < numbers.length; index+=1) {
  if(numbers[index] < menorValor){
    menorValor = numbers[index]
  }
}

console.log(menorValor);