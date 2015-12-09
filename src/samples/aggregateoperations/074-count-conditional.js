(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var oddNumbers = numbers.filter(function(n) {
        return n % 2 === 1;
    }).length; 

    console.log("There are " + oddNumbers + " odd numbers in the list.");
})();