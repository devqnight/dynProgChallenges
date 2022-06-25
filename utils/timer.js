const performance = require("perf_hooks").performance;

const executeTimed = (func, args) => {
    const time0 = performance.now();
    console.log(func.name, args, " : ", func(...args));
    const time1 = performance.now();
    console.log("-- performed in : ", time1-time0 , "ms")
}

module.exports = {executeTimed};