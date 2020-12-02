var readlineSync = require('readline-sync');
var temp

function swapHalf() {
    var limitOfArray = readlineSync.question('Enter the limit of array:');
    console.log("Limit is : " + limitOfArray);

    var array = [];
    if (limitOfArray > 0) {
        for (i = 0; i < limitOfArray; i++) {
            var elementsOfArray = readlineSync.question('Enter the elements of array:');
            array.push(parseInt(elementsOfArray));
        }
        console.log(array);
    }
    if (array.length % 2 == 0) {
        for (i = 0; i < array.length / 2; i++) {
            temp = array[i];
            array[i] = array[i + array.length / 2];
            array[i + array.length / 2] = temp;
        }
        console.log(array);
    } else {
        console.log("Hy!! Enter the even number limit");
    }
}
swapHalf();