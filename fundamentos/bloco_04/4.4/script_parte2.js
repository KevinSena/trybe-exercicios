// task 1
/*
function verificaPalindromo(palindromo) {
  let array = []
  array1 = palindromo.split('')
  let reversed = array1.reverse()
  let reversed_string = reversed.join('')

  if (reversed_string === palindromo) {
    return true
  }else {
    return false
  }
}

let verificar = verificaPalindromo('arara')
console.log(verificar);
*/

// Task 2
/*
let arrayTeste = [2, 3, 6, 7, 10, 1]

function maiorValor(array) {
  let flag = 0
  for (let key in array) {
    if (array[key] > array[flag]) {
      flag = key
    }
  }
  console.log(flag);
}

maiorValor(arrayTeste)
*/

// Task 3
/*
let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3]

function maiorValor(array) {
  let flag = 0
  for (let key in array) {
    if (array[key] < array[flag]) {
      flag = key
    }
  }
  console.log(flag);
}

maiorValor(arrayTeste2)
*/

// Task 4
/*
let arrayTeste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNome(array) {
  let flag = 'dois'
  for (let key in array) {
    if (array[key].length > flag.length) {
      flag = array[key]
    }
  }
  console.log(flag);
}

maiorNome(arrayTeste3)
*/

// Task 5

let arrayTeste4 = [2, 3, 2, 5, 8, 2, 3]

function maisSeRepete(array) {
  let flag = 0
  let objectSeted = 0
  
  for (let i = 0; i < array.length; i += 1) {
    let count = 0
    for (let iterator of array) {
      if (array[i] === iterator) {
        count += 1
        if (count > flag) {
          flag = count
          objectSeted = array[i]
        }
      }
    }
  }

  console.log(objectSeted);
}

maisSeRepete(arrayTeste4)