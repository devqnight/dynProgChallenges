const factorial = function(n){
    if( n==0 ) return 1;
    return n * factorial(n-1);
}

const factorialMemo = function(n, factorials = {}){
    if (n in factorials) return factorials[n];
    if( n==0 ) return 1;
    factorials[n] = n * factorialMemo(n-1, factorials);
    return factorials[n];
}

module.exports = {factorial, factorialMemo}