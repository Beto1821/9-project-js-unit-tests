const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  //   fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    test('Teste se productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function')
    });
    // Teste se o retorno da função é um array.
    test('Teste se o retorno da função é um array', () => {
        expect(Array.isArray(productDetails()));
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    test('Teste se o array retornado pela função contém dois itens dentro', () => {
      expect(Object.keys(productDetails()).length).toEqual(2);
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    test('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
      expect(typeof productDetails()[0]).toEqual('object');
      expect(typeof productDetails()[1]).toEqual('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    test('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
      const product = productDetails('123' , '456');
      expect(product[0].name[0]).not.toEqual(product[1].name[1]);
    });
    // Teste se os dois productIds terminam com 123.
    test('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
      const product = productDetails('aaa123' , 'aaa123');
      expect(product[0].details.productId.slice(-3)).toEqual(product[1].details.productId.slice(-3));
    });
  // });
});
