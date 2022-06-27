const numberTypeVerification = require('../index');
const { expect } = require('chai');

describe('Testes da função numberTypeVerification', () => {
    describe('verifica se a entrada da função é um numero', () => {
        it('Quando a entrada não é um numero', () => {
            const value = '3';
            const result = numberTypeVerification(value);
            expect(result).to.be.equals('O valor precisa ser um número');
        })
    })

    describe('verifica o retorno da função numberTypeVerification', () => {
        it('Se o valor for menor que 0', () => {
            const result = numberTypeVerification(-3);
            expect(result).to.be.equals('negativo');
        });
        it('Se o valor for maior que 0', () => {
            const result = numberTypeVerification(3);
            expect(result).to.be.equals('positivo');
        });
        it('Se o valor é igual a 0', () => {
            const result = numberTypeVerification(0);
            expect(result).to.be.equals('zero');
        });
    });
});