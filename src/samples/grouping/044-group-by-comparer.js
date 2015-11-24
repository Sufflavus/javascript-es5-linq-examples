(function() {
    var anagrams = ["from   ", " salt", " earn ", "  last   ", " near ", " form  "];

    var anagramGroups = anagrams.map(function(w) {
        return w.replace(/^\s+|\s+$/g, '');
    }).reduce(function(array, w) {
        var key = w;

        var hasKey = array.some(function(item) {
            return anagramEqualityComparer(item.key, key) ? ((item.values.push(w)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map(function(g) {
       return { word: g.key, anagrams: g.values };
    });

    anagramGroups.forEach(function(g) {
        console.log("...");

        g.anagrams.forEach(function(a) {
            console.log(a);
        });
    });

    function anagramEqualityComparer(x, y) {
        return getCanonicalString(x) === getCanonicalString(y);

        function getCanonicalString(word) {
            var wordChars = word.split(""); 
            wordChars.sort(); 
            return wordChars.join(""); 
        }
    }
})();