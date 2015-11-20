(function() {
    var words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    var sortedWords = words.slice().sort(caseInsensitiveComparer);

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
