(function() {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var reversedIDigits = digits.filter(function(d) {
        return d[1] === "i";
    }).reverse();

    console.log("A backwards list of the digits with a second character of 'i':");

    reversedIDigits.forEach(function(d) {
        console.log(d);
    });
})();
