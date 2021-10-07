const {authorBornIn1947, smallerName, getNamedBook, booksOrderedByReleaseYearDesc, everyoneWasBornOnSecXX, someBookWasReleaseOnThe80s, authorUnique} = require('./index');

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
  test('Ordene os livros por data de lançamento em ordem decrescente.', () => {
    const expectedResult = [
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991,
      },
      {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: { name: 'Stephen King', birthYear: 1947 },
        releaseYear: 1986,
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
    ];
    expect(booksOrderedByReleaseYearDesc()).toEqual(expectedResult)
  })
  test('Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.', () => {
    expect(everyoneWasBornOnSecXX()).toBeFalsy()
  })
  test('Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.', () => {
    expect(someBookWasReleaseOnThe80s()).toBeTruthy()
  })
  test('Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.', () => {
    expect(authorUnique()).toBeFalsy()
  })
});
