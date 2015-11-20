(function() {
    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort(function(w1, w2) {
        return w1.length - w2.length;
    });

    console.log("The sorted list of words (by length):"); 

    sortedWords.forEach(function(w) {
        console.log(w);
    });
})();
