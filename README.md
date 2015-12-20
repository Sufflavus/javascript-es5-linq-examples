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
#### [LINQ - Custom Sequence Operators](https://github.com/Sufflavus/javascript-es5-linq-examples/tree/master/src/samples/customsequenceoperators/) / [MSDN C#](https://code.msdn.microsoft.com/LINQ-to-DataSets-Custom-41738490)
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

### linq40: GroupBy - Simple 1
```csharp
//c#
public void Linq40() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    var numberGroups = 
        from n in numbers 
        group n by n % 5 into g 
        select new { Remainder = g.Key, Numbers = g }; 
  
    foreach (var g in numberGroups) 
    { 
        Console.WriteLine("Numbers with a remainder of {0} when divided by 5:", g.Remainder); 
        foreach (var n in g.Numbers) 
        { 
            Console.WriteLine(n); 
        } 
    } 
}
```
```js
//JavaScript
function linq40() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numberGroups = numbers.reduce(function(array, n) {
        var key = n % 5;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(n)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [n]});
        }

        return array;
    }, []).map(function(g, index) {
        return { remainder: g.key, numbers: g.values };
    });

    numberGroups.forEach(function(g) {
        console.log("Numbers with a remainder of " + g.remainder + " when divided by 5:");
        g.numbers.forEach(function(n) {
            console.log(n);
        })
    });
}
```
#### Output

    Numbers with a remainder of 0 when divided by 5:
    5
    0
    Numbers with a remainder of 4 when divided by 5:
    4
    9
    Numbers with a remainder of 1 when divided by 5:
    1
    6
    Numbers with a remainder of 3 when divided by 5:
    3
    8
    Numbers with a remainder of 2 when divided by 5:
    7
    2

### linq41: GroupBy - Simple 2
```csharp
//c#
public void Linq41() 
{ 
    string[] words = { "blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese" }; 
  
    var wordGroups = 
        from w in words 
        group w by w[0] into g 
        select new { FirstLetter = g.Key, Words = g }; 
  
    foreach (var g in wordGroups) 
    { 
        Console.WriteLine("Words that start with the letter '{0}':", g.FirstLetter); 
        foreach (var w in g.Words) 
        { 
            Console.WriteLine(w); 
        } 
    } 
}
```
```js
//JavaScript
function linq41() {
    var words = ["blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese"]; 

    var wordGroups = words.reduce(function(array, w) {
        var key = w[0];

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(w)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map(function(g, index) {
        return { firstLetter : g.key, words: g.values };
    });

    wordGroups.forEach(function(g) {
        console.log("Words that start with the letter '" + g.firstLetter + "':");
        g.words.forEach(function(w) {
            console.log(w);
        })
    });
}
```
#### Output

    Words that start with the letter 'b':
    blueberry
    banana
    Words that start with the letter 'c':
    chimpanzee
    cheese
    Words that start with the letter 'a':
    abacus
    apple

### linq42: GroupBy - Simple 3
```csharp
//c#
public void Linq42() 
{ 
    List<Product> products = GetProductList(); 
  
    var orderGroups = 
        from p in products 
        group p by p.Category into g 
        select new { Category = g.Key, Products = g }; 
  
    ObjectDumper.Write(orderGroups, 1); 
} 
```
```js
//JavaScript
function linq42() {
    var products = getProductList();

    var orderGroups = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
        return { category: g.key, products: g.values };
    });

    orderGroups.forEach(function(g) {
        console.log("Category=" + g.category + " Products=...");
        g.products.forEach(function(p) {
            console.log("Products: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
}
```
#### Output

    Category=Beverages Products=...
    Products: ProductID=1 ProductName=Chai Category=Beverages UnitPrice=18 UnitsInStock=39
    Products: ProductID=2 ProductName=Chang Category=Beverages UnitPrice=19 UnitsInStock=17
    Products: ProductID=24 ProductName=Guaraná Fantástica Category=Beverages UnitPrice=4.5 UnitsInStock=20
    Products: ProductID=34 ProductName=Sasquatch Ale Category=Beverages UnitPrice=14 UnitsInStock=111
    Products: ProductID=35 ProductName=Steeleye Stout Category=Beverages UnitPrice=18 UnitsInStock=20
    Products: ProductID=38 ProductName=Côte de Blaye Category=Beverages UnitPrice=263.5 UnitsInStock=17
    Products: ProductID=39 ProductName=Chartreuse verte Category=Beverages UnitPrice=18 UnitsInStock=69
    Products: ProductID=43 ProductName=Ipoh Coffee Category=Beverages UnitPrice=46 UnitsInStock=17
    Products: ProductID=67 ProductName=Laughing Lumberjack Lager Category=Beverages UnitPrice=14 UnitsInStock=52
    Products: ProductID=70 ProductName=Outback Lager Category=Beverages UnitPrice=15 UnitsInStock=15
    Products: ProductID=75 ProductName=Rhönbräu Klosterbier Category=Beverages UnitPrice=7.75 UnitsInStock=125
    Products: ProductID=76 ProductName=Lakkalikööri Category=Beverages UnitPrice=18 UnitsInStock=57
    Category=Condiments Products=...
    Products: ProductID=3 ProductName=Aniseed Syrup Category=Condiments UnitPrice=10 UnitsInStock=13
    Products: ProductID=4 ProductName=Chef Anton's Cajun Seasoning Category=Condiments UnitPrice=22 UnitsInStock=53
    ...

### linq43: GroupBy - Nested
```csharp
//c#
public void Linq43() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var customerOrderGroups = 
        from c in customers 
        select 
            new 
            { 
                c.CompanyName, 
                YearGroups = 
                    from o in c.Orders 
                    group o by o.OrderDate.Year into yg 
                    select 
                        new 
                        { 
                            Year = yg.Key, 
                            MonthGroups = 
                                from o in yg 
                                group o by o.OrderDate.Month into mg 
                                select new { Month = mg.Key, Orders = mg } 
                        } 
            }; 
  
    ObjectDumper.Write(customerOrderGroups, 3); 
} 
```
```js
//JavaScript
function linq43() {
    var customers = getCustomerList();

    var customerOrderGroups = customers.map(function(c) {
        return { 
            companyName: c.CompanyName, 
            yearGroups: c.Orders.reduce(function(array, o) {
                var key = new Date(o.OrderDate).getFullYear();

                var hasKey = array.some(function(item) {
                    return item.key === key ? ((item.values.push(o)), true) : false;
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
                            return item.key === key ? ((item.values.push(o)), true) : false;
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
}
```
#### Output

    CompanyName=Alfreds Futterkiste YearGroups=...
    YearGroups: Year=1997 MonthGroups=...
    MonthGroups: Month=8 Orders=...
    Orders: OrderID=10643 OrderDate=1997-08-25T00:00:00.000Z Total=814.50
    MonthGroups: Month=10 Orders=...
    Orders: OrderID=10692 OrderDate=1997-10-03T00:00:00.000Z Total=878.00
    Orders: OrderID=10702 OrderDate=1997-10-13T00:00:00.000Z Total=330.00
    YearGroups: Year=1998 MonthGroups=...
    MonthGroups: Month=1 Orders=...
    Orders: OrderID=10835 OrderDate=1998-01-15T00:00:00.000Z Total=845.80
    MonthGroups: Month=3 Orders=...
    Orders: OrderID=10952 OrderDate=1998-03-16T00:00:00.000Z Total=471.20
    MonthGroups: Month=4 Orders=...
    Orders: OrderID=11011 OrderDate=1998-04-09T00:00:00.000Z Total=933.50
    ...

### linq44: GroupBy - Comparer
```csharp
//c#
public void Linq44() 
{ 
    string[] anagrams = { "from   ", " salt", " earn ", "  last   ", " near ", " form  " }; 
  
    var orderGroups = anagrams.GroupBy(w => w.Trim(), new AnagramEqualityComparer()); 
  
    ObjectDumper.Write(orderGroups, 1); 
} 
```
```js
//JavaScript
function linq44() {
    var anagrams = ["from   ", " salt", " earn ", "  last   ", " near ", " form  "];

    var anagramGroups = anagrams.reduce(function(array, w) {
        var key = w.replace(/^\s+|\s+$/g, "");

        var hasKey = array.some(function(item) {
            return anagramEqualityComparer(item.key, key) ? ((item.values.push(w)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map(function(g) {
       return { word: g.key, anagrams: g.values };
    });

    anagramGroups.forEach(function(g) {
        console.log("...");

        g.anagrams.forEach(function(a) {
            console.log("'" + a + "'");
        });
    });

    function anagramEqualityComparer(x, y) {
        return getCanonicalString(x) === getCanonicalString(y);

        function getCanonicalString(word) {
            var wordChars = word.split(""); 
            wordChars.sort(); 
            return wordChars.join(""); 
        }
    }
}
```
#### Output

    ...
    'from   '
    ' form  '
    ...
    ' salt'
    '  last   '
    ...
    ' earn '
    ' near '

### linq45: GroupBy - Comparer, Mapped    
```csharp
//c#
public void Linq45() 
{ 
    string[] anagrams = { "from   ", " salt", " earn ", "  last   ", " near ", " form  " }; 
  
    var orderGroups = anagrams.GroupBy( 
                w => w.Trim(), 
                a => a.ToUpper(), 
                new AnagramEqualityComparer() 
                ); 
  
    ObjectDumper.Write(orderGroups, 1); 
} 
```
```js
//JavaScript
function linq45() {
    var anagrams = ["from   ", " salt", " earn ", "  last   ", " near ", " form  "];

    var anagramGroups = anagrams.reduce(function(array, w) {
        var key = w.replace(/^\s+|\s+$/g, "");

        var hasKey = array.some(function(item) {
            return anagramEqualityComparer(item.key, key) ? ((item.values.push(w)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map(function(g) {
        return { word: g.key, anagrams: g.values };
    }).map(function(g) {
        return { 
            word: g.word.toUpperCase(), 
            anagrams: g.anagrams.map(function(a) { 
                return a.toUpperCase(); 
            }) 
        };
    });

    anagramGroups.forEach(function(g) {
        console.log("...");

        g.anagrams.forEach(function(a) {
            console.log("'" + a + "'");
        });
    });

    function anagramEqualityComparer(x, y) {
        return getCanonicalString(x) === getCanonicalString(y);

        function getCanonicalString(word) {
            var wordChars = word.split(""); 
            wordChars.sort(); 
            return wordChars.join(""); 
        }
    }
}
```
#### Output

    ...
    'FROM   '
    ' FORM  '
    ...
    ' SALT'
    '  LAST   '
    ...
    ' EARN '
    ' NEAR '


LINQ - Set Operators
--------------------

### linq46: Distinct - 1
```csharp
//c#
public void Linq46() 
{ 
    int[] factorsOf300 = { 2, 2, 3, 5, 5 }; 
  
    var uniqueFactors = factorsOf300.Distinct(); 
  
    Console.WriteLine("Prime factors of 300:"); 
    foreach (var f in uniqueFactors) 
    { 
        Console.WriteLine(f); 
    } 
}
```
```js
//JavaScript
function linq46() {
    var factorsOf300 = [2, 2, 3, 5, 5]; 

    var uniqueFactors = factorsOf300.filter(function(f, index, array) {
        return array.indexOf(f) === index;
    });

    console.log("Prime factors of 300:");
    uniqueFactors.forEach(function(f) {
        console.log(f);
    });
}
```
#### Output

    Prime factors of 300:
    2
    3
    5

### linq47: Distinct - 2
```csharp
//c#
public void Linq47() 
{ 
    List<Product> products = GetProductList(); 
  
    var categoryNames = ( 
        from p in products 
        select p.Category) 
        .Distinct(); 
  
    Console.WriteLine("Category names:"); 
    foreach (var n in categoryNames) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq47() {
    var products = getProductList();

    var categoryNames = products.map(function(p) {
        return p.Category;
    }).filter(function(p, index, array) {
        return array.indexOf(p) === index;
    });

    console.log("Category names:");
    categoryNames.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    Category names:
    Beverages
    Condiments
    Produce
    Meat/Poultry
    Seafood
    Dairy Products
    Confections
    Grains/Cereals

### linq48: Union - 1
```csharp
//c#
public void Linq48() 
{ 
    int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 }; 
    int[] numbersB = { 1, 3, 5, 7, 8 }; 
  
    var uniqueNumbers = numbersA.Union(numbersB); 
  
    Console.WriteLine("Unique numbers from both arrays:"); 
    foreach (var n in uniqueNumbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq48() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 

    var uniqueNumbers = numbersA.concat(numbersB)
        .filter(function(n, index, array) {
            return array.indexOf(n) === index;
        });

    console.log("Unique numbers from both arrays:");
    uniqueNumbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    Unique numbers from both arrays:
    0
    2
    4
    5
    6
    8
    9
    1
    3
    7

### linq49: Union - 2
```csharp
//c#
public void Linq49() 
{ 
    List<Product> products = GetProductList(); 
    List<Customer> customers = GetCustomerList(); 
  
    var productFirstChars = 
        from p in products 
        select p.ProductName[0]; 
    var customerFirstChars = 
        from c in customers 
        select c.CompanyName[0]; 
  
    var uniqueFirstChars = productFirstChars.Union(customerFirstChars); 
  
    Console.WriteLine("Unique first letters from Product names and Customer names:"); 
    foreach (var ch in uniqueFirstChars) 
    { 
        Console.WriteLine(ch); 
    } 
}
```
```js
//JavaScript
function linq49() {
    var products = getProductList();
    var customers = getCustomerList(); 

    var productFirstChars = products.map(function(p) {
        return p.ProductName[0];
    });

    var customerFirstChars = customers.map(function(c) {
        return c.CompanyName[0];
    });
    
    var uniqueFirstChars = productFirstChars.concat(customerFirstChars)
        .filter(function(ch, index, array) {
            return array.indexOf(ch) === index;
        });

    console.log("Unique first letters from Product names and Customer names:");
    uniqueFirstChars.forEach(function(ch) {
        console.log(ch);
    });
}
```
#### Output

    Unique first letters from Product names and Customer names:
    C
    A
    G
    U
    N
    M
    I
    Q
    K
    T
    P
    S
    R
    B
    J
    Z
    V
    F
    E
    W
    L
    O
    D
    H

### linq50: Intersect - 1
```csharp
//c#
public void Linq50() 
{ 
    int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 }; 
    int[] numbersB = { 1, 3, 5, 7, 8 }; 
  
    var commonNumbers = numbersA.Intersect(numbersB); 
  
    Console.WriteLine("Common numbers shared by both arrays:"); 
    foreach (var n in commonNumbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq50() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 

    var commonNumbers = numbersA.filter(function(n) {
        return numbersB.indexOf(n) != -1;
    }).filter(function(n, index, array) {
        return array.indexOf(n) === index;
    });

    console.log("Common numbers shared by both arrays:");
    commonNumbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    Common numbers shared by both arrays:
    5
    8

### linq51: Intersect - 2
```csharp
//c#
public void Linq51() 
{ 
    List<Product> products = GetProductList(); 
    List<Customer> customers = GetCustomerList(); 
  
    var productFirstChars = 
        from p in products 
        select p.ProductName[0]; 
    var customerFirstChars = 
        from c in customers 
        select c.CompanyName[0]; 
  
    var commonFirstChars = productFirstChars.Intersect(customerFirstChars); 
  
    Console.WriteLine("Common first letters from Product names and Customer names:"); 
    foreach (var ch in commonFirstChars) 
    { 
        Console.WriteLine(ch); 
    } 
}
```
```js
//JavaScript
function linq51() {
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
}
```
#### Output

    Common first letters from Product names and Customer names:
    C
    A
    G
    N
    M
    I
    Q
    K
    T
    P
    S
    R
    B
    V
    F
    E
    W
    L
    O

### linq52: Except - 1
```csharp
//c#
public void Linq52() 
{ 
    int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 }; 
    int[] numbersB = { 1, 3, 5, 7, 8 }; 
  
    IEnumerable<int> aOnlyNumbers = numbersA.Except(numbersB); 
  
    Console.WriteLine("Numbers in first array but not second array:"); 
    foreach (var n in aOnlyNumbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq52() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 

    var aOnlyNumbers = numbersA.filter(function(n) {
        return numbersB.indexOf(n) === -1;
    }).filter(function(n, index, array) {
        return array.indexOf(n) === index;
    });

    console.log("Numbers in first array but not second array:");
    aOnlyNumbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    Numbers in first array but not second array:
    0
    2
    4
    6
    9

### linq53: Except - 2
```csharp
//c#
public void Linq53() 
{ 
    List<Product> products = GetProductList(); 
    List<Customer> customers = GetCustomerList(); 
  
    var productFirstChars = 
        from p in products 
        select p.ProductName[0]; 
    var customerFirstChars = 
        from c in customers 
        select c.CompanyName[0]; 
  
    var productOnlyFirstChars = productFirstChars.Except(customerFirstChars); 
  
    Console.WriteLine("First letters from Product names, but not from Customer names:"); 
    foreach (var ch in productOnlyFirstChars) 
    { 
        Console.WriteLine(ch); 
    } 
}
```
```js
//JavaScript
function linq53() {
    var products = getProductList();
    var customers = getCustomerList(); 

    var productFirstChars = products.map(function(p) {
        return p.ProductName[0];
    });

    var customerFirstChars = customers.map(function(c) {
        return c.CompanyName[0];
    });
    
    var productOnlyFirstChars = productFirstChars.filter(function(ch) {
        return customerFirstChars.indexOf(ch) === -1;
    })
    .filter(function(ch, index, array) {
        return array.indexOf(ch) === index;
    });

    console.log("First letters from Product names, but not from Customer names:");
    productOnlyFirstChars.forEach(function(ch) {
        console.log(ch);
    });
}
```
#### Output

    First letters from Product names, but not from Customer names:
    U
    J
    Z


LINQ - Conversion Operators
---------------------------

### linq54: ToArray
```csharp
//c#
public void Linq54() 
{ 
    double[] doubles = { 1.7, 2.3, 1.9, 4.1, 2.9 }; 
  
    var sortedDoubles = 
        from d in doubles 
        orderby d descending 
        select d; 
    var doublesArray = sortedDoubles.ToArray(); 
  
    Console.WriteLine("Every other double from highest to lowest:"); 
    for (int d = 0; d < doublesArray.Length; d += 2) 
    { 
        Console.WriteLine(doublesArray[d]); 
    } 
}
```
```js
//JavaScript
function linq54() {
    var doubles = [1.7, 2.3, 1.9, 4.1, 2.9]; 

    var sortedDoubles = doubles.slice().sort(function(d1, d2) {
        if (d1 > d2) {
            return -1;
        } 
        if (d1 < d2) { 
            return 1;
        }
        
        return d1 - d2;
    });

    var doublesArray = Array.prototype.slice.call(sortedDoubles);

    console.log("Every other double from highest to lowest:");
    
    for (var d = 0, length = doublesArray.length; d < length; d += 2) 
    { 
        console.log(doublesArray[d]); 
    }
}
```
#### Output

    Every other double from highest to lowest:
    4.1
    2.3
    1.7

### linq55: ToList
```csharp
//c#
public void Linq55() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    var sortedWords = 
        from w in words 
        orderby w 
        select w; 
    var wordList = sortedWords.ToList(); 
  
    Console.WriteLine("The sorted word list:"); 
    foreach (var w in wordList) 
    { 
        Console.WriteLine(w); 
    } 
}
```
```js
//JavaScript
function linq55() {
    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort();
    var wordList = Array.prototype.slice.call(sortedWords);

    console.log("The sorted word list:");
    
    wordList.forEach(function(w) {
        console.log(w); 
    });
}
```
#### Output

    The sorted word list:
    apple
    blueberry
    cherry

### linq56: ToDictionary
```csharp
//c#
public void Linq56() 
{ 
    var scoreRecords = new[] { new {Name = "Alice", Score = 50}, 
                                new {Name = "Bob"  , Score = 40}, 
                                new {Name = "Cathy", Score = 45} 
                            }; 
  
    var scoreRecordsDict = scoreRecords.ToDictionary(sr => sr.Name); 
  
    Console.WriteLine("Bob's score: {0}", scoreRecordsDict["Bob"]); 
}
```
```js
//JavaScript
function linq56() {
    var scoreRecords = [
        { name: "Alice", score: 50 }, 
        { name: "Bob"  , score: 40 }, 
        { name: "Cathy", score: 45 } 
    ]; 

    var scoreRecordsDict = scoreRecords.reduce(function(resultObj, sr) {
        var key = sr.name;
        resultObj[key] = sr;
        return resultObj;
    }, {});

    console.log("Bob's score: { name: " + scoreRecordsDict["Bob"].name + 
        ", score: " + scoreRecordsDict["Bob"].score + " }"); 
}
```
#### Output

    Bob's score: { name: Bob, score: 40 }

### linq57: OfType
```csharp
//c#
public void Linq57() 
{ 
    object[] numbers = { null, 1.0, "two", 3, "four", 5, "six", 7.0 }; 
  
    var doubles = numbers.OfType<double>(); 
  
    Console.WriteLine("Numbers stored as doubles:"); 
    foreach (var d in doubles) 
    { 
        Console.WriteLine(d); 
    } 
}
```
```js
//JavaScript
function linq57() {
    var numbers = [null, 1.0, "two", 3, "four", 5, "six", 7.0];

    var doubles = numbers.filter(function(n) {
        return n === Number(n) && n % 1 !== 0;
    });

    console.log("Numbers stored as doubles:"); 

    doubles.forEach(function (d) {
        console.log(d); 
    });
}
```
#### Output

    Numbers stored as doubles:

> In JavaScript types of number **1** and number **1.0** are the same and equal **integer**, so **1 == 1.0** as well as **1 === 1.0**. As a result, in the **numbers** array there are no any number that might be considered as **double**.


LINQ - Element Operators
------------------------

### linq58: First - Simple
```csharp
//c#
public void Linq58() 
{ 
    List<Product> products = GetProductList(); 
 
    Product product12 = ( 
        from p in products 
        where p.ProductID == 12 
        select p) 
        .First(); 
  
    ObjectDumper.Write(product12); 
}
```
```js
//JavaScript
function linq58() {
    var products = getProductList(); 

    var product12 = products.filter(function(p) {
        return p.ProductID === 12;
    })[0]; 

    console.log("ProductID=" + product12.ProductID + " ProductName=" + product12.ProductName + 
        " Category=" + product12.Category + " UnitPrice=" + product12.UnitPrice + 
        " UnitsInStock=" + product12.UnitsInStock);
}
```
#### Output

    ProductID=12 ProductName=Queso Manchego La Pastora Category=Dairy Products UnitPrice=38 UnitsInStock=86

### linq59: First - Condition
```csharp
//c#
public void Linq59() 
{ 
    string[] strings = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" }; 
  
    string startsWithO = strings.First(s => s[0] == 'o'); 
  
    Console.WriteLine("A string starting with 'o': {0}", startsWithO); 
}
```
```js
//JavaScript
function linq59() {
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
 
    var startsWithO = strings.filter(function(s) {
        return s[0] === "o";
    })[0]; 
    
    console.log("A string starting with 'o': " + startsWithO);
}
```
#### Output

    A string starting with 'o': one

### linq61: FirstOrDefault - Simple
```csharp
//c#
public void Linq61() 
{ 
    int[] numbers = { }; 
  
    int firstNumOrDefault = numbers.FirstOrDefault(); 
  
    Console.WriteLine(firstNumOrDefault); 
}
```
```js
//JavaScript
function linq61() {
    var numbers = []; 
    var intDefaultValue = 0;

    var firstNumOrDefault = numbers[0] || intDefaultValue;

    console.log(firstNumOrDefault);
}
```
#### Output

    0


> JavaScript returns **undefined** as default value for all types. Because of this you should specify some default value (in this case, **intDefaultValue**).


### linq62: FirstOrDefault - Condition
```csharp
//c#
public void Linq62() 
{ 
    List<Product> products = GetProductList(); 
  
    Product product789 = products.FirstOrDefault(p => p.ProductID == 789); 
 
    Console.WriteLine("Product 789 exists: {0}", product789 != null); 
}
```
```js
//JavaScript
function linq62() {
    var products = getProductList(); 
    var defaultProductValue = {};
 
    var product789 = products.filter(function(p) {
        return p.ProductID === 789;
    })[0] || defaultProductValue; 
    
    console.log("Product 789 exists: " + !product789);
}
```
#### Output

    Product 789 exists: false

> JavaScript returns **undefined** as default value for all types. Because of this you should specify some default value (in this case, **defaultProductValue**).

### linq64: ElementAt
```csharp
//c#
public void Linq64() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    int fourthLowNum = ( 
        from n in numbers 
        where n > 5 
        select n) 
        .ElementAt(1);  // second number is index 1 because sequences use 0-based indexing 
 
    Console.WriteLine("Second number > 5: {0}", fourthLowNum); 
}
```
```js
//JavaScript
function linq64() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    
    var fourthLowNum = numbers.filter(function(n) {
        return n > 5;
    })[1];

    console.log("Second number > 5: " + fourthLowNum);
}
```
#### Output

    Second number > 5: 8


LINQ - Generation Operators
---------------------------

### linq65: Range
```csharp
//c#
public void Linq65() 
{ 
    var numbers = 
        from n in Enumerable.Range(100, 50) 
  
        select new { Number = n, OddEven = n % 2 == 1 ? "odd" : "even" }; 
  
    foreach (var n in numbers) 
    { 
        Console.WriteLine("The number {0} is {1}.", n.Number, n.OddEven); 
    } 
}
```
```js
//JavaScript
function linq65() {
    var numbers = Array.apply(null, Array(50))
        .map(function(element, index) {
            return index + 100;  
        }).map(function(n) {
            return { 
                number: n, 
                oddEven: n % 2 === 1 ? "odd" : "even" 
            };
        }); 
    
    numbers.forEach(function(n) {
        console.log("The number " + n.number + " is " + n.oddEven + ".");
    });
}
```
#### Output

    The number 100 is even.
    The number 101 is odd.
    The number 102 is even.
    The number 103 is odd.
    The number 104 is even.
    The number 105 is odd.
    The number 106 is even.
    The number 107 is odd.
    The number 108 is even.
    The number 109 is odd.
    The number 110 is even.
    ...

### linq66: Repeat
```csharp
//c#
public void Linq66() 
{ 
    var numbers = Enumerable.Repeat(7, 10); 
  
    foreach (var n in numbers) 
    {  
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq66() {
    var numbers = Array.apply(null, Array(10))
        .map(function() {
            return 7;
        });

    numbers.forEach(function(n) {
        console.log(n);
    });
}
```
#### Output

    7
    7
    7
    7
    7
    7
    7
    7
    7
    7


LINQ - Quantifiers
------------------

### linq67: Any - Simple
```csharp
//c#
public void Linq67() 
{ 
    string[] words = { "believe", "relief", "receipt", "field" }; 
  
    bool iAfterE = words.Any(w => w.Contains("ei")); 
 
    Console.WriteLine("There is a word that contains in the list that contains 'ei': {0}", iAfterE); 
}
```
```js
//JavaScript
function linq67() {
    var words = ["believe", "relief", "receipt", "field"];
    
    var iAfterE = words.some(function(w) {
        return w.indexOf("ei") > -1;
    }); 

    console.log("There is a word that contains in the list that contains 'ei': " + iAfterE);
}
```
#### Output

    There is a word that contains in the list that contains 'ei': true

### linq69: Any - Grouped
```csharp
//c#
public void Linq69() 
{ 
    List<Product> products = GetProductList(); 
    var productGroups = 
        from p in products 
        group p by p.Category into g 
        where g.Any(p => p.UnitsInStock == 0) 
        select new { Category = g.Key, Products = g }; 
 
    ObjectDumper.Write(productGroups, 1);  
}
```
```js
//JavaScript
function linq69() {
    var products = getProductList();
    
    var productGroups = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).filter(function(g) {
        return g.values.some(function(p) {
            return p.UnitsInStock === 0;
        });
    }).map(function(g, index) {
        return { category: g.key, products: g.values };
    });

    productGroups.forEach(function(g) {
        console.log("Category=" + g.category + " Products=...");
        g.products.forEach(function(p) {
            console.log("Products: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
}
```
#### Output

    Category=Condiments Products=...
    Products: ProductID=3 ProductName=Aniseed Syrup Category=Condiments UnitPrice=10 UnitsInStock=13
    Products: ProductID=4 ProductName=Chef Anton's Cajun Seasoning Category=Condiments UnitPrice=22 UnitsInStock=53
    Products: ProductID=5 ProductName=Chef Anton's Gumbo Mix Category=Condiments UnitPrice=21.35 UnitsInStock=0
    Products: ProductID=6 ProductName=Grandma's Boysenberry Spread Category=Condiments UnitPrice=25 UnitsInStock=120
    Products: ProductID=8 ProductName=Northwoods Cranberry Sauce Category=Condiments UnitPrice=40 UnitsInStock=6
    Products: ProductID=15 ProductName=Genen Shouyu Category=Condiments UnitPrice=15.5 UnitsInStock=39
    Products: ProductID=44 ProductName=Gula Malacca Category=Condiments UnitPrice=19.45 UnitsInStock=27
    Products: ProductID=61 ProductName=Sirop d'érable Category=Condiments UnitPrice=28.5 UnitsInStock=113
    Products: ProductID=63 ProductName=Vegie-spread Category=Condiments UnitPrice=43.9 UnitsInStock=24
    Products: ProductID=65 ProductName=Louisiana Fiery Hot Pepper Sauce Category=Condiments UnitPrice=21.05 UnitsInStock=76
    Products: ProductID=66 ProductName=Louisiana Hot Spiced Okra Category=Condiments UnitPrice=17 UnitsInStock=4
    Products: ProductID=77 ProductName=Original Frankfurter grüne Soße Category=Condiments UnitPrice=13 UnitsInStock=32
    Category=Meat/Poultry Products=...
    ...

### linq70: All - Simple
```csharp
//c#
public void Linq70() 
{  
    int[] numbers = { 1, 11, 3, 19, 41, 65, 19 }; 
  
    bool onlyOdd = numbers.All(n => n % 2 == 1); 
  
    Console.WriteLine("The list contains only odd numbers: {0}", onlyOdd); 
}
```
```js
//JavaScript
function linq70() {
    var numbers = [1, 11, 3, 19, 41, 65, 19];
    
    var onlyOdd = numbers.every(function(n) {
        return n % 2 === 1;
    }); 

    console.log("The list contains only odd numbers: " + onlyOdd);
}
```
#### Output

    The list contains only odd numbers: true

### linq72: All - Grouped
```csharp
//c#
public void Linq72() 
{ 
    List<Product> products = GetProductList(); 
  
    var productGroups = 
        from p in products 
        group p by p.Category into g 
        where g.All(p => p.UnitsInStock > 0) 
        select new { Category = g.Key, Products = g }; 
     
    ObjectDumper.Write(productGroups, 1); 
}
```
```js
//JavaScript
function linq72() {
    var products = getProductList();
    
    var productGroups = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).filter(function(g) {
        return g.values.every(function(p) {
            return p.UnitsInStock > 0;
        });
    }).map(function(g, index) {
        return { category: g.key, products: g.values };
    });

    productGroups.forEach(function(g) {
        console.log("Category=" + g.category + " Products=...");
        g.products.forEach(function(p) {
            console.log("Products: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
}
```
#### Output

    Category=Beverages Products=...
    Products: ProductID=1 ProductName=Chai Category=Beverages UnitPrice=18 UnitsInStock=39
    Products: ProductID=2 ProductName=Chang Category=Beverages UnitPrice=19 UnitsInStock=17
    Products: ProductID=24 ProductName=Guaraná Fantástica Category=Beverages UnitPrice=4.5 UnitsInStock=20
    Products: ProductID=34 ProductName=Sasquatch Ale Category=Beverages UnitPrice=14 UnitsInStock=111
    Products: ProductID=35 ProductName=Steeleye Stout Category=Beverages UnitPrice=18 UnitsInStock=20
    Products: ProductID=38 ProductName=Côte de Blaye Category=Beverages UnitPrice=263.5 UnitsInStock=17
    Products: ProductID=39 ProductName=Chartreuse verte Category=Beverages UnitPrice=18 UnitsInStock=69
    Products: ProductID=43 ProductName=Ipoh Coffee Category=Beverages UnitPrice=46 UnitsInStock=17
    Products: ProductID=67 ProductName=Laughing Lumberjack Lager Category=Beverages UnitPrice=14 UnitsInStock=52
    Products: ProductID=70 ProductName=Outback Lager Category=Beverages UnitPrice=15 UnitsInStock=15
    Products: ProductID=75 ProductName=Rhönbräu Klosterbier Category=Beverages UnitPrice=7.75 UnitsInStock=125
    Products: ProductID=76 ProductName=Lakkalikööri Category=Beverages UnitPrice=18 UnitsInStock=57
    Category=Produce Products=...
    ...


LINQ - Aggregate Operators
--------------------------

### linq73: Count - Simple
```csharp
//c#
public void Linq73() 
{ 
    int[] factorsOf300 = { 2, 2, 3, 5, 5 }; 
  
    int uniqueFactors = factorsOf300.Distinct().Count(); 
  
    Console.WriteLine("There are {0} unique factors of 300.", uniqueFactors); 
}
```
```js
//JavaScript
function linq73() {
    var factorsOf300 = [2, 2, 3, 5, 5];

    var uniqueFactors = factorsOf300.filter(function(f, index, array) {
        return array.indexOf(f) === index;
    }).length;

    console.log("There are " + uniqueFactors + " unique factors of 300.");
}
```
#### Output

    There are 3 unique factors of 300.

### linq74: Count - Conditional
```csharp
//c#
public void Linq74() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    int oddNumbers = numbers.Count(n => n % 2 == 1); 
  
    Console.WriteLine("There are {0} odd numbers in the list.", oddNumbers); 
}
```
```js
//JavaScript
function linq74() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var oddNumbers = numbers.filter(function(n) {
        return n % 2 === 1;
    }).length; 

    console.log("There are " + oddNumbers + " odd numbers in the list.");
}
```
#### Output

    There are 5 odd numbers in the list.

### linq76: Count - Nested
```csharp
//c#
public void Linq76() 
{ 
    List<Customer> customers = GetCustomerList(); 
  
    var orderCounts = 
        from c in customers 
        select new { c.CustomerID, OrderCount = c.Orders.Count() }; 
  
    ObjectDumper.Write(orderCounts); 
}
```
```js
//JavaScript
function linq76() {
    var customers = getCustomerList();

    var orderCounts = customers.map(function(c) {
        return { 
            customerId: c.CustomerId, 
            orderCount: c.Orders.length 
        };
    }); 

    orderCounts.forEach(function(c) {
        console.log("CustomerID=" + c.customerId + "  OrderCount=" + c.orderCount);
    });
}
```
#### Output

    CustomerID=ALFKI  OrderCount=6
    CustomerID=ANATR  OrderCount=4
    CustomerID=ANTON  OrderCount=7
    CustomerID=AROUT  OrderCount=13
    CustomerID=BERGS  OrderCount=18
    CustomerID=BLAUS  OrderCount=7
    CustomerID=BLONP  OrderCount=11
    ...

### linq77: Count - Grouped
```csharp
//c#
public void Linq77() 
{ 
    List<Product> products = GetProductList(); 
  
    var categoryCounts = 
        from p in products 
        group p by p.Category into g 
        select new { Category = g.Key, ProductCount = g.Count() }; 
  
    ObjectDumper.Write(categoryCounts 
}
```
```js
//JavaScript
function linq77() {
    var products = getProductList();
    
    var categoryCounts = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
        return { category: g.key, productCount: g.values.length };
    });

    categoryCounts.forEach(function(p) {
        console.log("Category=" + p.category + "  ProductCount=" + p.productCount);
    });
}
```
#### Output

    Category=Beverages  ProductCount=12
    Category=Condiments  ProductCount=12
    Category=Produce  ProductCount=5
    Category=Meat/Poultry  ProductCount=6
    Category=Seafood  ProductCount=12
    Category=Dairy Products  ProductCount=10
    Category=Confections  ProductCount=13
    Category=Grains/Cereals  ProductCount=7

### linq78: Sum - Simple
```csharp
//c#
public void Linq78() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    double numSum = numbers.Sum(); 
  
    Console.WriteLine("The sum of the numbers is {0}.", numSum); 
}
```
```js
//JavaScript
function linq78() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var numSum = numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0); 

    console.log("The sum of the numbers is " + numSum + ".");
}
```
#### Output

    The sum of the numbers is 45.

### linq79: Sum - Projection
```csharp
//c#
public void Linq79() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    double totalChars = words.Sum(w => w.Length); 
  
    Console.WriteLine("There are a total of {0} characters in these words.", totalChars); 
}
```
```js
//JavaScript
function linq79() {
    var words = ["cherry", "apple", "blueberry"];
    
    var totalChars = words.reduce(function(sum, word) {
        return sum + word.length;
    }, 0); 

    console.log("There are a total of " + totalChars + " characters in these words.");
}
```
#### Output

    There are a total of 20 characters in these words.

### linq80: Sum - Grouped
```csharp
//c#
public void Linq80() 
{ 
    List<Product> products = GetProductList(); 
  
    var categories = 
        from p in products 
        group p by p.Category into g 
        select new { Category = g.Key, TotalUnitsInStock = g.Sum(p => p.UnitsInStock) }; 
  
    ObjectDumper.Write(categories); 
}
```
```js
//JavaScript
function linq80() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
        return { 
            category: g.key, 
            totalUnitsInStock: g.values.reduce(function(sum, product) {
                    return sum + product.UnitsInStock;
                }, 0)
        };
    });

    categories.forEach(function(p) {
        console.log("Category=" + p.category + "  TotalUnitsInStock=" + p.totalUnitsInStock);
    });
}
```
#### Output

    Category=Beverages  TotalUnitsInStock=559
    Category=Condiments  TotalUnitsInStock=507
    Category=Produce  TotalUnitsInStock=100
    Category=Meat/Poultry  TotalUnitsInStock=165
    Category=Seafood  TotalUnitsInStock=701
    Category=Dairy Products  TotalUnitsInStock=393
    Category=Confections  TotalUnitsInStock=386
    Category=Grains/Cereals  TotalUnitsInStock=308

### linq81: Min - Simple
```csharp
//c#
public void Linq81() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    int minNum = numbers.Min(); 
  
    Console.WriteLine("The minimum number is {0}.", minNum); 
}
```
```js
//JavaScript
function linq81() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var minNum = Math.min.apply(Math, numbers); 

    console.log("The minimum number is " + minNum + ".");
}
```
#### Output

    The minimum number is 0.

### linq82: Min - Projection
```csharp
//c#
public void Linq82() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    int shortestWord = words.Min(w => w.Length); 
  
    Console.WriteLine("The shortest word is {0} characters long.", shortestWord); 
}
```
```js
//JavaScript
function linq82() {
    var words = ["cherry", "apple", "blueberry"];
    
    var shortestWord = Math.min.apply(Math, words.map(function(w) {
        return w.length;
    })); 

    console.log("The shortest word is " + shortestWord + " characters long.");
}
```
#### Output

    The shortest word is 5 characters long.

### linq83: Min - Grouped
```csharp
//c#
public void Linq83() 
{ 
    List<Product> products = GetProductList(); 
  
    var categories = 
        from p in products 
        group p by p.Category into g 
        select new { Category = g.Key, CheapestPrice = g.Min(p => p.UnitPrice) }; 
  
    ObjectDumper.Write(categories); 
}
```
```js
//JavaScript
function linq83() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g) {
        return { 
            category: g.key, 
            cheapestPrice: Math.min.apply(Math, g.values.map(function(p) {
                return p.UnitPrice;
            }))
        };
    });

    categories.forEach(function(p) {
        console.log("Category=" + p.category + "  CheapestPrice=" + p.cheapestPrice);
    });
}
```
#### Output

    Category=Beverages  CheapestPrice=4.5
    Category=Condiments  CheapestPrice=10
    Category=Produce  CheapestPrice=10
    Category=Meat/Poultry  CheapestPrice=7.45
    Category=Seafood  CheapestPrice=6
    Category=Dairy Products  CheapestPrice=2.5
    Category=Confections  CheapestPrice=9.2
    Category=Grains/Cereals  CheapestPrice=7

### linq84: Min - Elements
```csharp
//c#
public void Linq84() 
{ 
    List<Product> products = GetProductList(); 
  
    var categories = 
        from p in products 
        group p by p.Category into g 
        let minPrice = g.Min(p => p.UnitPrice) 
        select new { Category = g.Key, CheapestProducts = g.Where(p => p.UnitPrice == minPrice) }; 
  
    ObjectDumper.Write(categories, 1); 
}
```
```js
//JavaScript
function linq84() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g) {
        var minPrice = Math.min.apply(Math, g.values.map(function(p) {
            return p.UnitPrice;
        }));
        
        return { 
            category: g.key,
            cheapestProducts: g.values.filter(function(p) {
                return p.UnitPrice === minPrice;
            })
        };
    });

    categories.forEach(function(g) {
        console.log("Category=" + g.category + " CheapestProducts=...");
        g.cheapestProducts.forEach(function(p) {
            console.log("CheapestProducts: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
}
```
#### Output

    Category=Beverages CheapestProducts=...
    CheapestProducts: ProductID=24 ProductName=Guaraná Fantástica Category=Beverages UnitPrice=4.5 UnitsInStock=20
    Category=Condiments CheapestProducts=...
    CheapestProducts: ProductID=3 ProductName=Aniseed Syrup Category=Condiments UnitPrice=10 UnitsInStock=13
    Category=Produce CheapestProducts=...
    CheapestProducts: ProductID=74 ProductName=Longlife Tofu Category=Produce UnitPrice=10 UnitsInStock=4
    Category=Meat/Poultry CheapestProducts=...
    CheapestProducts: ProductID=54 ProductName=Tourtière Category=Meat/Poultry UnitPrice=7.45 UnitsInStock=21
    Category=Seafood CheapestProducts=...
    CheapestProducts: ProductID=13 ProductName=Konbu Category=Seafood UnitPrice=6 UnitsInStock=24
    Category=Dairy Products CheapestProducts=...
    CheapestProducts: ProductID=33 ProductName=Geitost Category=Dairy Products UnitPrice=2.5 UnitsInStock=112
    Category=Confections CheapestProducts=...
    CheapestProducts: ProductID=19 ProductName=Teatime Chocolate Biscuits Category=Confections UnitPrice=9.2 UnitsInStock=25
    Category=Grains/Cereals CheapestProducts=...
    CheapestProducts: ProductID=52 ProductName=Filo Mix Category=Grains/Cereals UnitPrice=7 UnitsInStock=38

### linq85: Max - Simple
```csharp
//c#
public void Linq85() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    int maxNum = numbers.Max(); 
  
    Console.WriteLine("The maximum number is {0}.", maxNum); 
}
```
```js
//JavaScript
function linq85() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var maxNum = Math.max.apply(null, numbers); 

    console.log("The maximum number is " + maxNum + ".");
}
```
#### Output

    The maximum number is 9.

### linq86: Max - Projection
```csharp
//c#
public void Linq86() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    int longestLength = words.Max(w => w.Length); 
  
    Console.WriteLine("The longest word is {0} characters long.", longestLength); 
}
```
```js
//JavaScript
function linq86() {
    var words = ["cherry", "apple", "blueberry"];
    
    var longestLength = Math.max.apply(null, words.map(function(w) {
        return w.length;
    })); 

    console.log("The longest word is " + longestLength + " characters long.");
}
```
#### Output

    The longest word is 9 characters long.

### linq87: Max - Grouped
```csharp
//c#
public void Linq87() 
{ 
    List<Product> products = GetProductList(); 
  
    var categories = 
        from p in products 
        group p by p.Category into g 
        select new { Category = g.Key, MostExpensivePrice = g.Max(p => p.UnitPrice) }; 
  
    ObjectDumper.Write(categories); 
}
```
```js
//JavaScript
function linq87() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g) {
        return { 
            category: g.key, 
            mostExpensivePrice: Math.max.apply(null, g.values.map(function(p) {
                return p.UnitPrice;
            }))
        };
    });

    categories.forEach(function(p) {
        console.log("Category=" + p.category + "  MostExpensivePrice=" + p.mostExpensivePrice);
    });
}
```
#### Output

    Category=Beverages  MostExpensivePrice=263.5
    Category=Condiments  MostExpensivePrice=43.9
    Category=Produce  MostExpensivePrice=53
    Category=Meat/Poultry  MostExpensivePrice=123.79
    Category=Seafood  MostExpensivePrice=62.5
    Category=Dairy Products  MostExpensivePrice=55
    Category=Confections  MostExpensivePrice=81
    Category=Grains/Cereals  MostExpensivePrice=38

### linq88: Max - Elements
```csharp
//c#
public void Linq88() 
{ 
    List<Product> products = GetProductList(); 
  
    var categories = 
        from p in products 
        group p by p.Category into g 
        let maxPrice = g.Max(p => p.UnitPrice) 
        select new { Category = g.Key, MostExpensiveProducts = g.Where(p => p.UnitPrice == maxPrice) }; 
  
    ObjectDumper.Write(categories, 1); 
}
```
```js
//JavaScript
function linq88() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g) {
        var maxPrice = Math.max.apply(null, g.values.map(function(p) {
            return p.UnitPrice;
        }));
        
        return { 
            category: g.key,
            mostExpensiveProducts: g.values.filter(function(p) {
                return p.UnitPrice === maxPrice;
            })
        };
    });

    categories.forEach(function(g) {
        console.log("Category=" + g.category + " MostExpensiveProducts=...");
        g.mostExpensiveProducts.forEach(function(p) {
            console.log("MostExpensiveProducts: ProductID=" + p.ProductID + " ProductName=" + p.ProductName + 
                " Category=" + p.Category + " UnitPrice=" + p.UnitPrice + " UnitsInStock=" + p.UnitsInStock);
        })
    });
}
```
#### Output

    Category=Beverages MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=38 ProductName=Côte de Blaye Category=Beverages UnitPrice=263.5 UnitsInStock=17
    Category=Condiments MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=63 ProductName=Vegie-spread Category=Condiments UnitPrice=43.9 UnitsInStock=24
    Category=Produce MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=51 ProductName=Manjimup Dried Apples Category=Produce UnitPrice=53 UnitsInStock=20
    Category=Meat/Poultry MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=29 ProductName=Thüringer Rostbratwurst Category=Meat/Poultry UnitPrice=123.79 UnitsInStock=0
    Category=Seafood MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=18 ProductName=Carnarvon Tigers Category=Seafood UnitPrice=62.5 UnitsInStock=42
    Category=Dairy Products MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=59 ProductName=Raclette Courdavault Category=Dairy Products UnitPrice=55 UnitsInStock=79
    Category=Confections MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=20 ProductName=Sir Rodney's Marmalade Category=Confections UnitPrice=81 UnitsInStock=40
    Category=Grains/Cereals MostExpensiveProducts=...
    MostExpensiveProducts: ProductID=56 ProductName=Gnocchi di nonna Alice Category=Grains/Cereals UnitPrice=38 UnitsInStock=21

### linq89: Average - Simple
```csharp
//c#
public void Linq89() 
{ 
    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 }; 
  
    double averageNum = numbers.Average(); 
  
    Console.WriteLine("The average number is {0}.", averageNum); 
}
```
```js
//JavaScript
function linq89() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var averageNum = numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0) / numbers.length; 

    console.log("The average number is " + averageNum + ".");
}
```
#### Output

    The average number is 4.5.

### linq90: Average - Projection
```csharp
//c#
public void Linq90() 
{ 
    string[] words = { "cherry", "apple", "blueberry" }; 
  
    double averageLength = words.Average(w => w.Length); 
  
    Console.WriteLine("The average word length is {0} characters.", averageLength); 
}
```
```js
//JavaScript
function linq90() {
    var words = ["cherry", "apple", "blueberry"];

    var averageLength = words.reduce(function(sum, word) {
        return sum + word.length;
    }, 0) / words.length; 

    console.log("The average word length is " + averageLength + " characters.");
}
```
#### Output

    The average word length is 6.666666666666667 characters.

### linq91: Average - Grouped
```csharp
//c#
public void Linq91() 
{ 
    List<Product> products = GetProductList(); 
  
    var categories = 
        from p in products 
        group p by p.Category into g 
        select new { Category = g.Key, AveragePrice = g.Average(p => p.UnitPrice) }; 
  
    ObjectDumper.Write(categories); 
}
```
```js
//JavaScript
function linq91() {
    var products = getProductList();
    
    var categories = products.reduce(function(array, p) {
        var key = p.Category;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(p)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(function(g, index) {
        return { 
            category: g.key, 
            averagePrice: g.values.reduce(function(sum, product) {
                    return sum + product.UnitPrice;
                }, 0) / g.values.length
        };
    });

    categories.forEach(function(p) {
        console.log("Category=" + p.category + "  AveragePrice=" + p.averagePrice);
    });
}
```
#### Output

    Category=Beverages  AveragePrice=37.979166666666664
    Category=Condiments  AveragePrice=23.0625
    Category=Produce  AveragePrice=32.37
    Category=Meat/Poultry  AveragePrice=54.00666666666667
    Category=Seafood  AveragePrice=20.6825
    Category=Dairy Products  AveragePrice=28.73
    Category=Confections  AveragePrice=25.16
    Category=Grains/Cereals  AveragePrice=20.25

### linq92: Aggregate - Simple
```csharp
//c#
public void Linq92() 
{ 
    double[] doubles = { 1.7, 2.3, 1.9, 4.1, 2.9 }; 
  
    double product = doubles.Aggregate((runningProduct, nextFactor) => runningProduct * nextFactor); 
  
    Console.WriteLine("Total product of all numbers: {0}", product); 
}
```
```js
//JavaScript
function linq92() {
    var doubles = [1.7, 2.3, 1.9, 4.1, 2.9];
    
    var product = doubles.reduce(function(runningProduct, nextFactor) {
        return runningProduct * nextFactor;
    }, 1); 

    console.log("Total product of all numbers: " + product);
}
```
#### Output

    Total product of all numbers: 88.33080999999999

### linq93: Aggregate - Seed
```csharp
//c#
public void Linq93() 
{ 
    double startBalance = 100.0; 
  
    int[] attemptedWithdrawals = { 20, 10, 40, 50, 10, 70, 30 }; 
  
    double endBalance = 
        attemptedWithdrawals.Aggregate(startBalance, 
            (balance, nextWithdrawal) => 
                ((nextWithdrawal <= balance) ? (balance - nextWithdrawal) : balance)); 
  
    Console.WriteLine("Ending balance: {0}", endBalance); 
}
```
```js
//JavaScript
function linq93() {
    var startBalance = 100.0;

    var attemptedWithdrawals = [20, 10, 40, 50, 10, 70, 30];
    
    var endBalance = attemptedWithdrawals.reduce(function(balance, nextWithdrawal) {
        return nextWithdrawal <= balance ? (balance - nextWithdrawal) : balance;
    }, startBalance); 

    console.log("Ending balance: " + endBalance);
}
```
#### Output

    Ending balance: 20


LINQ - Miscellaneous Operators
------------------------------

### linq94: Concat - 1
```csharp
//c#
public void Linq94() 
{ 
    int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 }; 
    int[] numbersB = { 1, 3, 5, 7, 8 }; 
  
    var allNumbers = numbersA.Concat(numbersB); 
  
    Console.WriteLine("All numbers from both arrays:"); 
    foreach (var n in allNumbers) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq94() {
    var numbersA = [0, 2, 4, 5, 6, 8, 9];
    var numbersB = [1, 3, 5, 7, 8];
    
    var allNumbers = numbersA.concat(numbersB);
    
    console.log("All numbers from both arrays:");

    allNumbers.forEach(function(n) { 
        console.log(n);
    });
}
```
#### Output

    All numbers from both arrays:
    0
    2
    4
    5
    6
    8
    9
    1
    3
    5
    7
    8

### linq95: Concat - 2
```csharp
//c#
public void Linq95() 
{ 
    List<Customer> customers = GetCustomerList(); 
    List<Product> products = GetProductList(); 
  
    var customerNames = 
        from c in customers 
        select c.CompanyName; 
    var productNames = 
        from p in products 
        select p.ProductName; 
  
    var allNames = customerNames.Concat(productNames); 
  
    Console.WriteLine("Customer and product names:"); 
    foreach (var n in allNames) 
    { 
        Console.WriteLine(n); 
    } 
}
```
```js
//JavaScript
function linq95() {
    var customers = getCustomerList();
    var products = getProductList();
    
    var customerNames = customers.map(function(c) {
        return c.CompanyName;
    });
    
    var productNames = products.map(function(p) {
        return p.ProductName;
    });

    var allNames = customerNames.concat(productNames); 
        
    console.log("Customer and product names:");

    allNames.forEach(function(n) { 
        console.log(n);
    });
}
```
#### Output

    Customer and product names:
    Alfreds Futterkiste
    Ana Trujillo Emparedados y helados
    Antonio Moreno Taquería
    Around the Horn
    Berglunds snabbköp
    Blauer See Delikatessen
    ...

### linq96: EqualAll - 1
```csharp
//c#
public void Linq96() 
{ 
    var wordsA = new string[] { "cherry", "apple", "blueberry" }; 
    var wordsB = new string[] { "cherry", "apple", "blueberry" }; 
  
    bool match = wordsA.SequenceEqual(wordsB); 
  
    Console.WriteLine("The sequences match: {0}", match); 
}
```
```js
//JavaScript
function linq96() {
    var wordsA = ["cherry", "apple", "blueberry"]; 
    var wordsB = ["cherry", "apple", "blueberry"]; 

    var match = wordsA.length === wordsB.length && 
        wordsA.every(function(w, index) { 
            return w === wordsB[index]; 
        });

    console.log("The sequences match: " + match);
}
```
#### Output

    The sequences match: true

### linq97: EqualAll - 2
```csharp
//c#
public void Linq97() 
{ 
    var wordsA = new string[] { "cherry", "apple", "blueberry" }; 
    var wordsB = new string[] { "apple", "blueberry", "cherry" }; 
  
    bool match = wordsA.SequenceEqual(wordsB); 
  
    Console.WriteLine("The sequences match: {0}", match); 
}
```
```js
//JavaScript
function linq97() {
    var wordsA = ["cherry", "apple", "blueberry"]; 
    var wordsB = ["apple", "blueberry", "cherry"]; 

    var match = wordsA.length === wordsB.length && 
        wordsA.every(function(w, index) { 
            return w === wordsB[index]; 
        });

    console.log("The sequences match: " + match);
}
```
#### Output

    The sequences match: false


LINQ - Custom Sequence Operators
----------------------

### linq98: Combine
```csharp
//c#
public static class CustomSequenceOperators 
{ 
    public static IEnumerable Combine(this IEnumerable first, IEnumerable second,  
    Func func) { 
        using (IEnumerator e1 = first.GetEnumerator(), e2 = second.GetEnumerator()) 
        { 
            while (e1.MoveNext() && e2.MoveNext()) { 
                yield return func(e1.Current, e2.Current); 
            } 
        } 
    } 
} 
 
public void Linq98() {
    int[] vectorA = { 0, 2, 4, 5, 6 }; 
    int[] vectorB = { 1, 3, 5, 7, 8 }; 
     
    int dotProduct = vectorA.Combine(vectorB, (a, b) => a * b).Sum(); 
     
    Console.WriteLine("Dot product: {0}", dotProduct); 
}
```
```js
//JavaScript
function linq98() {
    var vectorA = [0, 2, 4, 5, 6]; 
    var vectorB = [1, 3, 5, 7, 8]; 
     
    var dotProduct = vectorA.map(function(a, index) {
        return a * vectorB[index];
    }).reduce(function(sum, number) {
        return sum + number;
    }, 0); 
     
    console.log("Dot product: " + dotProduct); 
}
```
#### Output

    Dot product: 109


LINQ - Query Execution
----------------------


Coming soon..


## LICENSE
[The MIT License](https://github.com/Sufflavus/javascript-es5-linq-examples/blob/master/LICENSE)