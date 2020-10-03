function verifyDefaultInvalidCPFs(value) {
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

function verifyDigits(cpf, totalDigits, peso, digitVerify) {
    const sum = sumNumbersCPF(cpf, totalDigits, peso);
    const rest = (sum * 10) % 11;
    return rest === digitVerify;
}

function verifyFirstDigit(cpf) {
    const peso = 11;
    const totalDigitsFirstPart = 9;
    const verificationDigit = parseInt(cpf.substring(9, 10), 10);

    return verifyDigits(cpf, totalDigitsFirstPart, peso, verificationDigit);
}

function verifySecondDigit(cpf) {
    const peso = 12;
    const totalDigitsSecondPart = 10;
    const verificationDigit = parseInt(cpf.substring(10, 11), 10);

    return verifyDigits(cpf, totalDigitsSecondPart, peso, verificationDigit);
}

const cpfValidator = (cpf) => {
    const cpfWithOnlyNumber = cpf.replace(/\D/g, ''); // usando Regexp, faço um replace em todos os digitos que não são numeros;
    return verifyFirstDigit(cpfWithOnlyNumber) &&
        verifySecondDigit(cpfWithOnlyNumber) &&
        verifyDefaultInvalidCPFs(cpfWithOnlyNumber);
};