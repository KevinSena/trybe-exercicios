const {formatedBookNames, nameAndAge} = require('./index')

describe('Usando map e filter', () => {
  it('Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA', () => {
    const expectedResult = [
      'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
      'Fundação - Ficção Científica - Isaac Asimov',
      'Duna - Ficção Científica - Frank Herbert',
      'A Coisa - Terror - Stephen King',
      'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
    ];
    expect(formatedBookNames()).toEqual(expectedResult)
  })
  it('Construa um array de objetos a partir do array de livros', () => {
    const expectedResult = [
      {
        age: 31,
        author: 'Isaac Asimov',
      },
      {
        age: 38,
        author: 'H. P. Lovecraft',
      },
      {
        age: 39,
        author: 'Stephen King',
      },
      {
        age: 43,
        author: 'George R. R. Martin',
      },
      {
        age: 45,
        author: 'Frank Herbert',
      },
      {
        age: 62,
        author: 'J. R. R. Tolkien',
      },
    ];
    expect(nameAndAge()).toEqual(expectedResult)
  })
})