console.log('--- Task 1 ---');
const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

console.log('\n--- Task 1 ---');

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a-b)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);