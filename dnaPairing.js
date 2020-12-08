function pairElement(str) {
    var paired = [];
    var search = function(char) {
        switch (char) {
            case "A":
                paired.push(["A", "T"]);
                break;
            case "T":
                paired.push(["T", "A"]);
                break;
            case "C":
                paired.push(["C", "G"]);
                break;
            case "G":
                paired.push(["G", "C"]);
                break;
        }
    };

    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
        search(str[i]);
    }
    console.log("pairing of DNA looks like: ")
    console.log(paired);
}

// test here
pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");