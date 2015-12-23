(function() {
    var categories = ["Beverages", "Condiments", "Vegetables", "Dairy Products", "Seafood"];
    var products = getProductList(); 

    var q = categories.reduce(function(array, c) {
        var ps = products.filter(function(p) {
            return c === p.Category;
        });
        
        if(ps.length) {
            ps.forEach(function(p) {
                array.push({ 
                    category: c, 
                    productName: p.ProductName 
                });
            });
        } else {
            array.push({ 
                category: c, 
                productName: "(No products)"
            });
        }
        
        return array;
    }, []);

    q.forEach(function(v) {
        console.log(v.productName + ": " + v.category);
    });
})();