const fibonacci = function(member) {
    let memo = [1, 1];
    if (member < 0)
        return 'OOPS'
    for (let i = 2; i <= member; i++)
    {
        // change corresponding array to the sum of current array values
        memo[i % 2] = memo[0] + memo[1]
    
    } 
    return memo[(member + 1) % 2];

}
// Do not edit below this line
module.exports = fibonacci;
