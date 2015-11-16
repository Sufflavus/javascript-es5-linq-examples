(function() {
    var products = getProductList(); 

    var result = products.filter(function(p) {
        return p.unitsInStock > 0 && p.unitPrice > 3;
    });

    console.log("In-stock products that cost more than 3.00:"); 

    result.forEach(function(item) {
        console.log(item.productName + " is in stock and costs more than 3.00.");
    });
})();
