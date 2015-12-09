(function() {
    var products = getProductList();
    
    var categoryCounts = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
        return { category: g.key, productCount: g.values.length };
    });

    categoryCounts.forEach(function(p) {
        console.log("Category=" + p.category + "  ProductCount=" + p.productCount);
    });
})();