const { expect } = require('chai');
const { simpleCalcFunction } = require('../index')


describe('Testa a função simpleCalcFunction', () => {
    it('testa resultados menores que 10', () => {
        const result = simpleCalcFunction(1, 3);
        expect(result).equals('valor menor que 10');
    });

    it('testa resultados maiores que 10', () => {
        const result = simpleCalcFunction(10, 3);
        expect(result).equals('valor maior que 10');
    })
});
