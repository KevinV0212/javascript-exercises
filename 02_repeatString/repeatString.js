const repeatString = function(str, times) {
    let retString = '';

    // handles invalid (negative) number of times
    if (times < 0)
        return 'ERROR'
    
    // for loop running times number of times
    for (let i = 0; i < times; i++)
    {
        retString += str;
    }
    return retString;

};

// Do not edit below this line
module.exports = repeatString;
