const fibonacci = function(index) {
    index = Number(index)
    if(index<=2 && index>0)
        return 1
    if(index == 0)
        return 0
    if(index<0)
        return 'OOPS'
    
    const sum = fibonacci(index-1)+fibonacci(index-2)
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
