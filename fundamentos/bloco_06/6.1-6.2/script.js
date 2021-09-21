function q(param) {
  return document.body.querySelector(param)
}

function qAll(param) {
  return document.body.querySelectorAll(param)
}

const stateList = ['Acre','Alagoas','Amapá','Amazonas','Ba,hia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

function putSelect(array) {
  select = q('#select-state')
  for (let i = 0; i < array.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = array[i];
    select.add(option);
  }
}

putSelect(stateList)
