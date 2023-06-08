const reverseString = function(str) {
    let output = '';
    // set new array variable into split of str
    let eachChar = str.split('');
    // iterate through array in reverse
    for (let i = eachChar.length - 1; i >= 0; i--)
    {
        output += eachChar[i]
    }
    // concatenate each character it to an output string 
    // return the resultant string
    return output;
};

// Do not edit below this line
module.exports = reverseString;
