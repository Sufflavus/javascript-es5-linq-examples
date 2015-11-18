(function() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 
      
    var pairs = numbersA.map(function(a) {
        return numbersB.filter(function(b) { 
                return a < b; 
            }).map(function(b) {
                return {
                    a: a, 
                    b: b
                };
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    },[]);

    console.log("Pairs where a < b:");

    pairs.forEach(function(pair) {
        console.log(pair.a + " is less than " + pair.b);
    });

})();
