(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numberGroups = numbers.reduce(function(array, n) {
        var key = n % 5;

        var hasKey = array.some(function(item) {
            return item.key === key ? ((item.values.push(n)), true) : false;
        });

        if(!hasKey){
            array.push({key: key, values: [n]});
        }

        return array;
    }, []).map(function(g, index) {
        return { remainder: g.key, numbers: g.values };
    });

    numberGroups.forEach(function(g) {
        console.log("Numbers with a remainder of " + g.remainder + " when divided by 5:");
        g.numbers.forEach(function(n) {
            console.log(n);
        })
    });
})();