(function() {
    var products = getCustomerList(); 

    var result = products.filter(function(c) {
        return c.Region == "WA";
    });

    console.log("Customers from Washington and their orders:"); 

    result.forEach(function(customer) {
        console.log("Customer " + customer.CustomerId + ": " + customer.CompanyName); 
        customer.Orders.forEach(function(order) {
            console.log("  Order " + order.OrderId + ": " + order.OrderDate); 
        });
    });
})();
