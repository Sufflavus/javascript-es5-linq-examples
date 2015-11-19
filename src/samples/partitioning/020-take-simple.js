(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var first3Numbers = numbers.slice(0, 3);

    console.log("First 3 numbers:"); 

    first3Numbers.forEach(function(x) {
        console.log(x);
    });
})();
