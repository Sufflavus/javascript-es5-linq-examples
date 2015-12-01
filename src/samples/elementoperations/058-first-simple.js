(function() {
    var products = getProductList(); 
 
    var product12 = products.filter(function(p) {
        return p.ProductID === 12;
    })[0]; 

    console.log(product12);
    
    console.log("ProductID=" + product12.ProductID + " ProductName=" + product12.ProductName + 
        " Category=" + product12.Category + " UnitPrice=" + product12.UnitPrice + 
        " UnitsInStock=" + product12.UnitsInStock);    
})();