const connection = require('./mysqlConnection');

const getById = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep=?', [cep]);
  return result;
};

module.exports = {getById};