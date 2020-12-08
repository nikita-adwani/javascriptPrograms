var readLineSync = require('readline-sync');
(function uniqueArray() {
    let mainArray = [];
    let uniqueArray = [];
    let arrayLimit = readLineSync.question("Enter the limit of main Array:");
    arrayLimit = parseInt(arrayLimit);
    for (let i = 0; i < arrayLimit; i++) {
        let subArrayLimit = readLineSync.question(`Enter the limit of subarray:`);
        subArrayLimit = parseInt(subArrayLimit);
        let arr = [];
        for (let j = 0; j < subArrayLimit; j++) {
            let subArrayElement = readLineSync.question("Enter the elements of subarray:");
            arr[j] = subArrayElement;
        }
        mainArray[i] = arr;
    }
    for (var k = 0; k < mainArray.length; k++) {
        for (var m = 0; m < mainArray[k].length; m++) {
            if (!uniqueArray.includes(mainArray[k][m])) {
                let uniqueElement = mainArray[k][m]
                uniqueArray.push(uniqueElement);
            }
        }
    }
    console.log("Array entered:");
    console.log(mainArray);
    console.log("Array of unique elements:");
    console.log(uniqueArray);
})();