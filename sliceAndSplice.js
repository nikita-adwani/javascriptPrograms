var readlineSync = require('readline-sync');

function sliceSplice() {
    var array1 = [];
    var array2 = [];
    var arrayLimit1 = readlineSync.question("enter the limit of array: ")
    arrayLimit1 = parseInt(arrayLimit1);
    for (var i = 0; i < arrayLimit1; i++) {
        var arrayElement1 = readlineSync.question("Enter the elements of array: ");
        array1.push(arrayElement1);
    }
    console.log("The elements of array are: ");
    console.log(array1);
    var arrayLimit2 = readlineSync.question("enter the limit of array: ")
    arrayLimit2 = parseInt(arrayLimit2);
    for (var i = 0; i < arrayLimit2; i++) {
        var arrayElement2 = readlineSync.question("Enter the elements of array: ");
        array2.push(arrayElement2);
    }
    console.log("The elements of array are: ");
    console.log(array2);
    let number = readlineSync.question("Enter the number of elements that should copied from second array to first:");
    number = parseInt(number);
    let resultArray = array2.slice();
    for (let j = 0; j < array1.length; j++) {
        resultArray.splice(number, 0, array1[j]);
        number++
    }
    console.log(`The first array is:${array1} and the second array is:${array2}.`);
    console.log(`The resulting array after copying ${number} number of elements from second array is:${resultArray}.`)

}
sliceSplice();