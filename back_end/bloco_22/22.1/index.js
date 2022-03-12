const rl = require('readline-sync');

const result = rl.questionInt('Digite o número do scrpit correspondente\n1) imc\n2) sorteio\n3) velocidade\n\n');

switch (result) {
  case 1:
    require('./imc');
    break;

  case 2:
    require('./sorteio');
    break;

  case 3:
    require('./velocidade');
    break;

  default:
    console.log('invalid option');
    break;
}