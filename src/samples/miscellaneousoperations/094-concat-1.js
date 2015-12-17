(function() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9];
    var numbersB = [1, 3, 5, 7, 8];
    
    var allNumbers = numbersA.concat(numbersB);
    
    console.log("All numbers from both arrays:");

    allNumbers.forEach(function(n) { 
        console.log(n);
    });
})();