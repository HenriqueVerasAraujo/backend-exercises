const readlineSync = require('readline-sync');
const imc = require('./imc');

const peso = readlineSync.question('Qual o seu peso em kilos? ');
const altura = readlineSync.question('Qual a sua altura em metros? ');

const main = (peso, altura) => {
    const IMC_VALUE = imc(peso, altura)
    console.log(`Seu IMC é de ${IMC_VALUE}`);
    let TABLE_VALUE;
    if(IMC_VALUE <= 18) {
        TABLE_VALUE = 'Abaixo do peso (magreza)';
    }
    if(IMC_VALUE > 18 || IMC_VALUE <= 24,9) {
        TABLE_VALUE = 'Peso normal';
    }
    if(IMC_VALUE > 30 || IMC_VALUE <= 45) {
        TABLE_VALUE = 'Obesidade grau I';
    } else {
        TABLE_VALUE = 'Dados não computados'
    }
    console.log(TABLE_VALUE);
}

main(peso, altura);