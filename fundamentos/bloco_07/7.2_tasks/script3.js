// Desenvolva uma função que receba um array de objetos com cidades e estados e retorne um array contendo o nome da cidade e do estado concatenados.
​
// Ex:
const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  }
];
​
// Resultado esperado
//['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']
​
function buildCitiesArray(array) {
  const stringsArray = [];
  for (let obj of array) {
    stringsArray.push(`${obj.city} - ${obj.state}`);
    // const values = Object.values(obj);
    // const city = values[0];
    // const state = values[1];
    // stringsArray.push(`${city} - ${state}`)
  }
  return stringsArray;
}
​
console.log(buildCitiesArray(citiesAndStates));