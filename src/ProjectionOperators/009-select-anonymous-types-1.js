(function() {
    var words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    var result = words.map(function(w) { 
        return { 
            upper: w.toUpperCase(), 
            lower: w.toLowerCase()
        }; 
    });

    result.forEach(function(item) {
        console.log("Uppercase: " + item.upper + ", Lowercase: " + item.lower);
    });
})();
