(function() {
    var doubles = [1.7, 2.3, 1.9, 4.1, 2.9]; 

    var sortedDoubles = doubles.slice().sort(function(a, b) {
        return b - a;
    });

    console.log("The doubles from highest to lowest:"); 
    
    sortedDoubles.forEach(function(d) {
        console.log(d);
    });
})();
