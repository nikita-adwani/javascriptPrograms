var readLineSync = require('readline-sync')
var array1 = [];
var array2 = [];

function differenceInArray() {
    var arrayLimit1 = readLineSync.question("Enter the limit of 1st array: ");
    arrayLimit1 - parseInt(arrayLimit1);
    for (i = 0; i < arrayLimit1; i++) {
        var arrayElement1 = readLineSync.question("Enter the elements of 1st array: ");
        array1.push(arrayElement1);
    }
    var arraylimit2 = readLineSync.question("Enter the limit of 2nd array: ");
    arraylimit2 = parseInt(arraylimit2);
    for (j = 0; j < arraylimit2; j++) {
        var arrayElement2 = readLineSync.question("Enter the elements of 2nd array: ");
        array2.push(arrayElement2);
    }
    var ResultingArray = array1.concat(array2).filter(ele => !array1.includes(ele) || !array2.includes(ele));
    console.log("elements of 1st array are: ")
    console.log(array1);
    console.log("Elements of 2nd array are: ");
    console.log(array2);
    console.log("The difference in both array is: ");
    console.log(ResultingArray);


}
differenceInArray();