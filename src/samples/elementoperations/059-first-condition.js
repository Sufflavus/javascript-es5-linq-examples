(function() {
    var strings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
 
    var startsWithO = strings.filter(function(s) {
        return s[0] === "o";
    })[0]; 
    
    console.log("A string starting with 'o': " + startsWithO);
})();