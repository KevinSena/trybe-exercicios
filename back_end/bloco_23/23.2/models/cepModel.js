const connection = require('./mysqlConnection');

const getById = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep=?', [cep]);
  return result;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const [result] = await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`,
    [cep, logradouro, bairro, localidade, uf]
  );
  return result;
};

module.exports = {getById, create};