(function() {
    var customers = getCustomerList(); 

    var allButFirst2Orders = customers.filter(function (customer) {
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
    }, []).slice(2);

    console.log("All but first 2 orders in WA:"); 

    allButFirst2Orders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId + " OrderDate=" + order.orderDate);
    });
})();
