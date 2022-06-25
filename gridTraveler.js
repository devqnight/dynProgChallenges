const performance = require("perf_hooks").performance;

const gridTraveler = function(n, m) {
    if( !n || !m) return 0;
    if( n == 1 && m == 1) return 1;
    return (factorial((n+m)-2) / (factorial(n - 1) * factorial(m - 1))) ;
};

const gridTraveler2 = function(n, m, memo = {}) {
    const key = "(" + n + "," + m + ")";
    if (key in memo ) return memo[key];
    if( !n || !m ) return 0;
    if( n == 1 && m == 1 ) return 1;
    memo[key] = gridTraveler2(n-1, m, memo) + gridTraveler2(n, m-1, memo);
    return memo[key];
}

const gridTraveler3 = function(n, m) {
    let facts = {};
    if( !n || !m) return 0;
    if( n == 1 && m == 1) return 1;
    return (factorial2((n+m)-2, facts) / (factorial2(n - 1, facts) * factorial2(m - 1, facts))) ;
};

const factorial = function(n){
    if( n==0 ) return 1;
    return n * factorial(n-1);
}

const factorial2 = function(n, factorials){
    if (n in factorials) return factorials[n];
    if( n==0 ) return 1;
    factorials[n] = n * factorial2(n-1, factorials);
    return factorials[n];
}

const executeTimed = (func, args) => {
    const time0 = performance.now();
    console.log(func.name, args, " : ", func(...args));
    const time1 = performance.now();
    console.log("-- performed in : ", time1-time0 , "ms")
}

executeTimed(gridTraveler, [0,1])
executeTimed(gridTraveler2, [0,1])
executeTimed(gridTraveler3, [0,1])
console.log();
executeTimed(gridTraveler, [1,1])
executeTimed(gridTraveler2, [1,1])
executeTimed(gridTraveler3, [1,1])
console.log();
executeTimed(gridTraveler, [2,3])
executeTimed(gridTraveler2, [2,3])
executeTimed(gridTraveler3, [2,3])
console.log();
executeTimed(gridTraveler, [4,5])
executeTimed(gridTraveler2, [4,5])
executeTimed(gridTraveler3, [4,5])
console.log();
executeTimed(gridTraveler, [5,7])
executeTimed(gridTraveler2, [5,7])
executeTimed(gridTraveler3, [5,7])
console.log();
executeTimed(gridTraveler, [13,15])
executeTimed(gridTraveler2, [13,15])
executeTimed(gridTraveler3, [13,15])
console.log();

executeTimed(gridTraveler, [18,18])
executeTimed(gridTraveler2, [18,18])
executeTimed(gridTraveler3, [18,18])
console.log();

executeTimed(gridTraveler, [13,150])
executeTimed(gridTraveler2, [13,150])
executeTimed(gridTraveler3, [13,150])
console.log();
