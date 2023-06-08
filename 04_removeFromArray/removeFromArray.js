const removeFromArray = function(array, ...toRemove) {
    // returns a filtered version of array
    return array.filter((element)=>{
        // compares each element of array with the optional args (the items to be removed)
        for (const item of toRemove)
            if (item === element)
                return false;
        return true;
    })


};

// Do not edit below this line
module.exports = removeFromArray;
