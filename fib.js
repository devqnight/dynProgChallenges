const {executeTimed} = require("./utils/timer");

//----------------------------------------------
//
//  fibonacci : calculates nth fibonacci number
//
//----------------------------------------------


const fib = function(n) {
	if(n<=2) return 1;
	if(n==3) return 2;
	return 2*fib(n-2) + fib(n-3); 
};

const fib2 = function(n) {
	if(n<=2) return 1;
	return fib(n-1) + fib(n-2);
}

const fib3 = function(n, memo = {}) {
	if (n in memo)
		return memo[n];
	if (n<=2) return 1;
	memo[n] = fib(n-1, memo) + fib(n-2, memo);
	return memo[n]
}

executeTimed(fib, [5]);
executeTimed(fib2, [5]);
executeTimed(fib3, [5]);
console.log();

executeTimed(fib, [6]);
executeTimed(fib2, [6]);
executeTimed(fib3, [6]);
console.log();

executeTimed(fib, [7]);
executeTimed(fib2, [7]);
executeTimed(fib3, [7]);
console.log();

executeTimed(fib, [50]);
executeTimed(fib2, [50]);
executeTimed(fib3, [50]);
console.log();
