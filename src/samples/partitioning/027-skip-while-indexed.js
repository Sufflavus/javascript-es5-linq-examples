(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var laterNumbers = numbers.slice((function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n, index){
        return n >= index;
    }));

    console.log("All elements starting from first element less than its position:"); 

    laterNumbers.forEach(function(n) {
        console.log(n);
    });
})();
