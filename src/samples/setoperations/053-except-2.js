(function() {
    var products = getProductList();
    var customers = getCustomerList(); 

    var productFirstChars = products.map(function(p) {
        return p.ProductName[0];
    });

    var customerFirstChars = customers.map(function(c) {
        return c.CompanyName[0];
    });
    
    var productOnlyFirstChars = productFirstChars.filter(function(ch) {
        return customerFirstChars.indexOf(ch) === -1;
    })
    .filter(function(ch, index, array) {
        return array.indexOf(ch) === index;
    });

    console.log("First letters from Product names, but not from Customer names:");
    productOnlyFirstChars.forEach(function(ch) {
        console.log(ch);
    });
})();