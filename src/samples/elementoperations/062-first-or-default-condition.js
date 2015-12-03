(function() {
    var products = getProductList(); 
    var defaultProductValue = {};
 
    var product789 = products.filter(function(p) {
        return p.ProductID === 789;
    })[0] || defaultProductValue; 
    
    console.log("Product 789 exists: " + !product789);
})();