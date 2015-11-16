(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var result = numbers.filter(function(n){
        return n < 5;
    });

    console.log("Numbers < 5:"); 

    result.forEach(function(item) {
        console.log(item);
    });
})();
