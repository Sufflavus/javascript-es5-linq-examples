(function() {
    var categories = ["Beverages", "Condiments", "Vegetables", "Dairy Products", "Seafood"];
    var products = getProductList(); 

    var q = categories.reduce(function(array, c) {
        products.filter(function(p) {
            return c === p.Category;
        }).forEach(function(p) {
            array.push({ 
                category: c, 
                productName: p.ProductName 
            });
        });

        return array;
    }, []);

    q.forEach(function(v) {
        console.log(v.productName + ": " + v.category);
    });
})();