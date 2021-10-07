const {authorBornIn1947, smallerName, getNamedBook} = require('./index');

describe('Lista de Livros', () => {
  test('Encontra o nome da primeira pessoa autora do livro nascida no ano de 1947.', () => expect(authorBornIn1947()).toEqual('Stephen King'))
  test('Retorne o nome do livro de menor nome.', () => expect(smallerName()).toEqual('Duna'))
  test('Encontra o primeiro livro cujo nome possui 26 caracteres.', () => {
    const expectedResult = {
      author: {
        birthYear: 1948,
        name: 'George R. R. Martin',
      },
      genre: 'Fantasia',
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      releaseYear: 1991,
    };
    expect(getNamedBook()).toEqual(expectedResult)
  })
});
