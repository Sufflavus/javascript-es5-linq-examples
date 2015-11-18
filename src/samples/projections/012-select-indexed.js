(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    var numsInPlace = numbers.map(function(num, index) {
        return { 
            num: num, 
            inPlace: (num === index)
        };
    }); 

    console.log("Number: In-place?"); 
    
    numsInPlace.forEach(function(n) {
        console.log(n.num + ": " + n.inPlace);
    });
})();
