var readlineSync = require('readline-sync');
var changePosition = () => {
    var limitOfArray = readlineSync.question('Enter the limit of array:');
    limitOfArray = parseInt(limitOfArray);
    console.log("Limit is : " + limitOfArray);
    console.log(typeof limitOfArray);
    var array = [];
    if (limitOfArray >= 2) {
        for (i = 0; i < limitOfArray; i++) {
            var elementsOfArray = readlineSync.question('Enter the elements of array:');
            array.push(parseInt(elementsOfArray));
        }
        console.log(`The array entered is: ${array}`);
        var swapArray = [];
        var temp;
        for (i = 0; i < array.length; i++) {
            swapArray.push(array[i]);
        }
        temp = swapArray[0];
        swapArray[0] = swapArray[swapArray.length - 1];
        swapArray[swapArray.length - 1] = temp;
        console.log(`The resulted array is: ${swapArray}`);

    }
}
changePosition();
