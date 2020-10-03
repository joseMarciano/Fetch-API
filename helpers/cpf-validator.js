function defaultInvalidCPFs(value) {
    const invalidsCPF = [];
    let invalidConcat = '';
    let count = 0;
    for (let i = 0; i < 10; i++) {
        invalidConcat = '';
        for (let j = 0; j < 11; j++) {
            invalidConcat += count.toString();
        }
        invalidsCPF.push(invalidConcat);
        count += 1;
    }

    /*
     * indexOf returns the first index that element can be find in the array
     * Returns -1 case the value is not present
     */
    return invalidsCPF.indexOf(value) === -1;
}

function sumNumbersCPF(cpf, totalDigits, peso) {
    let sum = 0;
    for (let i = 1; i <= totalDigits; i++) {
        sum += parseInt(cpf.substring(i - 1, i), 10) * (peso - i);
    }
    return sum;
}

const cpfValidator = (value) => {
    const invalidsCPF = defaultInvalidCPFs(value);
};