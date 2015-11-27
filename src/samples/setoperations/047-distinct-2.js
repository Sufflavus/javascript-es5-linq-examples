(function() {
    var products = getProductList();

    var categoryNames = products.map(function(p) {
        return p.Category;
    }).filter(function(p, index, array) {
        return array.indexOf(p) === index;
    });

    console.log("Category names:");
    categoryNames.forEach(function(n) {
        console.log(n);
    });
})();