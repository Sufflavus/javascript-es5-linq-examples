(function() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 

    var uniqueNumbers = numbersA.concat(numbersB)
        .filter(function(n, index, array) {
            return array.indexOf(n) === index;
        });

    console.log("Unique numbers from both arrays:");
    uniqueNumbers.forEach(function(n) {
        console.log(n);
    });
})();