const {formatedBookNames, nameAndAge, fantasyOrScienceFiction, oldBooksOrdered} = require('./index')

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
  it('Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia', () => {
    const expectedResult = [
      { 
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
      }
    ];
    expect(fantasyOrScienceFiction()).toEqual(expectedResult)
  })
  it('Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho', () => {
    const expectedResult = [
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
    ];
    expect(oldBooksOrdered()).toEqual(expectedResult)
  })
})