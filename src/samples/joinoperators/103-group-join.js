(function() {
    var categories = ["Beverages", "Condiments", "Vegetables", "Dairy Products", "Seafood"];
    var products = getProductList(); 

    var q = categories.reduce(function(array, c) {
        var ps = products.filter(function(p) {
            return c === p.Category;
        });

        array.push({ 
            category: c, 
            products: ps
        });

        return array;
    }, []);

    q.forEach(function(v) {
        console.log(v.category + ":"); 

        v.products.forEach(function(p) {
            console.log("   " + p.ProductName); 
        });
    });
})();