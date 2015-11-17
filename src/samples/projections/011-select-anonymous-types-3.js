(function() {
    var products = getProductList();  // function getProductList is in the file datacontext.js  
    
    var productInfos = products.map(function(p){
        return { 
            productName: p.ProductName, 
            category: p.Category,
            unitPrice: p.UnitPrice
        };
    });

    console.log("Product Info:"); 
    
    productInfos.forEach(function(productInfo) {
        console.log(productInfo.productName + " is in the category " + 
            productInfo.category + " and costs " + productInfo.unitPrice + " per unit.");
    });
})();
