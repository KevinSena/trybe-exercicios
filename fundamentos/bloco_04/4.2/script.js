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
  soma = soma + numbers[i]
}

console.log(soma);