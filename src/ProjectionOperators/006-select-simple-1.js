(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var result = numbers.map(function(n) {
        return n + 1;
    });

    result.forEach(function(item) {
        console.log(item);
    });
})();
