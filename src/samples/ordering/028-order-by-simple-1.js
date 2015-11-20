(function() {
    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort();

    console.log("The sorted list of words:"); 

    sortedWords.forEach(function(w) {
        console.log(w);
    });
})();
