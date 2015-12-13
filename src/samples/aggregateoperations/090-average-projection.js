(function() {
    var words = ["cherry", "apple", "blueberry"];
    
    var averageLength = words.reduce(function(sum, word) {
        return sum + word.length;
    }, 0) / words.length; 

    console.log("The average word length is " + averageLength + " characters.");
})();