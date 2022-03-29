const customError = require('../customError');
const cepModel = require('../models/cepModel');

const getById = async (cep) => {
  const regex = /\d{5}-?\d{3}/;
  if (!regex.test(cep)) throw customError("invalidData", "CEP inválido", 400);
  const cepCatched = await cepModel.getById(cep);
  if (cepCatched.length === 0) throw customError("notFound", "CEP não encontrado", 404);
  return cepCatched;
};

module.exports = {getById};
