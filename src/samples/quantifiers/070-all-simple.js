(function() {
    var numbers = [1, 11, 3, 19, 41, 65, 19];
    
    var onlyOdd = numbers.every(function(n) {
        return n % 2 === 1;
    }); 

    console.log("The list contains only odd numbers: " + onlyOdd);
})();