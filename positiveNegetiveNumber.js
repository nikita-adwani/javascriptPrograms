// to checking wheather one no. is +ve 0r-ve 
function positiveOrNegetive(num1, num2) { //function with Parameters
    if ((num1 < 0 && num2 > 0) || num1 > 0 && num2 < 0) {
        return ("yes one is positive and one is negetive.");
    } else {
        return ("No the signs of numbers are same.");
    }
}
// passing arguments
console.log(positiveOrNegetive(2, 2));
console.log(positiveOrNegetive(-2, 2));
console.log(positiveOrNegetive(2, -2));
console.log(positiveOrNegetive(-2, -2));