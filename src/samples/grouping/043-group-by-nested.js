(function() {
    var customers = getCustomerList();

    var customerOrderGroups = customers.map(function(c) {
        return { 
            companyName: c.CompanyName, 
            yearGroups: c.Orders.reduce(function(array, o) {
                var key = new Date(o.OrderDate).getFullYear();

                var hasKey = array.some(function(item) {
                    return item.key !== key ? false : ((item.values.push(o)), true);
                });

                if(!hasKey){
                    array.push({key: key, values: [o]});
                }

                return array;
            }, []).map(function(g) {
                return { 
                    year: g.key, 
                    monthGroups: g.values.reduce(function(array, o) {
                        var key = new Date(o.OrderDate).getMonth() + 1;

                        var hasKey = array.some(function(item) {
                            return item.key !== key ? false : ((item.values.push(o)), true);
                        });

                        if(!hasKey){
                            array.push({key: key, values: [o]});
                        }

                        return array;
                    }, []).map(function(g) {
                       return { month: g.key, orders: g.values };
                    })
                };
            })
        };
    });

    customerOrderGroups.forEach(function(c) {
        console.log("CompanyName=" + c.companyName + " YearGroups=...");

        c.yearGroups.forEach(function(y) {
            console.log("YearGroups: Year=" + y.year + " MonthGroups=...");

            y.monthGroups.forEach(function(m) {
                console.log("MonthGroups: Month=" + m.month + " Orders=...");

                m.orders.forEach(function(o) {
                    console.log("Orders: OrderID=" + o.OrderId + " OrderDate=" + o.OrderDate + " Total=" + o.Total);
                });
            });
        });
    });
})();