(function() {
    var numbers = Array.apply(null, Array(10))
        .map(function() {
            return 7;
        });

    numbers.forEach(function(n) {
        console.log(n);
    });
})();