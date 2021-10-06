const verifyNumber = (a, b) => (a === b ? 'Parabéns você ganhou' : 'Tente novamente');

const luck = (number, verifying) => {
  const luckNumber = Math.round(Math.random() * 6 + 1);
  return verifying(number, luckNumber);
};

console.log(luck(3, verifyNumber));
