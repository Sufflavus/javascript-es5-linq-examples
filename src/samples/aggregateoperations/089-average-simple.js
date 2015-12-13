(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    var averageNum = numbers.reduce(function(sum, number) {
        return sum + number;
    }, 0) / numbers.length; 

    console.log("The average number is " + averageNum + ".");
})();