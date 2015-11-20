(function() {
    var products = getProductList(); 

    var sortedProducts = products.slice().sort(function(p1, p2) {
        if (p1.ProductName < p2.ProductName) {
            return -1;
        }
        if (p1.ProductName > p2.ProductName) {
            return 1;
        }
        return 0;
    });

    sortedProducts.forEach(function(product) {
        console.log("ProductID=" + product.ProductID + " ProductName=" + product.ProductName + " Category=" + 
            product.Category + " UnitPrice=" + product.UnitPrice + " UnitsInStock=" + product.UnitsInStock);
    });
})();
