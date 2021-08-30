// task 1

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


// Task 2


