(function() {
    var products = getProductList();
    var customers = getCustomerList(); 

    var productFirstChars = products.map(function(p) {
        return p.ProductName[0];
    });

    var customerFirstChars = customers.map(function(c) {
        return c.CompanyName[0];
    });
    
    var uniqueFirstChars = productFirstChars.concat(customerFirstChars)
        .filter(function(ch, index, array) {
            return array.indexOf(ch) === index;
        });

    console.log("Unique first letters from Product names and Customer names:");
    uniqueFirstChars.forEach(function(ch) {
        console.log(ch);
    });
})();