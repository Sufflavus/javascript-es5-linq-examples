(function() {
    var factorsOf300 = [2, 2, 3, 5, 5]; 

    var uniqueFactors = factorsOf300.filter(function(f, index, array) {
        return array.indexOf(f) === index;
    });

    console.log("Prime factors of 300:");
    uniqueFactors.forEach(function(f) {
        console.log(f);
    });
})();