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
        return { 
            category: g.key, 
            mostExpensivePrice: Math.max.apply(null, g.values.map(function(p) {
                return p.UnitPrice;
            }))
        };
    });

    categories.forEach(function(p) {
        console.log("Category=" + p.category + "  MostExpensivePrice=" + p.mostExpensivePrice);
    });
})();