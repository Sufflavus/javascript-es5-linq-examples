(function() {
    var customers = getCustomerList(); 

    var first3WAOrders = customers.filter(function (customer) {
        return customer.Region === "WA";
    }).map(function(customer) {
        return customer.Orders.map(function(order) {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId,
                    orderDate: order.OrderDate
                };
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    }, []).slice(0, 3);

    console.log("First 3 orders in WA:"); 

    first3WAOrders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId + " OrderDate=" + order.orderDate);         
    });
})();
