(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var lowNums = numbers.filter(function(n){
        return n < 5;
    });

    console.log("Numbers < 5:"); 

    lowNums.forEach(function(x) {
        console.log(x);
    });
})();
