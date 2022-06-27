const simpleCalcFunction = (val1, val2) => {
    if (val1 + val2 > 10) {
        return 'valor maior que 10'
    } else {
        return 'valor menor que 10'
    }
}

module.exports = {
    simpleCalcFunction
}
