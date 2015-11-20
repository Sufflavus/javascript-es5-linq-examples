(function() {
    var words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    var sortedWords = words.slice().sort(function(a1, a2) {
        if (a1.length > a2.length) {
            return 1;
        } 
        if (a1.length < a2.length) { 
            return -1;
        }

        return caseInsensitiveComparer(a1, a2);
    });

    sortedWords.forEach(function(w) {
        console.log(w);
    });

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return 1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return -1;
        }
        return 0;
    }
})();
