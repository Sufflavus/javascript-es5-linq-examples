(function() {
    var products = getProductList(); 

    var sortedProducts = products.slice().sort(function(p1, p2) {
        return p2.UnitsInStock - p1.UnitsInStock;
    });

    sortedProducts.forEach(function(product) {
        console.log("ProductID=" + product.ProductID + " ProductName=" + product.ProductName + " Category=" + 
            product.Category + " UnitPrice=" + product.UnitPrice + " UnitsInStock=" + product.UnitsInStock);
    });
})();
