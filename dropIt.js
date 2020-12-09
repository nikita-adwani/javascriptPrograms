var readLineSync = require('readline-sync');
var array = [];

function dropIt() {
    var arrayLimit = readLineSync.question("Enter the limit of array: ");
    arrayLimit = parseInt(arrayLimit);
    for (i = 0; i < arrayLimit; i++) {
        var arrayElements = readLineSync.question("Enter the Array Elements: ");
        arrayElements = parseInt(arrayElements);
        array.push(arrayElements);
    }

    //choices
    console.log("Choices:")
    console.log(`    1.Greater Than.
    2.Greater than or equal to.
    3.Small than or equal to.
    4.Smaller than.
    5.Equal to.
    6.Strictly Equal to.
    `)
    console.log("The array form looks like: ")
    console.log(array);

    var number = readLineSync.question("Enter the choice: ");
    number = parseInt(number);
    var num1 = readLineSync.question("Enter the number: ");
    num1 = parseInt(num1);
    var resultingArray = []
    switch (number) {
        case 1:
            {
                for (i = 0; i < array.length; i++) {
                    if (array[i] > num1)
                        resultingArray.push(array[i]);
                }
                console.log("The resulting array: ")
                console.log(resultingArray);
                break;
            }
        case 2:
            {
                for (i = 0; i < array.length; i++) {
                    if (array[i] >= num1)
                        resultingArray.push(array[i]);
                }
                console.log("The Resulting are:");
                console.log(resultingArray);
                break;
            }
        case 3:
            {
                for (i = 0; i < array.length; i++) {
                    if (array[i] <= num1)
                        resultingArray.push(array[i]);
                }
                console.log("The resulting array: ");
                console.log(resultingArray);
                break;
            }
        case 4:

            {
                for (i = 0; i < array.length; i++) {
                    if (array[i] < num1)
                        resultingArray.push(array[i]);
                }
                console.log("The resulting array: ");
                console.log(resultingArray);
                break;
            }
        case 5:
            {
                for (i = 0; i < array.length; i++) {
                    if (array[i] == num1)
                        resultingArray.push(array[i]);
                }
                console.log("The resulting array: ");
                console.log(resultingArray);
                break;
            }
        case 6:
            {
                for (i = 0; i < array.length; i++) {
                    if (array[i] === num1)
                        resultingArray.push(array[i]);
                }
                console.log("The resulting array: ");
                console.log(resultingArray);
                break;
            }
    }
}
dropIt();