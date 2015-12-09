(function() {
    var customers = getCustomerList();

    var orderCounts = customers.map(function(c) {
        console.log(c);
        return { 
            customerId: c.CustomerId, 
            orderCount: c.Orders.length 
        };
    }); 

    orderCounts.forEach(function(c) {
        console.log("CustomerID=" + c.customerId + "  OrderCount=" + c.orderCount);
    });
})();