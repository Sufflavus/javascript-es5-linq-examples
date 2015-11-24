(function() {
    var words = ["blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese"]; 

    var wordGroups = words.reduce(function(array, w) {
        var key = w[0];

        var hasKey = array.some(function(item) {
            return item.key !== key ? false : ((item.values.push(w)), true);
        });

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map(function(g, index) {
       return { firstLetter : g.key, words: g.values };
    });

    wordGroups.forEach(function(g) {
        console.log("Words that start with the letter '" + g.firstLetter + "':");
        g.words.forEach(function(w) {
            console.log(w);
        })
    });
})();