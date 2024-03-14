const removeFromArray = function(input, ...params) {
    let result = input
    params.forEach((el)=>{
        result = result.filter(function(item){
            return item !== el
        })
    })
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
