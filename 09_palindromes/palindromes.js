const palindromes = function (word) {
    const characters = word.toLowerCase().split('');

    let letters = characters.filter(character => !isInvalid(character))
    
    const forwards = letters.join('');

    letters.reverse();

    const backwards = letters.join('');
    return forwards === backwards;
    
    function isInvalid (character)
    {
        return character === '.' || character === '?' || 
               character === '!' || character === `,` || character === ' ';
    }
};

// Do not edit below this line
module.exports = palindromes;
