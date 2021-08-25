// task 1

console.log("\n Retorna a adição, subtração, muultiplicação, divisão e modulo entre os números (a,b)")

let a = 26
let b = 15

const adicao = a + b
const subtracao = a - b
const multiplicacao = a * b
const divisao = a / b
const modulo = a % b

console.log(adicao,subtracao,multiplicacao,divisao,modulo);

// task 2

console.log("\n programa que retorne o maior de dois números (c,d)");

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

console.log("\n programa que retorne o maior de três números (e,f,g)");

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

console.log("\n programa que, dado um valor definido numa constante (h), retorna 'positive' se esse valor for positivo, 'negative' se for negativo e 'zero' caso contrário.");

const h = 25

if (h > 0) {
  console.log("Positive");
}else if (h < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// task 5

console.log("\n programa que define três constantes (i,j,k) com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário");

const i = 30
const j = 60
const k = 90

if (i + j + k === 180) {
  console.log(true);
} else {
  console.log(false);
};

// task 6

console.log("\n programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz");

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