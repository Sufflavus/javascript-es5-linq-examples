(function() {
    var products = getProductList(); // function getProductList is in the file datacontext.js     

    console.log("Product Names:");
    
    var productNames = products.map(function(p) {
        return p.ProductName;
    });

    productNames.forEach(function(productName) {
        console.log(productName);
    });
})();
