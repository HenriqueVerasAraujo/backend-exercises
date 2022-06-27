const numberTypeVerification = (number) => {
    if(typeof number !== "number") {
        return 'O valor precisa ser um número';
    }
    if (number < 0) return 'negativo'
    if (number > 0) return 'positivo'
    if (number === 0) return 'zero'
}

module.exports = numberTypeVerification;
