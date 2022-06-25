const {executeTimed} = require("./utils/timer");

//----------------------------------------------
//
//  can sum : takes a target number and an array 
//            of numbers. Should return true/false
//            wether or not it is possible to get
//            to the target sum with the numbers
//            in the array
//
//----------------------------------------------

const canSum = function(targetSum, numbers) {
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;
    let res = numbers.some((value, index, array) => canSum((targetSum - value), array));
    return res;
}

const canSumFor = function(targetSum, numbers) {
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;
    for (let number of numbers){
        const rem = targetSum - number;
        if (canSum(rem, numbers) == true)
            return true;
    }
    return false
}

const canSumMemo = function(targetSum, numbers, memo = {}) {
    if (targetSum in numbers) return memo[targetSum];
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;
    let res = numbers.some((value, index, array) => {memo[targetSum] = canSum((targetSum - value), array, memo); return memo[targetSum]});
    return res;
}

const canSumForMemo = function(targetSum, numbers, memo = {}) {
    if (targetSum in numbers) return memo[targetSum];
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;
    for (let number of numbers){
        const rem = targetSum - number;
        if (canSum(rem, numbers) == true)
            memo[targetSum] = true;
            return true;
    }
    memo[targetSum] = false;
    return false
}

executeTimed(canSum, [7, [2, 3]]);
executeTimed(canSumFor, [7, [2, 3]]);
executeTimed(canSumMemo, [7, [2, 3]]);
console.log()

executeTimed(canSum, [7, [5, 3, 4, 7]]);
executeTimed(canSumFor, [7, [5, 3, 4, 7]]);
executeTimed(canSumMemo, [7, [5, 3, 4, 7]]);
console.log()

executeTimed(canSum, [7, [2, 4]]);
executeTimed(canSumFor, [7, [2, 4]]);
executeTimed(canSumMemo, [7, [2, 4]]);
console.log()

executeTimed(canSum, [8, [2, 3, 5]]);
executeTimed(canSumFor, [8, [2, 3, 5]]);
executeTimed(canSumMemo, [8, [2, 3, 5]]);
console.log()

executeTimed(canSum, [300, [7, 14]]);
executeTimed(canSumFor, [300, [7, 14]]);
executeTimed(canSumMemo, [300, [7, 14]]);
executeTimed(canSumForMemo, [300, [7, 14]]);