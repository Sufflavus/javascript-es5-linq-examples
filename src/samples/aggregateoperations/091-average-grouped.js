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
    }, []).map(function(g, index) {
        return { 
            category: g.key, 
            averagePrice: g.values.reduce(function(sum, product) {
                    return sum + product.UnitPrice;
                }, 0) / g.values.length
        };
    });

    categories.forEach(function(p) {
        console.log("Category=" + p.category + "  AveragePrice=" + p.averagePrice);
    });
})();