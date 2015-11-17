(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numsPlusOne = numbers.map(function(n) {
        return n + 1;
    });

    console.log("Numbers + 1:"); 

    numsPlusOne.forEach(function(i) {
        console.log(i);
    });
})();
