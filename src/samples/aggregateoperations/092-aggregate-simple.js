(function() {
    var doubles = [1.7, 2.3, 1.9, 4.1, 2.9];
    
    var product = doubles.reduce(function(runningProduct, nextFactor) {
        return runningProduct * nextFactor;
    }, 1); 

    console.log("Total product of all numbers: " + product);
})();