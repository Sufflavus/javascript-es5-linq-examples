(function() {
    var startBalance = 100.0;

    var attemptedWithdrawals = [20, 10, 40, 50, 10, 70, 30];
    
    var endBalance = attemptedWithdrawals.reduce(function(balance, nextWithdrawal) {
        return nextWithdrawal <= balance ? (balance - nextWithdrawal) : balance;
    }, startBalance); 

    console.log("Ending balance: " + endBalance);
})();