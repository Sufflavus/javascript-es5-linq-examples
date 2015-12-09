(function() {
    var factorsOf300 = [2, 2, 3, 5, 5];
    
    var uniqueFactors = factorsOf300.filter(function(f, index, array) {
        return array.indexOf(f) === index;
    }).length; 

    console.log("There are " + uniqueFactors + " unique factors of 300.");
})();