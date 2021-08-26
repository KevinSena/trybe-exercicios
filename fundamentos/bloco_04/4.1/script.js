// task 1

console.log("\nRetorna a adição, subtração, muultiplicação, divisão e modulo entre os números (a,b)")

let a = 26
let b = 15

const adicao = a + b
const subtracao = a - b
const multiplicacao = a * b
const divisao = a / b
const modulo = a % b

console.log(adicao,subtracao,multiplicacao,divisao,modulo);

// task 2

console.log("\nprograma que retorne o maior de dois números (c,d)");

const c = 39
const d = 18

if(c > d){
  console.log( c)
}else if(d > c){
  console.log(d)
}else{
  return false
}

// task 3

console.log("\nprograma que retorne o maior de três números (e,f,g)");

const e = 82
const f = 46
const g = 85

if(e > f && e > g){
  console.log(e);
}else if (f > e && f > g){
  console.log(f);
}else{
  console.log(g);
}

// task 4

console.log("\nprograma que, dado um valor definido numa constante (h), retorna 'positive' se esse valor for positivo, 'negative' se for negativo e 'zero' caso contrário.");

const h = 25

if (h > 0) {
  console.log("Positive");
}else if (h < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// task 5

console.log("\nprograma que define três constantes (i,j,k) com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário");

const i = 30
const j = 60
const k = 90

if (i + j + k === 180) {
  console.log(true);
} else {
  console.log(false);
};

// task 6

console.log("\nprograma que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz");

let peca = "Bishop"
peca = peca.toLowerCase()


switch (peca) {
  case "king":
    console.log("one square in any direction, so long as that square is not attacked by an enemy piece.");
    break;
  case "queen":
    console.log("diagonally, horizontally, or vertically any number of squares.");
    break
  case "rook":
    console.log("horizontally or vertically any number of squares.");
    break
  case "bishop":
    console.log("diagonally any number of squares");
    break
  case "knight":
    console.log("in an ‘L’ shape’");
    break
  case "pawn":
    console.log("vertically forward one square, with the option to move two squares if they have not yet moved");
    break
  default:
    break;
}

// task 7

console.log("\nprograma que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F");

let nota = 85.3

if (nota < 0 || nota > 100) {
  console.log("Nota Incorreta");
} else if(nota >= 90){
  console.log("Nota A");
} else if(nota >= 80){
  console.log("Nota B");
} else if(nota >= 70){
  console.log("Nota C");
} else if(nota >= 60){
  console.log("Nota D");
} else if(nota >= 50){
  console.log("Nota E");
} else{
  console.log("Nota F");
}

// task 8

console.log("\nprograma que defina três números em constantes (l,m,n) e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false");

const l = 65
const m = 43
const n = 14

if (l % 2 === 0 || m % 2 === 0 || n % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// task 9

console.log("\nprograma que defina três números em constantes (o,p,q) e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false");

const o = 21
const p = 54
const q = 116

if (o % 2 !== 0 || p % 2 !== 0 || q % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

// task 10

console.log("\nprograma que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.");

const valorCusto = 1000
const valorVenda = 1500

const valorCustoTotal = valorCusto + valorCusto*0.2
const lucro = valorVenda - valorCustoTotal
const lucroTotal = lucro*1000

if (valorCusto <= 0 ||  valorVenda <= 0 ) {
  console.log("valores de entrada incorretos");
} else{
  console.log("Lucro de " + lucro + " reais por produto"+"\nLucro total de " + lucroTotal + " reais");
}

// task 11

console.log("\nSalário deduzido o imposto de renda e INSS");

const salarioBruto = 3000
var salario = 0

if (salarioBruto < 1556.94) {
  salario -= salario*8/100
  return salario
}else if(salarioBruto >= 1556.95 && salarioBruto < 2594.92){
  salario -= salario*9/100
  return salario
}else if(salarioBruto >= 2594.92 && salarioBruto <5189.82){
  salario = salario - salario * 0.11
  console.log(salario);
}else{
  salario -= 570.88
  return salario
}


/*if (salario < 1903.98) {
  salario 
}
*/
