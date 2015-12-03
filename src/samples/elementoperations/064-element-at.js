(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
    
    var fourthLowNum = numbers.filter(function(n) {
        return n > 5;
    })[1];

    console.log("Second number > 5: " + fourthLowNum);
})();