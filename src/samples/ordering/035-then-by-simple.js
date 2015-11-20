(function() {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var sortedDigits = digits.slice().sort(function(d1, d2) {
        if (d1.length > d2.length) {
            return 1;
        } 
        if (d1.length < d2.length) { 
            return -1;
        }

        if (d1 > d2) { 
            return 1;
        } 
        if (d1 < d2) {
            return -1
        } 
        return 0;
    });

    console.log("Sorted digits:"); 
    
    sortedDigits.forEach(function(d) {
        console.log(d);
    });
})();
