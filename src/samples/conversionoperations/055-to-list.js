(function() {
    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort();
    var wordList = Array.prototype.slice.call(sortedWords);

    console.log("The sorted word list:");
    
    wordList.forEach(function(w) {
        console.log(w); 
    });    
})();