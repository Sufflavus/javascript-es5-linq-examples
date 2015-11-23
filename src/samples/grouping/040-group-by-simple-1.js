(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numberGroups = numbers.reduce(function(array, item) {
        var key = item % 5;

        var hasKey = array.some(function(n) {
            return n.key !== key ? false : ((n.values.push(item)), true);
        });

        if(!hasKey){
            array.push({key: key, values: [item]});
        }

        return array;
    }, []).map(function(g, index) {
       return {remainder: g.key, numbers: g.values };
    });

    numberGroups.forEach(function(g) {
        console.log("Numbers with a remainder of " + g.remainder + " when divided by 5:");
        g.numbers.forEach(function(n) {
            console.log(n);
        })
    });
})();