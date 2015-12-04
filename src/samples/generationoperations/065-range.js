(function() {
    var numbers = Array.apply(null, Array(50))
        .map(function(element, index) {
            return index + 100;  
        }).map(function(n) {
            return { 
                number: n, 
                oddEven: n % 2 === 1 ? "odd" : "even" 
            };
        }); 
    
    numbers.forEach(function(n) {
        console.log("The number " + n.number + " is " + n.oddEven + ".");
    });
})();