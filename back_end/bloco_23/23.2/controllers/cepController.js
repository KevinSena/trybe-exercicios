const cepService = require('../services/cepService');

const getById = async (req, res, next) => {
  try {
    const {cep} = req.params;
    const cepCatched = await cepService.getById(cep);
    res.status(200).json(cepCatched);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {getById}