(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var textNums = numbers.map(function(n) {
        return strings[n];
    });

    console.log("Number strings:");

    textNums.forEach(function(s) {
        console.log(s);
    });
})();
