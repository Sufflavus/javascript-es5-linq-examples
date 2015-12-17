(function() {
    var customers = getCustomerList();
    var products = getProductList();
    
    var customerNames = customers.map(function(c) {
        return c.CompanyName;
    });
    
    var productNames = products.map(function(p) {
        return p.ProductName;
    });

    var allNames = customerNames.concat(productNames); 
        
    console.log("Customer and product names:");

    allNames.forEach(function(n) { 
        console.log(n);
    });
})();