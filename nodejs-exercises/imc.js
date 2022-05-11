const IMC = (peso, altura) => {
    console.log(`Sua altura: ${altura} metros, seu peso: ${peso} kilos`);
    const valorAltura = altura * altura;
    const personIMC = peso / valorAltura;
    return personIMC;
}

module.exports = IMC
