var readLineSync = require('readline-sync');

function commonMultiple() {
    let array = [];
    let arrayLimit = readLineSync.question("Enter the number of digits you want to find even common multiple of:");
    arrayLimit = parseInt(arrayLimit);
    for (i = 0; i < arrayLimit; i++) {
        var number = readLineSync.question("Enter the number:");
        number = parseInt(number);
        array.push(number);
    }
    let max = Math.max(...array);
    let min = Math.min(...array);
    let lcm = max;

    for (let i = max - 1; i >= min; i--) {
        if (lcm % i) {
            lcm += max;
            i = max;
        }
    }
    console.log(`The least common even multiple is:${lcm}.`);

}
commonMultiple();