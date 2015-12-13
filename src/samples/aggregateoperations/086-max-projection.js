(function() {
    var words = ["cherry", "apple", "blueberry"];
    
    var longestLength = Math.max.apply(null, words.map(function(w) {
        return w.length;
    })); 

    console.log("The longest word is " + longestLength + " characters long.");
})();