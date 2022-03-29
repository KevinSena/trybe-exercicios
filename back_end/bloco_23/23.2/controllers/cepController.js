const cepService = require('../services/cepService');

const getById = async (req, res, next) => {
  try {
    const {cep} = req.params;
    const cepCatched = await cepService.getById(cep);
    res.status(200).json(cepCatched);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const {cep, logradouro, bairro, localidade, uf} = req.body
    const cepCreated = await cepService.create(cep, logradouro, bairro, localidade, uf);
    res.status(201).json(cepCreated);
  } catch (error) {
    next(error);
  }
};

module.exports = {getById, create}