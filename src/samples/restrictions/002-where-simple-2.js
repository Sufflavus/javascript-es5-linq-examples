(function() {
    var products = getProductList(); 

    var soldOutProducts = products.filter(function(p) {
        return p.UnitsInStock === 0;
    });

    console.log("Sold out products:"); 

    soldOutProducts.forEach(function(product) {
        console.log(product.ProductName + " is sold out!");
    });
})();
