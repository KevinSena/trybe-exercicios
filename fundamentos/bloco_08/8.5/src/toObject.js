const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (...args) => args.map((el) => {
  const [car, branch, year] = el;
  return { carro: car, marca: branch, ano: year };
});

console.log(toObject(palio, shelbyCobra, chiron));
