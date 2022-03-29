const express = require('express');
const router = express.Router();
const cepController = require('../controllers/cepController');

router
  .get('/:cep', cepController.getById)
  .post('/', cepController.create);

module.exports = router;