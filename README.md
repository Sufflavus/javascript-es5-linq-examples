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

The samples below mirrors the C# LINQ samples layout with the names of the top-level Swift methods matching their corresponding C# examples.

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
function linq1(){
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
function linq2(){
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
function linq3(){
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
function linq4(){
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
function linq5(){
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

Coming soon..


## LICENSE
[The MIT License](https://github.com/Sufflavus/javascript-es5-linq-examples/blob/master/LICENSE)