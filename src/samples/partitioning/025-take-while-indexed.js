(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var firstSmallNumbers = numbers.slice(0, (function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n, index){
        return n >= index;
    }));

    console.log("First numbers not less than their position:"); 

    firstSmallNumbers.forEach(function(n) {
        console.log(n);
    });
})();
