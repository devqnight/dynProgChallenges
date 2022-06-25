//----------------------------------------------
//
//  how sum : takes a target number and an array 
//            of numbers. Should return a combination
//            to get to the target sum with the numbers
//            in the array
//
//----------------------------------------------

const { executeTimed } = require("./utils/timer");

const howSum = function(targetSum, numbers) {
    if (targetSum === 0 ) return [];
    if (targetSum < 0) return null;
    for(let num of numbers){
        const res = howSum(targetSum - num, numbers);
        if( res !== null ){
            return [...res, num];
        }
    }
    return null;
}

const howSumMemo = function(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 ) return [];
    if (targetSum < 0) return null;
    for(let num of numbers){
        const res = howSum(targetSum - num, numbers, memo);
        if( res !== null ){
            memo[targetSum] = [...res, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

executeTimed(howSum, [7, [2, 3]]);
executeTimed(howSumMemo, [7, [2, 3]]);
console.log()

executeTimed(howSum, [7, [5, 3, 4, 7]]);
executeTimed(howSumMemo, [7, [5, 3, 4, 7]]);
console.log()

executeTimed(howSum, [7, [2, 4]]);
executeTimed(howSumMemo, [7, [2, 4]]);
console.log()

executeTimed(howSum, [8, [2, 3, 5]]);
executeTimed(howSumMemo, [8, [2, 3, 5]]);
console.log()

executeTimed(howSum, [300, [7, 14]]);
executeTimed(howSumMemo, [300, [7, 14]]);