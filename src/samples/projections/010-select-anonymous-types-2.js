(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var digitOddEvens = numbers.map(function(n){
        return { 
            digit: strings[n], 
            even: (n % 2 === 0) 
        };
    });

    digitOddEvens.forEach(function(d) {
        console.log("The digit " + d.digit + " is " + (d.even ? "even" : "odd"));
    });
})();
