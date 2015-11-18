(function() {    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    var orders = customers.map(function(customer, customerIndex) {
        return customer.Orders.map(function(order) {
                return "Customer #" + (customerIndex + 1) + 
                       " has an order with OrderID " + order.OrderId; 
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    }, []);

    orders.forEach(function(order) {
        console.log(order);
    });
})();
