const customError = require('../customError');
const cepModel = require('../models/cepModel');
const Joi = require('joi');

const cepSchema = Joi.object({
  cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  logradouro: Joi.string().alphanum().max(50).required(),
  bairro: Joi.string().alphanum().max(20).required(),
  localidade: Joi.string().alphanum().max(20).required(),
  uf: Joi.string().alphanum().min(2).max(2).required()
});

const getById = async (cep) => {
  const regex = /\d{5}-?\d{3}/;
  if (!regex.test(cep)) throw customError("invalidData", "CEP inválido", 400);
  const cepCatched = await cepModel.getById(cep);
  if (cepCatched.length === 0) throw customError("notFound", "CEP não encontrado", 404);
  return cepCatched;
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const validation = await cepSchema.validateAsync({cep, logradouro, bairro, localidade, uf});
  if (validation.error) throw customError("invalidData", validation.error, 400);

  const cepCatched = await cepModel.getById(cep);
  if (cepCatched.length !== 0) throw customError("alreadyExists", "CEP já existente", 409);

  const cepCreated = await cepModel.create(cep, logradouro, bairro, localidade, uf);
  if (cepCreated.affectedRows > 0) return {cep, logradouro, bairro, localidade, uf};
  return cepCreated;
};

module.exports = {getById, create};
