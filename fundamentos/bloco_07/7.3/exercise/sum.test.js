const { sum, myRemove, myFizzBuzz } = require('./sum');

describe('1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  test('Testa se o retorno de sum(4, 5) é 9', () => expect(sum(1, 2)).toBe(3));
  test('Testa se o retorno de sum(0, 0) é 0', () => expect(sum(0, 0)).toBe(0));
  test('Testa se a função sum lança um erro quando os parâmetros são 4 e "5"', () => expect(() => { sum(4, '5'); }).toThrow());
  test('Testa se a mensagem de erro é "parameters must be numbers"', () => expect(() => { sum(4, '5'); }).toThrowError(new Error('parameters must be numbers')));
});

describe('2 - Recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('3 - Recebe um número num e retorna se é "fizzbuzz"', () => {
  test('Chamada com um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Chamada com um número divisível por 3', () => {
    expect(myFizzBuzz(99)).toBe('fizz');
  });
  test('Chamada com um número divisível por 5', () => {
    expect(myFizzBuzz(55)).toBe('buzz');
  });
  test('Chamada com um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(47)).toBe(47);
  });
  test('Chamada com um número divisível por 3 e 5', () => {
    expect(myFizzBuzz('myself')).toBe(false);
  });
});
