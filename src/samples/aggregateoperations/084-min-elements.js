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
        var minPrice = Math.min.apply(Math, g.values.map(function(p) {
            return p.UnitPrice;
        }));
        
        return { 
            category: g.key,
            cheapestProducts: g.values.filter(function(p) {
                return p.UnitPrice === minPrice;
            })
        };
    });

    categories.forEach(function(g) {
        console.log("Category=" + g.category + " CheapestProducts=...");
        g.cheapestProducts.forEach(function(p) {
            console.log("CheapestProducts: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
})();