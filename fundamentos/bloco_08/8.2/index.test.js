const {authorBornIn1947, smallerName} = require('./index');

describe('Lista de Livros', () => {
  test('Encontra o nome da primeira pessoa autora do livro nascida no ano de 1947.', () => expect(authorBornIn1947()).toEqual('Stephen King'))
  test('Retorne o nome do livro de menor nome.', () => expect(smallerName()).toEqual('Duna'))
});
