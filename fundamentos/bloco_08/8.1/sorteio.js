const verifyNumber = (a, b) => {
  const result = a === b ? 'Parabéns você ganhou' : 'Tente novamente';
  return result;
};

const luck = (number, verifying) => {
  const luckNumber = Math.round(Math.random() * 6 + 1);
  return verifying(number, luckNumber);
};

console.log(luck(3, verifyNumber));
