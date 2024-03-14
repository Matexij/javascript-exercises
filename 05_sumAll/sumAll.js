const sumAll = function(start, end) {
    if(start < 0 || end < 0)
        return 'ERROR'
    if(typeof start !== "number" || typeof end !== "number")
        return 'ERROR'
    let sum = 0;
    const minNum = Math.min(start, end)
    const maxNum = Math.max(start, end)
    for(let i=minNum; i<=maxNum; i++){
        sum +=i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
