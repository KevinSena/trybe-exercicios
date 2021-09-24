console.log('--- Task 1 ---');

const fatorial = (n) => {
  let multi = n
  for (let i = n - 1; i > 0; i -= 1) {
    multi *= i;
  }
  return multi
}

const result = (n) => n === 0 ? 1 : fatorial(n);
console.log(result(4));

console.log('\n--- Task 2 ---');
const longestWord = phrase => {
  const array = phrase.split(' ');
  let flag = 0;
  let index = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i].length > flag) {
      flag = array[i].length;
      index = array[i];
    }
  }
  console.log(index);
};

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
