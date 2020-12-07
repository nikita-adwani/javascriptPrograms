var readLineSync = require('readline-sync');

function getIndexOfNumberInArray() {
    let array = [];
    let limitOfArray = readLineSync.question("Enter the Limit of array:");
    limitOfArray = parseInt(limitOfArray);
    if (limitOfArray >= 2) {
        for (let i = 0; i < limitOfArray; i++) {
            let elementOfArray = readLineSync.question("Enter the elements of array:");
            elementOfArray = parseInt(elementOfArray);
            array.push(elementOfArray);
            array.sort((a, b) => a - b);
        }
        let numberToCheck = readLineSync.question("Enter the number to check the index where it belongs in array:");
        numberToCheck = parseInt(numberToCheck);
        for (j = 0; j < array.length; j++) {
            if (array[j] >= numberToCheck) {
                console.log(array);
                console.log(`The index of number that is greater than ${numberToCheck} is: ${j}.`);
                return;
            } else {
                console.log(array);
                console.log(`All the elements in entered array are smaller than ${numberToCheck}.`);
            }
        }
    } else {
        console.log("Please the limit of array more than 1.");
    }
}
getIndexOfNumberInArray();