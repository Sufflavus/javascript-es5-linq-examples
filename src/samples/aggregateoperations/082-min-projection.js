(function() {
    var words = ["cherry", "apple", "blueberry"];
    
    var shortestWord = Math.min.apply(Math, words.map(function(w) {
        return w.length;
    })); 

    console.log("The shortest word is " + shortestWord + " characters long.");
})();