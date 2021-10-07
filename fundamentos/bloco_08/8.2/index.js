const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = () => {
  const found = books.find((e) => e.author.birthYear === 1947);
  return found.author.name;
};

const smallerName = () => {
  let namebook;

  books.forEach((e) => {
    if (namebook === undefined) namebook = e.name;
    else if (e.name.length < namebook.length) namebook = e.name;
  });

  return namebook;
};

const getNamedBook = () => books.find((e) => e.name.length === 26);

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear);

const everyoneWasBornOnSecXX = () => books.every((e) => e.author.birthYear >= 1900);
// eslint-disable-next-line max-len
const someBookWasReleaseOnThe80s = () => books.some((e) => e.releaseYear >= 1980 && e.releaseYear < 1990);

const authorUnique = () => {
  let state = true;
  books.forEach((e) => {
    const actual = e.author.birthYear;
    const found = books.find((el) => el.author.birthYear === actual && el.id !== e.id);
    if (found !== undefined) state = false;
  });
  return state;
};

module.exports = {
  authorBornIn1947,
  smallerName,
  getNamedBook,
  booksOrderedByReleaseYearDesc,
  everyoneWasBornOnSecXX,
  someBookWasReleaseOnThe80s,
  authorUnique,
};
