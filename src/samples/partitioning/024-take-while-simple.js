(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var firstNumbersLessThan6 = numbers.slice(0, (function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n){
        return n < 6;
    }));

    console.log("First numbers less than 6:"); 

    firstNumbersLessThan6.forEach(function(n) {
        console.log(n);
    });
})();
