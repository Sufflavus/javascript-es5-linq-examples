(function() {
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
})();