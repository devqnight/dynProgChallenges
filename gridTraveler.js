const { factorialMemo, factorial } = require("./utils/customMath");
const {executeTimed} = require("./utils/timer");

//----------------------------------------------
//
//  grid traveler : calculate number of paths 
//                  to go from top left corner 
//                  to bottom right corner 
//                  of the grid.
//
//----------------------------------------------


/**
 * Calculates the number of different paths going from top left corner of grid to bottom right corner
 * @param {number} n 
 * @param {number} m 
 * @returns {number} nPaths
 */
const gridTraveler = function(n, m) {
    if( !n || !m) return 0;
    if( n == 1 && m == 1) return 1;
    return (factorial((n+m)-2) / (factorial(n - 1) * factorial(m - 1))) ;
};

/**
 * Calculates the number of different paths going from top left corner of grid to bottom right corner
 * Uses memoization to optimize, and goes through the grid recursively
 * @param {number} n 
 * @param {number} m 
 * @returns {number} nPaths
 */
const gridTraveler2 = function(n, m, memo = {}) {
    const key = "(" + n + "," + m + ")";
    if (key in memo ) return memo[key];
    if( !n || !m ) return 0;
    if( n == 1 && m == 1 ) return 1;
    memo[key] = gridTraveler2(n-1, m, memo) + gridTraveler2(n, m-1, memo);
    return memo[key];
}

/**
 * Calculates the number of different paths going from top left corner of grid to bottom right corner
 * Uses factorial function that uses memoization for the factorials
 * @param {number} n 
 * @param {number} m 
 * @returns {number} nPaths
 */
const gridTraveler3 = function(n, m) {
    let facts = {};
    if( !n || !m) return 0;
    if( n == 1 && m == 1) return 1;
    return (factorialMemo((n+m)-2, facts) / (factorialMemo(n - 1, facts) * factorialMemo(m - 1, facts))) ;
};



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
