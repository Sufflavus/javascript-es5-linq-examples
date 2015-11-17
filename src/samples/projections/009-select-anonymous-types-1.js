(function() {
    var words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    var upperLowerWords = words.map(function(w) { 
        return { 
            upper: w.toUpperCase(), 
            lower: w.toLowerCase()
        }; 
    });

    upperLowerWords.forEach(function(ul) {
        console.log("Uppercase: " + ul.upper + ", Lowercase: " + ul.lower);
    });
})();
