(function() {
    var words = ["believe", "relief", "receipt", "field"];
    
    var iAfterE = words.some(function(w) {
        return w.indexOf("ei") > -1;
    }); 

    console.log("There is a word that contains in the list that contains 'ei': " + iAfterE);
})();