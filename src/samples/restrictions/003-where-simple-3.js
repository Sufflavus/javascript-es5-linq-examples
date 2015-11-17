(function() {
    var products = getProductList(); 

    var expensiveInStockProducts = products.filter(function(p) {
        return p.UnitsInStock > 0 && p.UnitPrice > 3;
    });

    console.log("In-stock products that cost more than 3.00:"); 

    expensiveInStockProducts.forEach(function(product) {
        console.log(product.ProductName + " is in stock and costs more than 3.00.");
    });
})();
