const removeFromArray = function(array, ...toRemove) {
    // use fjilter function on array
    return array.filter((element)=>{
        for (const item of toRemove)
            if (item === element)
                return false;
        return true;
    })

    // within function expression inside of filter, have it do a for each loop to compare the element with those in toRemove

};

// Do not edit below this line
module.exports = removeFromArray;
