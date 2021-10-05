const employedPerson = (name) => {
  const employedData = {};
  employedData.nome = name;

  const noSpaceName = name.replace(' ', '_').toLowerCase();
  employedData.email = `${noSpaceName}@trybe.com`;
  return employedData;
};

const newEmployees = (generator) => {
  const employees = {
    id1: generator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(employedPerson));
