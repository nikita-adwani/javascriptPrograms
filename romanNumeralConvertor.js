var readLineSync = require('readline-sync');

function romanNumeralConverter() {
    const converter = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numberToConvert = readLineSync.question("Enter the number to convert in Roman Number:");
    numberToConvert = parseInt(numberToConvert);
    let num = numberToConvert;
    let result = ''
    let i = 0;
    while (numberToConvert > 0) {
        const substract = numbers[i];
        if (substract > numberToConvert) {
            i++
        } else {
            numberToConvert -= substract;
            result += converter[substract];
        }
    }
    console.log(`The Roman number of the entered number is: ${result}`);
}
romanNumeralConverter();