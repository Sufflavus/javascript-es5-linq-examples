(function() {
    var products = getProductList();
    
    var productGroups = products.filter(function(p) {
        return p.UnitsInStock === 0;
    }).reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
        return { category: g.key, products: g.values };
    });

    productGroups.forEach(function(g) {
        console.log("Category=" + g.category + " Products=...");
        g.products.forEach(function(p) {
            console.log("Products: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
})();