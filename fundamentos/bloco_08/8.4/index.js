/* eslint-disable no-param-reassign */
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

const reduceNames = () => books.reduce((returned, current, index) => {
  if (returned === '') return current.author.name;
  if (index === books.length - 1) return `${returned}, ${current.author.name}.`;
  return `${returned}, ${current.author.name}`;
}, '');

const averageAge = () => books.reduce((returned, { releaseYear, author }, index) => {
  const age = releaseYear - author.birthYear;
  return index + 1 === books.length ? ((returned + age) / books.length) : returned + age;
}, 0);

const longestNamedBook = () => books
  .reduce((prev, curr) => (curr.name.length > prev.name ? curr : prev));

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((prev, curr) => {
  prev += curr.toLowerCase().split('').filter((el) => el === 'a').length;
  return prev;
}, 0);

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((prev, curr) => prev.concat(curr), []);

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => students.reduce((prev, curr, index) => {
  const nota = grades[index].reduce((a, b) => a + b) / grades[index].length;
  const obj = {
    name: curr,
    average: nota,
  };
  prev.push(obj);
  return prev;
}, []);

module.exports = {
  reduceNames,
  averageAge,
  longestNamedBook,
  containsA,
  flatten,
  studentAverage,
};
