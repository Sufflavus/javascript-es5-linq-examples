(function() {
    var products = getProductList();
    var customers = getCustomerList(); 

    var productFirstChars = products.map(function(p) {
        return p.ProductName[0];
    });

    var customerFirstChars = customers.map(function(c) {
        return c.CompanyName[0];
    });
    
    var commonFirstChars = productFirstChars.filter(function(ch) {
        return customerFirstChars.indexOf(ch) != -1;
    })
    .filter(function(ch, index, array) {
        return array.indexOf(ch) === index;
    });

    console.log("Common first letters from Product names and Customer names:");
    commonFirstChars.forEach(function(ch) {
        console.log(ch);
    });
})();