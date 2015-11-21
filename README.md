# 101 LINQ Samples in JavaScript (ES 5)

Port of the [C# 101 LINQ Samples](http://code.msdn.microsoft.com/101-LINQ-Samples-3fb9811b) rewritten into JavaScript [ES 5](http://www.ecma-international.org/ecma-262/5.1/).

Compare JavaScript (ES 5) to other LINQ examples written in:

 - [Swift](https://github.com/mythz/swift-linq-examples)
 - [Java](https://github.com/mythz/java-linq-examples)
 - [Clojure](https://github.com/mythz/clojure-linq-examples)
 - [Dart](https://github.com/mythz/dart-linq-examples)
 - [Elixir](https://github.com/omnibs/elixir-linq-examples)
 - [JavaScript (ES 6)](https://github.com/Sufflavus/javascript-es6-linq-examples)

### Running the examples

You can run samples in your browser by opening [SamplesRunner.html](https://github.com/Sufflavus/javascript-es5-linq-examples/blob/master/src/SamplesRunner.html). Comment or uncomment the desired samples initialisation in the source code of the page. Results are in the console.

### Contents

The samples below mirrors the C# LINQ samples layout with the JS immediately-invoked functions matching their corresponding C# examples.

#### [LINQ - Restriction Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/restrictions/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Restriction-Operators-b15d29ca)
#### [LINQ - Projection Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/projections/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-to-DataSets-09787825)
#### [LINQ - Partitioning Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/partitioning/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Partitioning-Operators-c68aaccc)
#### [LINQ - Ordering Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/ordering/) / [MSDN C#](http://code.msdn.microsoft.com/SQL-Ordering-Operators-050af19e)
#### [LINQ - Grouping Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/grouping/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-to-DataSets-Grouping-c62703ea)
#### [LINQ - Set Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/setoperations/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Set-Operators-374f34fe)
#### [LINQ - Conversion Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/conversionoperations/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Conversion-Operators-e4e59714)
#### [LINQ - Element Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/elementoperations/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Element-Operators-0f3f12ce)
#### [LINQ - Generation Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/generationoperations/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Generation-Operators-8a3fbff7)
#### [LINQ - Quantifiers](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/quantifiers/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Quantifiers-f00e7e3e)
#### [LINQ - Aggregate Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/aggregateoperations/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Aggregate-Operators-c51b3869)
#### [LINQ - Miscellaneous Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/miscellaneousoperations/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Miscellaneous-6b72bb2a)
#### [LINQ - Query Execution](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/queryexecution/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Query-Execution-ce0d3b95)
#### [LINQ - Join Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/joinoperators/) / [MSDN C#](http://code.msdn.microsoft.com/LINQ-Join-Operators-dabef4e9)

##  Side-by-side - C# LINQ vs JavaScript

For a side-by-side comparison, the original **C#** source code is displayed above the equivalent **JavaScript** translation. 

  - The **Output** shows the console output of running the **JavaScript** sample. 
  - Outputs ending with `...` illustrates only a partial response is displayed. 
  - The C# ObjectDumper util used is downloadable from MSDN - [ObjectDumper.zip](http://code.msdn.microsoft.com/Visual-Studio-2008-C-d295cdba/file/46086/1/ObjectDumper.zip)


LINQ - Restriction Operators
----------------------------

### linq1: Where - Simple 1

```csharp
//c#
public void Linq1() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var lowNums = 
        from n in numbers 
        where n < 5 
        select n; 
  
    Console.WriteLine("Numbers < 5:"); 
    foreach (var x in lowNums) 
    { 
        Console.WriteLine(x); 
    } 
}  
```
```js
//JavaScript
function linq1() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var lowNums = numbers.filter(function(n){
        return n < 5;
    });

    console.log("Numbers < 5:"); 

    lowNums.forEach(function(x) {
        console.log(x);
    });
}
```
#### Output

    Numbers < 5:
    4
    1
    3
    2
    0

### linq2: Where - Simple 2
```csharp
//c#
public void Linq2() 
{ 
    List<Product> products = GetProductList(); 
  
    var soldOutProducts = 
        from p in products 
        where p.UnitsInStock == 0 
        select p; 
  
    Console.WriteLine("Sold out products:"); 
    foreach (var product in soldOutProducts) 
    { 
        Console.WriteLine("{0} is sold out!", product.ProductName); 
    } 
} 
```
```js
//JavaScript
function linq2() {
    var products = getProductList(); 

    var soldOutProducts = products.filter(function(p) {
        return p.UnitsInStock === 0;
    });

    console.log("Sold out products:"); 

    soldOutProducts.forEach(function(product) {
        console.log(product.ProductName + " is sold out!");
    });
}
```
#### Output

    Sold out products:
    Chef Anton's Gumbo Mix is sold out!
    Alice Mutton is sold out!
    Thüringer Rostbratwurst is sold out!
    Gorgonzola Telino is sold out!
    Perth Pasties is sold out!

### linq3: Where - Simple 3
```csharp
//c#
public void Linq3() 
{ 
    List<Product> products = GetProductList(); 
  
    var expensiveInStockProducts = 
        from p in products 
        where p.UnitsInStock > 0 && p.UnitPrice > 3.00M 
        select p; 
  
    Console.WriteLine("In-stock products that cost more than 3.00:"); 
    foreach (var product in expensiveInStockProducts) 
    { 
        Console.WriteLine("{0} is in stock and costs more than 3.00.", product.ProductName); 
    } 
} 
```
```js
//JavaScript
function linq3() {
    var products = getProductList(); 

    var expensiveInStockProducts = products.filter(function(p) {
        return p.UnitsInStock > 0 && p.UnitPrice > 3;
    });

    console.log("In-stock products that cost more than 3.00:"); 

    expensiveInStockProducts.forEach(function(product) {
        console.log(product.ProductName + " is in stock and costs more than 3.00.");
    });
}
```
#### Output

    In-stock products that cost more than 3.00:
    Chai is in stock and costs more than 3.00.
    Chang is in stock and costs more than 3.00.
    Aniseed Syrup is in stock and costs more than 3.00.
    ...

### linq4: Where - Drilldown
```csharp
//c#
public void Linq4() 
{ 
    List<Customer> customers = GetCustomerList(); 

    var waCustomers = 
        from c in customers 
        where c.Region == "WA" 
        select c; 
  
    Console.WriteLine("Customers from Washington and their orders:"); 
    foreach (var customer in waCustomers) 
    { 
        Console.WriteLine("Customer {0}: {1}", customer.CustomerID, customer.CompanyName); 
        foreach (var order in customer.Orders) 
        { 
            Console.WriteLine("  Order {0}: {1}", order.OrderID, order.OrderDate); 
        } 
    } 
} 
```
```js
//JavaScript
function linq4() {
    var customers = getCustomerList(); 

    var waCustomers = customers.filter(function(c) {
        return c.Region == "WA";
    });

    console.log("Customers from Washington and their orders:"); 

    waCustomers.forEach(function(customer) {
        console.log("Customer " + customer.CustomerId + ": " + customer.CompanyName); 
        customer.Orders.forEach(function(order) {
            console.log("  Order " + order.OrderId + ": " + order.OrderDate); 
        });
    });
}
```
#### Output

    Customers from Washington and their orders:
    Customer LAZYK: Lazy K Kountry Store
      Order 10482: 1997-03-21T00:00:00.000Z
      Order 10545: 1997-05-22T00:00:00.000Z
    Customer TRAIH: Trail's Head Gourmet Provisioners
      Order 10574: 1997-06-19T00:00:00.000Z
      Order 10577: 1997-06-23T00:00:00.000Z
      Order 10822: 1998-01-08T00:00:00.000Z
    ...

### linq5: Where - Indexed
```csharp
//c#
public void Linq5() 
{ 
    string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    var shortDigits = digits.Where((digit, index) => digit.Length < index); 
  
    Console.WriteLine("Short digits:"); 
    foreach (var d in shortDigits) 
    { 
        Console.WriteLine("The word {0} is shorter than its value.", d); 
    } 
}
```
```js
//JavaScript
function linq5() {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
    
    var shortDigits = digits.filter(function(digit, index) {
        return digit.length < index;
    }); 
    
    console.log("Short digits:"); 

    shortDigits.forEach(function(d) {
        console.log("The word " + d + " is shorter than its value."); 
    });
}
```
#### Output

    Short digits:
        The word five is shorter than its value.
        The word six is shorter than its value.
        The word seven is shorter than its value.
        The word eight is shorter than its value.
        The word nine is shorter than its value.

LINQ - Projection Operators
---------------------------

### linq6: Select - Simple 1
```csharp
//c#
public void Linq6() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var numsPlusOne = 
        from n in numbers 
        select n + 1; 
  
    Console.WriteLine("Numbers + 1:"); 
    foreach (var i in numsPlusOne) 
    { 
        Console.WriteLine(i); 
    } 
}
```
```js
//JavaScript
function linq6() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numsPlusOne = numbers.map(function(n) {
        return n + 1;
    });

    console.log("Numbers + 1:"); 

    numsPlusOne.forEach(function(i) {
        console.log(i);
    });
}
```
#### Output

    Numbers + 1:
    6
    5
    2
    4
    10
    9
    7
    8
    3
    1

### linq7: Select - Simple 2
```csharp
//c#
public void Linq7() 
{ 
    List<Product> products = GetProductList(); 
  
    var productNames = 
        from p in products 
        select p.ProductName; 
  
    Console.WriteLine("Product Names:"); 
    foreach (var productName in productNames) 
    { 
        Console.WriteLine(productName); 
    } 
}
```
```js
//JavaScript
function linq7() {
    var products = getProductList(); 

    console.log("Product Names:");
    
    var productNames = products.map(function(p) {
        return p.ProductName;
    });

    productNames.forEach(function(productName) {
        console.log(productName);
    });
}
```
#### Output

    Product Names:
    Chai
    Chang
    Aniseed Syrup
    Chef Anton's Cajun Seasoning
    Chef Anton's Gumbo Mix
    ...

### linq8: Select - Transformation
```csharp
//c#
public void Linq8() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
    string[] strings = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    var textNums = 
        from n in numbers 
        select strings[n]; 
  
    Console.WriteLine("Number strings:"); 
    foreach (var s in textNums) 
    { 
        Console.WriteLine(s); 
    } 
}
```
```js
//JavaScript
function linq8() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
    
    var textNums = numbers.map(function(n) {
        return strings[n];
    });

    console.log("Number strings:");

    textNums.forEach(function(s) {
        console.log(s);
    });
}
```
#### Output

    Number strings:
    five
    four
    one
    three
    nine
    eight
    six
    seven
    two
    zero

### linq9: Select - Anonymous Types 1
```csharp
//c#
public void Linq9() 
{ 
    string[] words = { "aPPLE", "BlUeBeRrY", "cHeRry" }; 
  
    var upperLowerWords = 
        from w in words 
        select new { Upper = w.ToUpper(), Lower = w.ToLower() }; 
  
    foreach (var ul in upperLowerWords) 
    { 
        Console.WriteLine("Uppercase: {0}, Lowercase: {1}", ul.Upper, ul.Lower); 
    } 
}
```
```js
//JavaScript
function linq9() {
    var words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    var upperLowerWords = words.map(function(w) { 
        return { 
            upper: w.toUpperCase(), 
            lower: w.toLowerCase()
        }; 
    });

    upperLowerWords.forEach(function(ul) {
        console.log("Uppercase: " + ul.upper + ", Lowercase: " + ul.lower);
    });
}
```
#### Output

    Uppercase: APPLE, Lowercase: apple
    Uppercase: BLUEBERRY, Lowercase: blueberry
    Uppercase: CHERRY, Lowercase: cherry

### linq10: Select - Anonymous Types 2
```csharp
//c#
public void Linq10() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
    string[] strings = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    var digitOddEvens = 
        from n in numbers 
        select new { Digit = strings[n], Even = (n % 2 == 0) }; 
  
    foreach (var d in digitOddEvens) 
    { 
        Console.WriteLine("The digit {0} is {1}.", d.Digit, d.Even ? "even" : "odd"); 
    } 
}
```
```js
//JavaScript
function linq10() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var digitOddEvens = numbers.map(function(n){
        return { 
            digit: strings[n], 
            even: (n % 2 === 0) 
        };
    });

    digitOddEvens.forEach(function(d) {
        console.log("The digit " + d.digit + " is " + (d.even ? "even" : "odd"));
    });
}
```
#### Output

    The digit five is odd
    The digit four is even
    The digit one is odd
    The digit three is odd
    The digit nine is odd
    The digit eight is even
    The digit six is even
    The digit seven is odd
    The digit two is even
    The digit zero is even

### linq11: Select - Anonymous Types 3
```csharp
//c#
public void Linq11() 
{ 
    List<Product> products = GetProductList(); 
  
    var productInfos = 
        from p in products 
        select new { p.ProductName, p.Category, Price = p.UnitPrice }; 
  
    Console.WriteLine("Product Info:"); 
    foreach (var productInfo in productInfos) 
    { 
        Console.WriteLine("{0} is in the category {1} and costs {2} per unit.", productInfo.ProductName, productInfo.Category, productInfo.Price); 
    } 
}
```
```js
//JavaScript
function linq11() {
    var products = getProductList();
    
    var productInfos = products.map(function(p){
        return { 
            productName: p.ProductName, 
            category: p.Category,
            unitPrice: p.UnitPrice
        };
    });

    console.log("Product Info:"); 
    
    productInfos.forEach(function(productInfo) {
        console.log(productInfo.productName + " is in the category " + 
            productInfo.category + " and costs " + productInfo.unitPrice + " per unit.");
    });
}
```
#### Output

    Product Info:
    Chai is in the category Beverages and costs 18 per unit.
    Chang is in the category Beverages and costs 19 per unit.
    Aniseed Syrup is in the category Condiments and costs 10 per unit.
    ...

### linq12: Select - Indexed
```csharp
//c#
public void Linq12() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var numsInPlace = numbers.Select((num, index) => new { Num = num, InPlace = (num == index) }); 
  
    Console.WriteLine("Number: In-place?"); 
    foreach (var n in numsInPlace) 
    { 
        Console.WriteLine("{0}: {1}", n.Num, n.InPlace); 
    } 
}
```
```js
//JavaScript
function linq12() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numsInPlace = numbers.map(function(num, index) {
        return { 
            num: num, 
            inPlace: (num === index)
        };
    }); 

    console.log("Number: In-place?"); 
    
    numsInPlace.forEach(function(n) {
        console.log(n.num + ": " + n.inPlace);
    });
}
```
#### Output

    Number: In-place?
    5: false
    4: false
    1: false
    3: true
    9: false
    8: false
    6: true
    7: true
    2: false
    0: false

### linq13: Select - Filtered
```csharp
//c#
public void Linq13() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
    string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    var lowNums = 
        from n in numbers 
        where n < 5 
        select digits[n]; 
  
    Console.WriteLine("Numbers < 5:"); 
    foreach (var num in lowNums) 
    { 
        Console.WriteLine(num); 
    } 
}
```
```js
//JavaScript
function linq13() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
     
    var lowNums = numbers.filter(function(n){
                       return n < 5;
                   }).map(function(n){
                       return digits[n];
                   });

    console.log("Numbers < 5:");

    lowNums.forEach(function(num) {
        console.log(num);
    });
}
```
#### Output

    Numbers < 5:
    four
    one
    three
    two
    zero

### linq14: SelectMany - Compound from 1
```csharp
//c#
public void Linq14() 
{ 
    int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 }; 
    int[] numbersB = { 1, 3, 5, 7, 8 }; 
  
    var pairs = 
        from a in numbersA 
        from b in numbersB 
        where a < b 
        select new { a, b }; 
  
    Console.WriteLine("Pairs where a < b:"); 
    foreach (var pair in pairs) 
    { 
        Console.WriteLine("{0} is less than {1}", pair.a, pair.b); 
    } 
}
```
```js
//JavaScript
function linq14() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 
      
    var pairs = numbersA.map(function(a) {
        return numbersB.filter(function(b) { 
                return a < b; 
            }).map(function(b) {
                return {
                    a: a, 
                    b: b
                };
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    },[]);

    console.log("Pairs where a < b:");

    pairs.forEach(function(pair) {
        console.log(pair.a + " is less than " + pair.b);
    });
}
```
#### Output

    Pairs where a < b:
    0 is less than 1
    0 is less than 3
    0 is less than 5
    0 is less than 7
    0 is less than 8
    2 is less than 3
    2 is less than 5
    2 is less than 7
    2 is less than 8
    4 is less than 5
    4 is less than 7
    4 is less than 8
    5 is less than 7
    5 is less than 8
    6 is less than 7
    6 is less than 8

### linq15: SelectMany - Compound from 2
```csharp
//c#
public void Linq15() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var orders = 
        from c in customers 
        from o in c.Orders 
        where o.Total < 500.00M 
        select new { c.CustomerID, o.OrderID, o.Total }; 
  
    ObjectDumper.Write(orders); 
}
```
```js
//JavaScript
function linq15() {
    var customers = getCustomerList();
          
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
}
```
#### Output

    CustomerID=ALFKI OrderID=10702 Total=330.00
    CustomerID=ALFKI OrderID=10952 Total=471.20
    CustomerID=ANATR OrderID=10308 Total=88.80
    CustomerID=ANATR OrderID=10625 Total=479.75
    ...

### linq16: SelectMany - Compound from 3
```csharp
//c#
public void Linq16() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var orders = 
        from c in customers 
        from o in c.Orders 
        where o.OrderDate >= new DateTime(1998, 1, 1) 
        select new { c.CustomerID, o.OrderID, o.OrderDate }; 
  
    ObjectDumper.Write(orders); 
}
```
```js
//JavaScript
function linq16() {
    var customers = getCustomerList(); 

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
}
```
#### Output

    CustomerID=ALFKI OrderID=10835 OrderDate=1998-01-15T00:00:00.000Z
    CustomerID=ALFKI OrderID=10952 OrderDate=1998-03-16T00:00:00.000Z
    CustomerID=ALFKI OrderID=11011 OrderDate=1998-04-09T00:00:00.000Z
    CustomerID=ANATR OrderID=10926 OrderDate=1998-03-04T00:00:00.000Z
    CustomerID=ANTON OrderID=10856 OrderDate=1998-01-28T00:00:00.000Z
    ...

### linq17: SelectMany - from Assignment
```csharp
//c#
public void Linq17() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var orders = 
        from c in customers 
        from o in c.Orders 
        where o.Total >= 2000.0M 
        select new { c.CustomerID, o.OrderID, o.Total }; 
  
    ObjectDumper.Write(orders); 
}
```
```js
//JavaScript
function linq17() {
    var customers = getCustomerList(); 
      
    var orders = customers.map(function(customer) {
        return customer.Orders.filter(function(order) { 
                return order.Total >= 2000; 
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
}
```
#### Output

    CustomerID=ANTON OrderID=10573 Total=2082.00
    CustomerID=AROUT OrderID=10558 Total=2142.90
    CustomerID=AROUT OrderID=10953 Total=4441.25
    CustomerID=BERGS OrderID=10384 Total=2222.40
    CustomerID=BERGS OrderID=10524 Total=3192.65
    ...

### linq18: SelectMany - Multiple from
```csharp
//c#
public void Linq18() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    DateTime cutoffDate = new DateTime(1997, 1, 1); 
  
    var orders = 
        from c in customers 
        where c.Region == "WA" 
        from o in c.Orders 
        where o.OrderDate >= cutoffDate 
        select new { c.CustomerID, o.OrderID }; 
  
    ObjectDumper.Write(orders); 
}
```
```js
//JavaScript
function linq18() {
    var customers = getCustomerList(); 

    var cutoffDate = new Date(1997, 0, 1); 
      
    var orders = customers.filter(function (customer) {
        return customer.Region === "WA";
    }).map(function(customer) {
        return customer.Orders.filter(function(order) { 
                return (new Date(order.OrderDate)).getTime() >= cutoffDate.getTime(); 
            }).map(function(order) {
                return {
                    customerId: customer.CustomerId, 
                    orderId: order.OrderId
                };
            });
    }).reduce(function(arr1, arr2) {
        return arr1.concat(arr2);
    }, []);

    orders.forEach(function(order) {
        console.log("CustomerID=" + order.customerId + " OrderID=" + order.orderId);
    });
}
```
#### Output

    CustomerID=LAZYK OrderID=10482
    CustomerID=LAZYK OrderID=10545
    CustomerID=TRAIH OrderID=10574
    CustomerID=TRAIH OrderID=10577
    CustomerID=TRAIH OrderID=10822
    CustomerID=WHITC OrderID=10469
    CustomerID=WHITC OrderID=10483
    CustomerID=WHITC OrderID=10504
    CustomerID=WHITC OrderID=10596
    CustomerID=WHITC OrderID=10693
    CustomerID=WHITC OrderID=10696
    CustomerID=WHITC OrderID=10723
    CustomerID=WHITC OrderID=10740
    CustomerID=WHITC OrderID=10861
    CustomerID=WHITC OrderID=10904
    CustomerID=WHITC OrderID=11032
    CustomerID=WHITC OrderID=11066

### linq19: SelectMany - Indexed
```csharp
//c#
public void Linq19() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var customerOrders = 
        customers.SelectMany( 
            (cust, custIndex) => 
            cust.Orders.Select(o => "Customer #" + (custIndex + 1) + 
                                    " has an order with OrderID " + o.OrderID)); 
  
    ObjectDumper.Write(customerOrders); 
}
```
```js
//JavaScript
function linq19() {
    var customers = getCustomerList();

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
}
```
#### Output

    Customer #1 has an order with OrderID 10643
    Customer #1 has an order with OrderID 10692
    Customer #1 has an order with OrderID 10702
    Customer #1 has an order with OrderID 10835
    Customer #1 has an order with OrderID 10952
    Customer #1 has an order with OrderID 11011
    Customer #2 has an order with OrderID 10308
    Customer #2 has an order with OrderID 10625
    Customer #2 has an order with OrderID 10759
    Customer #2 has an order with OrderID 10926
    ...

LINQ - Partitioning Operators
-----------------------------

### linq20: Take - Simple
```csharp
//c#
public void Linq20() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 

    var first3Numbers = numbers.Take(3); 
  
    Console.WriteLine("First 3 numbers:"); 
  
    foreach (var n in first3Numbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq20() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var first3Numbers = numbers.slice(0, 3);

    console.log("First 3 numbers:"); 

    first3Numbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    First 3 numbers:
    5
    4
    1

### linq21: Take - Nested
```csharp
//c#
public void Linq21()   
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var first3WAOrders = ( 
        from c in customers 
        from o in c.Orders 
        where c.Region == "WA" 
        select new { c.CustomerID, o.OrderID, o.OrderDate }) 
        .Take(3); 
  
    Console.WriteLine("First 3 orders in WA:"); 
    foreach (var order in first3WAOrders) 
    { 
        ObjectDumper.Write(order); 
    } 
}
```
```js
//JavaScript
function linq21() {
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
}
```
#### Output

    First 3 orders in WA:
    CustomerID=LAZYK OrderID=10482 OrderDate=1997-03-21T00:00:00.000Z
    CustomerID=LAZYK OrderID=10545 OrderDate=1997-05-22T00:00:00.000Z
    CustomerID=TRAIH OrderID=10574 OrderDate=1997-06-19T00:00:00.000Z


### linq22: Skip - Simple
```csharp
//c#
public void Linq22() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var allButFirst4Numbers = numbers.Skip(4); 
  
    Console.WriteLine("All but first 4 numbers:"); 
    foreach (var n in allButFirst4Numbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq22() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var allButFirst4Numbers = numbers.slice(4);

    console.log("All but first 4 numbers:"); 

    allButFirst4Numbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    All but first 4 numbers:
    9
    8
    6
    7
    2
    0

### linq23: Skip - Nested
```csharp
//c#
public void Linq23()   
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var waOrders = 
        from c in customers 
        from o in c.Orders 
        where c.Region == "WA" 
        select new { c.CustomerID, o.OrderID, o.OrderDate }; 
  
    var allButFirst2Orders = waOrders.Skip(2); 
  
    Console.WriteLine("All but first 2 orders in WA:"); 
    foreach (var order in allButFirst2Orders) 
    { 
        ObjectDumper.Write(order); 
    } 
}
```
```js
//JavaScript
function linq23() {
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
}
```
#### Output

    All but first 2 orders in WA:
    CustomerID=TRAIH OrderID=10574 OrderDate=1997-06-19T00:00:00.000Z
    CustomerID=TRAIH OrderID=10577 OrderDate=1997-06-23T00:00:00.000Z
    CustomerID=TRAIH OrderID=10822 OrderDate=1998-01-08T00:00:00.000Z
    CustomerID=WHITC OrderID=10269 OrderDate=1996-07-31T00:00:00.000Z
    CustomerID=WHITC OrderID=10344 OrderDate=1996-11-01T00:00:00.000Z
    CustomerID=WHITC OrderID=10469 OrderDate=1997-03-10T00:00:00.000Z
    CustomerID=WHITC OrderID=10483 OrderDate=1997-03-24T00:00:00.000Z
    CustomerID=WHITC OrderID=10504 OrderDate=1997-04-11T00:00:00.000Z
    CustomerID=WHITC OrderID=10596 OrderDate=1997-07-11T00:00:00.000Z
    CustomerID=WHITC OrderID=10693 OrderDate=1997-10-06T00:00:00.000Z
    CustomerID=WHITC OrderID=10696 OrderDate=1997-10-08T00:00:00.000Z
    CustomerID=WHITC OrderID=10723 OrderDate=1997-10-30T00:00:00.000Z
    CustomerID=WHITC OrderID=10740 OrderDate=1997-11-13T00:00:00.000Z
    CustomerID=WHITC OrderID=10861 OrderDate=1998-01-30T00:00:00.000Z
    CustomerID=WHITC OrderID=10904 OrderDate=1998-02-24T00:00:00.000Z
    CustomerID=WHITC OrderID=11032 OrderDate=1998-04-17T00:00:00.000Z
    CustomerID=WHITC OrderID=11066 OrderDate=1998-05-01T00:00:00.000Z

### linq24: TakeWhile - Simple
```csharp
//c#
public void Linq24() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var firstNumbersLessThan6 = numbers.TakeWhile(n => n < 6); 
  
    Console.WriteLine("First numbers less than 6:"); 
    foreach (var n in firstNumbersLessThan6) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq24() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var firstNumbersLessThan6 = numbers.slice(0, (function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n){
        return n < 6;
    }));

    console.log("First numbers less than 6:"); 

    firstNumbersLessThan6.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    First numbers less than 6:
    5
    4
    1
    3

### linq25: TakeWhile - Indexed
```csharp
//c#
public void Linq25() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var firstSmallNumbers = numbers.TakeWhile((n, index) => n >= index); 
  
    Console.WriteLine("First numbers not less than their position:"); 
    foreach (var n in firstSmallNumbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq25() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var firstSmallNumbers = numbers.slice(0, (function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n, index){
        return n >= index;
    }));

    console.log("First numbers not less than their position:"); 

    firstSmallNumbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    First numbers not less than their position:
    5
    4

### linq26: SkipWhile - Simple
```csharp
//c#
public void Linq26() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var allButFirst3Numbers = numbers.SkipWhile(n => n % 3 != 0); 
  
    Console.WriteLine("All elements starting from first element divisible by 3:"); 
    foreach (var n in allButFirst3Numbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq26() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var allButFirst3Numbers = numbers.slice((function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n){
        return n % 3 != 0;
    }));

    console.log("All elements starting from first element divisible by 3:"); 

    allButFirst3Numbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    All elements starting from first element divisible by 3:
    3
    9
    8
    6
    7
    2
    0

### linq27: SkipWhile - Indexed
```csharp
//c#
public void Linq27() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var laterNumbers = numbers.SkipWhile((n, index) => n >= index); 
  
    Console.WriteLine("All elements starting from first element less than its position:"); 
    foreach (var n in laterNumbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq27() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var laterNumbers = numbers.slice((function(array, condition){
        var stopIndex = array.length;
        array.some(function(n, index) {
            return condition(n, index) ? false : ((stopIndex = index), true);
        });
        return stopIndex;
    })(numbers, function(n, index){
        return n >= index;
    }));

    console.log("All elements starting from first element less than its position:"); 

    laterNumbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    All elements starting from first element less than its position:
    1
    3
    9
    8
    6
    7
    2
    0


LINQ - Ordering Operators
-------------------------

### linq28: OrderBy - Simple 1
```csharp
//c#
public void Linq28() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    var sortedWords = 
        from w in words 
        orderby w 
        select w; 
  
    Console.WriteLine("The sorted list of words:"); 
    foreach (var w in sortedWords) 
    { 
        Console.WriteLine(w); 
    } 
}
```
```js
//JavaScript
function linq28() {
    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort();

    console.log("The sorted list of words:"); 

    sortedWords.forEach(function(w) {
        console.log(w);
    });
}
```
#### Output

    The sorted list of words:
    apple
    blueberry
    cherry

### linq29: OrderBy - Simple 2
```csharp
//c#
public void Linq29() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    var sortedWords = 
        from w in words 
        orderby w.Length 
        select w; 
  
    Console.WriteLine("The sorted list of words (by length):"); 
    foreach (var w in sortedWords) 
    { 
        Console.WriteLine(w); 
    } 
}
```
```js
//JavaScript
function linq29() {
    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort(function(w1, w2) {
        return w1.length - w2.length;
    });

    console.log("The sorted list of words (by length):"); 

    sortedWords.forEach(function(w) {
        console.log(w);
    });
}
```
#### Output

    The sorted list of words (by length):
    apple
    cherry
    blueberry

### linq30: OrderBy - Simple 3
```csharp
//c#
public void Linq30() 
{ 
    List<Product> products = GetProductList(); 
  
    var sortedProducts = 
        from p in products 
        orderby p.ProductName 
        select p; 
  
    ObjectDumper.Write(sortedProducts); 
}
```
```js
//JavaScript
function linq30() {
    var products = getProductList(); 

    var sortedProducts = products.slice().sort(function(p1, p2) {
        if (p1.ProductName < p2.ProductName) {
            return -1;
        }
        if (p1.ProductName > p2.ProductName) {
            return 1;
        }
        return 0;
    });

    sortedProducts.forEach(function(product) {
        console.log("ProductID=" + product.ProductID + " ProductName=" + product.ProductName + " Category=" + 
            product.Category + " UnitPrice=" + product.UnitPrice + " UnitsInStock=" + product.UnitsInStock);
    });
}
```
#### Output

    ProductID=17 ProductName=Alice Mutton Category=Meat/Poultry UnitPrice=39 UnitsInStock=0
    ProductID=3 ProductName=Aniseed Syrup Category=Condiments UnitPrice=10 UnitsInStock=13
    ProductID=40 ProductName=Boston Crab Meat Category=Seafood UnitPrice=18.4 UnitsInStock=123
    ProductID=60 ProductName=Camembert Pierrot Category=Dairy Products UnitPrice=34 UnitsInStock=19
    ProductID=18 ProductName=Carnarvon Tigers Category=Seafood UnitPrice=62.5 UnitsInStock=42
    ...

### linq31: OrderBy - Comparer
```csharp
//c#
public void Linq31() 
{ 
    string[] words = { "aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry" }; 
  
    var sortedWords = words.OrderBy(a => a, new CaseInsensitiveComparer()); 
  
    ObjectDumper.Write(sortedWords); 
} 
```
```js
//JavaScript
function linq31() {
    var words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    var sortedWords = words.slice().sort(caseInsensitiveComparer);

    sortedWords.forEach(function(w) {
        console.log(w);
    });

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return -1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return 1;
        }
        return 0;
    }
}
```
#### Output

    AbAcUs
    aPPLE
    BlUeBeRrY
    bRaNcH
    cHeRry
    ClOvEr

### linq32: OrderByDescending - Simple 1
```csharp
//c#
public void Linq32() 
{ 
    double[] doubles = { 1.7, 2.3, 1.9, 4.1, 2.9 }; 
  
    var sortedDoubles = 
        from d in doubles 
        orderby d descending 
        select d; 
  
    Console.WriteLine("The doubles from highest to lowest:"); 
    foreach (var d in sortedDoubles) 
    { 
        Console.WriteLine(d); 
    } 
}
```
```js
//JavaScript
function linq32() {
    var doubles = [1.7, 2.3, 1.9, 4.1, 2.9]; 

    var sortedDoubles = doubles.slice().sort(function(a, b) {
        return b - a;
    });

    console.log("The doubles from highest to lowest:"); 
    
    sortedDoubles.forEach(function(d) {
        console.log(d);
    });
}
```
#### Output

    The doubles from highest to lowest:
    4.1
    2.9
    2.3
    1.9
    1.7

### linq33: OrderByDescending - Simple 2
```csharp
//c#
public void Linq33() 
{ 
    List<Product> products = GetProductList(); 
  
    var sortedProducts = 
        from p in products 
        orderby p.UnitsInStock descending 
        select p; 
  
    ObjectDumper.Write(sortedProducts); 
}
```
```js
//JavaScript
function linq33() {
    var products = getProductList(); 

    var sortedProducts = products.slice().sort(function(p1, p2) {
        return p2.UnitsInStock - p1.UnitsInStock;
    });

    sortedProducts.forEach(function(product) {
        console.log("ProductID=" + product.ProductID + " ProductName=" + product.ProductName + " Category=" + 
            product.Category + " UnitPrice=" + product.UnitPrice + " UnitsInStock=" + product.UnitsInStock);
    });
}
```
#### Output

    ProductID=75 ProductName=Rhönbräu Klosterbier Category=Beverages UnitPrice=7.75 UnitsInStock=125
    ProductID=40 ProductName=Boston Crab Meat Category=Seafood UnitPrice=18.4 UnitsInStock=123
    ProductID=6 ProductName=Grandma's Boysenberry Spread Category=Condiments UnitPrice=25 UnitsInStock=120
    ProductID=55 ProductName=Pâté chinois Category=Meat/Poultry UnitPrice=24 UnitsInStock=115
    ProductID=61 ProductName=Sirop d'érable Category=Condiments UnitPrice=28.5 UnitsInStock=113
    ...

### linq34: OrderByDescending - Comparer
```csharp
//c#
public void Linq34() 
{ 
    string[] words = { "aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry" }; 
  
    var sortedWords = words.OrderByDescending(a => a, new CaseInsensitiveComparer()); 
  
    ObjectDumper.Write(sortedWords); 
} 
```
```js
//JavaScript
function linq34() {
    var words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    var sortedWords = words.slice().sort(caseInsensitiveComparer);

    sortedWords.forEach(function(w) {
        console.log(w);
    });

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return 1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return -1;
        }
        return 0;
    }
}
```
#### Output

    ClOvEr
    cHeRry
    bRaNcH
    BlUeBeRrY
    aPPLE
    AbAcUs

### linq35: ThenBy - Simple
```csharp
//c#
public void Linq35() 
{ 
    string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    var sortedDigits = 
        from d in digits 
        orderby d.Length, d 
        select d; 
  
    Console.WriteLine("Sorted digits:"); 
    foreach (var d in sortedDigits) 
    { 
        Console.WriteLine(d); 
    } 
}
```
```js
//JavaScript
function linq35() {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var sortedDigits = digits.slice().sort(function(d1, d2) {
        if (d1.length > d2.length) {
            return 1;
        } 
        if (d1.length < d2.length) { 
            return -1;
        }

        if (d1 > d2) { 
            return 1;
        } 
        if (d1 < d2) {
            return -1
        } 
        return 0;
    });

    console.log("Sorted digits:"); 
    
    sortedDigits.forEach(function(d) {
        console.log(d);
    });
}
```
#### Output

    Sorted digits:
    one
    six
    two
    five
    four
    nine
    zero
    eight
    seven
    three

### linq36: ThenBy - Comparer
```csharp
//c#
public void Linq36() 
{ 
    string[] words = { "aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry" }; 
  
    var sortedWords = 
        words.OrderBy(a => a.Length) 
             .ThenBy(a => a, new CaseInsensitiveComparer()); 
  
    ObjectDumper.Write(sortedWords); 
} 
```
```js
//JavaScript
function linq36(){
    var words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    var sortedWords = words.slice().sort(function(a1, a2) {
        if (a1.length > a2.length) {
            return 1;
        } 
        if (a1.length < a2.length) { 
            return -1;
        }

        return caseInsensitiveComparer(a1, a2);
    });

    sortedWords.forEach(function(w) {
        console.log(w);
    });

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return -1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return 1;
        }
        return 0;
    }
}
```
#### Output

    aPPLE
    AbAcUs
    bRaNcH
    cHeRry
    ClOvEr
    BlUeBeRrY

### linq37: ThenByDescending - Simple
```csharp
//c#
public void Linq37() 
{ 
    List<Product> products = GetProductList(); 
  
    var sortedProducts = 
        from p in products 
        orderby p.Category, p.UnitPrice descending 
        select p; 
  
    ObjectDumper.Write(sortedProducts); 
}
```
```js
//JavaScript
function linq37() {
    var products = getProductList(); 

    var sortedProducts = products.slice().sort(function(p1, p2) {
        if (p1.Category > p2.Category) {
            return 1;
        } 
        if (p1.Category < p2.Category) { 
            return -1;
        }
        
        return p2.UnitPrice - p1.UnitPrice;
    });

    sortedProducts.forEach(function(product) {
        console.log("ProductID=" + product.ProductID + " ProductName=" + product.ProductName + " Category=" + 
            product.Category + " UnitPrice=" + product.UnitPrice + " UnitsInStock=" + product.UnitsInStock);
    });
}
```
#### Output

    ProductID=38 ProductName=Côte de Blaye Category=Beverages UnitPrice=263.5 UnitsInStock=17
    ProductID=43 ProductName=Ipoh Coffee Category=Beverages UnitPrice=46 UnitsInStock=17
    ProductID=2 ProductName=Chang Category=Beverages UnitPrice=19 UnitsInStock=17
    ProductID=39 ProductName=Chartreuse verte Category=Beverages UnitPrice=18 UnitsInStock=69
    ProductID=76 ProductName=Lakkalikööri Category=Beverages UnitPrice=18 UnitsInStock=57
    ProductID=1 ProductName=Chai Category=Beverages UnitPrice=18 UnitsInStock=39
    ProductID=35 ProductName=Steeleye Stout Category=Beverages UnitPrice=18 UnitsInStock=20
    ProductID=70 ProductName=Outback Lager Category=Beverages UnitPrice=15 UnitsInStock=15
    ProductID=67 ProductName=Laughing Lumberjack Lager Category=Beverages UnitPrice=14 UnitsInStock=52
    ProductID=34 ProductName=Sasquatch Ale Category=Beverages UnitPrice=14 UnitsInStock=111
    ...

### linq38: ThenByDescending - Comparer
```csharp
//c#
public void Linq38() 
{ 
    string[] words = { "aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry" }; 
  
    var sortedWords = 
        words.OrderBy(a => a.Length) 
             .ThenByDescending(a => a, new CaseInsensitiveComparer()); 
  
    ObjectDumper.Write(sortedWords); 
} 
```
```js
//JavaScript
function linq38() {
    var words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    var sortedWords = words.slice().sort(function(a1, a2) {
        if (a1.length > a2.length) {
            return 1;
        } 
        if (a1.length < a2.length) { 
            return -1;
        }

        return caseInsensitiveComparer(a1, a2);
    });

    sortedWords.forEach(function(w) {
        console.log(w);
    });

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return 1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return -1;
        }
        return 0;
    }
}
```
#### Output

    aPPLE
    ClOvEr
    cHeRry
    bRaNcH
    AbAcUs
    BlUeBeRrY

### linq39: Reverse
```csharp
//c#
public void Linq39() 
{ 
    string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    var reversedIDigits = ( 
        from d in digits 
        where d[1] == 'i' 
        select d) 
        .Reverse(); 
  
    Console.WriteLine("A backwards list of the digits with a second character of 'i':"); 
    foreach (var d in reversedIDigits) 
    { 
        Console.WriteLine(d); 
    } 
}
```
```js
//JavaScript
function linq39() {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    var reversedIDigits = digits.filter(function(d) {
        return d[1] === "i";
    }).reverse();

    console.log("A backwards list of the digits with a second character of 'i':");

    reversedIDigits.forEach(function(d) {
        console.log(d);
    });
}
```
#### Output

    A backwards list of the digits with a second character of 'i':
    nine
    eight
    six
    five


LINQ - Grouping Operators
-------------------------

Coming soon..


## LICENSE
[The MIT License](https://github.com/Sufflavus/javascript-es5-linq-examples/blob/master/LICENSE)