(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js
          
    var orders = customers.map(function(customer) {
        return customer.Orders.filter(function(order) { 
                return order.Total < 500; 
            }).map(function(order) {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId,
                    total: order.Total
                };
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    }, []);

    orders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId + " Total=" + order.total);
    });
})();
