(function() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g) {
        var maxPrice = Math.max.apply(null, g.values.map(function(p) {
            return p.UnitPrice;
        }));
        
        return { 
            category: g.key,
            mostExpensiveProducts: g.values.filter(function(p) {
                return p.UnitPrice === maxPrice;
            })
        };
    });

    categories.forEach(function(g) {
        console.log("Category=" + g.category + " MostExpensiveProducts=...");
        g.mostExpensiveProducts.forEach(function(p) {
            console.log("MostExpensiveProducts: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
})();