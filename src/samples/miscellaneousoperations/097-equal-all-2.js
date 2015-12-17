(function() {
    var wordsA = ["cherry", "apple", "blueberry"]; 
    var wordsB = ["apple", "blueberry", "cherry"]; 

    var match = wordsA.length === wordsB.length && 
        wordsA.every(function(w, index) { 
            return w === wordsB[index]; 
        });

    console.log("The sequences match: " + match);
})();