(function() {
    var numbers = [null, 1.0, "two", 3, "four", 5, "six", 7.0];

    var doubles = numbers.filter(function(n) {
        return n === Number(n) && n % 1 !== 0;
    });

    console.log("Numbers stored as doubles:"); 

    doubles.forEach(function (d) {
        console.log(d); 
    });
})();