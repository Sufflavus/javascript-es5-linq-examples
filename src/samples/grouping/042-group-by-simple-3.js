(function() {
    var products = getProductList();

    var orderGroups = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key !== key ? false : ((item.values.push(p)), true);
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
       return { category: g.key, products: g.values };
    });

    orderGroups.forEach(function(g) {
        console.log("Category=" + g.category + " Products=...");
        g.products.forEach(function(p) {
            console.log("Products: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
})();