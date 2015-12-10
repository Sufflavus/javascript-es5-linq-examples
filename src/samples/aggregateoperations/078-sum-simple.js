(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var numSum = numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0); 

    console.log("The sum of the numbers is " + numSum + ".");
})();