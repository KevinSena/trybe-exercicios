const {reduceNames} = require('./index');

describe('Execícios dia 8.4', () => {
  it('Crie uma string com os nomes de todas as pessoas autoras', () => {
    const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
    expect(reduceNames()).toEqual(expectedResult)
  }) 
})