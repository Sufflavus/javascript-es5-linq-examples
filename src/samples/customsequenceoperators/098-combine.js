(function() {
    var vectorA = [0, 2, 4, 5, 6]; 
    var vectorB = [1, 3, 5, 7, 8]; 
     
    var dotProduct = vectorA.map(function(a, index) {
        return a * vectorB[index];
    }).reduce(function(sum, number) {
        return sum + number;
    }, 0); 
     
    console.log("Dot product: " + dotProduct); 
})();