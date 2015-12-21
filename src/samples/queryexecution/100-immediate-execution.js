(function() {
    var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 
  
    var i = 0; 
    var q = numbers.map(function() {
        return ++i;
    }); 

    q.forEach(function(v){
        console.log("v = " + v + " i = " + i); 
    });  
})();