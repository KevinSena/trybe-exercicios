// task 1

console.log("Imprime quadrado");

let n = 5
let linha1 = ''

for (let i = 0; i < n; i += 1) {
  linha1 += '*'
}

for (let i = 0; i < n; i += 1) {
  console.log(linha1)
}

// task 2

console.log("\nImprime triângulo retângulo com 5 asteriscos de base");

let linha2 = ''

for (let i = 0; i < n; i += 1) {
  linha2 += '*'
  console.log(linha2)
}

// task 3

console.log("\nImprime triângulo retângulo invertido");

let linha3 = ''

for (let i = n; i > 0; i -= 1) {
  linha3 += '*'
  let str = new Array(i)
  let newStr = str.join(' ') + linha3
  console.log(newStr);
}
