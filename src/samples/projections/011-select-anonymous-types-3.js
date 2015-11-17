(function() {
    var products = getProductList();  // function getProductList is in the file datacontext.js  
    
    var result = products.map(function(p){
        return { 
            productName: p.ProductName, 
            category: p.Category,
            unitPrice: p.UnitPrice
        };
    });

    console.log("Product Info:"); 
    
    result.forEach(function(item) {
        console.log(item.productName + " is in the category " + item.category + " and costs " + item.unitPrice + " per unit.");
    });
})();
