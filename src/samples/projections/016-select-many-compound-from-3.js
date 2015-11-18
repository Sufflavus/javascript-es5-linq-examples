(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var cutoffDate = new Date(1998, 0, 1);

    var orders = customers.map(function(customer) {
        return customer.Orders.filter(function(order) { 
                return (new Date(order.OrderDate)).getTime() >= cutoffDate.getTime(); 
            }).map(function(order) {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId,
                    orderDate: order.OrderDate
                };
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    }, []);

    orders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId + " OrderDate=" + order.orderDate);
    });
})();
