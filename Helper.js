const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

const generateArray = (size = 0, minValue = 0, maxValue = 1) =>Array.from({ length: size }, () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

const getDigit = (number, index) => {
    number = Math.abs(number).toString();
    index = number.length - 1 - index;
    return index >= 0 ? parseInt(number[index], 10) : 0;
};

const digitCount = (number) => number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number))) + 1;

const mostDigits = (array) => Math.max(...array.map(digitCount));

module.exports = {
    swap,
    generateArray,
    getDigit,
    digitCount,
    mostDigits
};