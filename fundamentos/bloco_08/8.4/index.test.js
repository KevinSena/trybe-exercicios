const {reduceNames, averageAge, longestNamedBook, containsA} = require('./index');

describe('Execícios dia 8.4', () => {
  it('Crie uma string com os nomes de todas as pessoas autoras', () => {
    const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
    expect(reduceNames()).toEqual(expectedResult)
  })
  it('Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.', () => {
    const expectedResult = 43;
    expect(averageAge()).toEqual(expectedResult)
  })
  it('Encontre o livro com o maior nome.', () => {
    const expectedResult = {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    };
    expect(longestNamedBook()).toEqual(expectedResult)
  })
  it('retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.', () => {
    expect(containsA()).toEqual(20)
  })
})