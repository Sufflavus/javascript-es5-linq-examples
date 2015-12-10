(function() {
    var words = ["cherry", "apple", "blueberry"];
    
    var totalChars = words.reduce(function(sum, word) {
        return sum + word.length;
    }, 0); 

    console.log("There are a total of " + totalChars + " characters in these words.");
})();