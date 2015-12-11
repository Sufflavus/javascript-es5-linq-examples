(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var minNum = Math.min.apply(Math, numbers); 

    console.log("The minimum number is " + minNum + ".");
})();