const sumAll = function(num1, num2) {
    // checking if arguments are number type
    if (!Number.isInteger(num1)|| !Number.isInteger(num2) || num1 < 0 || num2 < 0)
        return 'ERROR';
    // ***idea 2
    let start;
    let end;
    let numInts;

    // find the greater of the two numbers
    if (num1 < num2)
    {
        start = num1;
        end = num2;
    }
    else
    {
        start = num2;
        end = num1;
    }
    numInts = end - 1 + 1;

    // summation formula for all integers between two given integers
    return (numInts / 2) * (start + end);
};

// Do not edit below this line
module.exports = sumAll;
