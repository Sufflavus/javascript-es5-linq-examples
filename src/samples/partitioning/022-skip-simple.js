(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var allButFirst4Numbers = numbers.slice(4);

    console.log("All but first 4 numbers:"); 

    allButFirst4Numbers.forEach(function(n) {
        console.log(n);
    });
})();
