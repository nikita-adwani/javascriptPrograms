function addTogether() {
    var args = arguments;
    var a = args[0];
    var b = args[1];

    function isNum(num) {
        return Number.isInteger(num);
    }
    if (isNum(a)) {
        if (isNum(b))
            console.log(a + b);
        else if (!b)
            return function(b) {
                if (isNum(b))
                    console.log(a + b);
            };
        console.log("The Sum of argument is: ")
    }
}

addTogether(2, 3);
addTogether(23, 30);