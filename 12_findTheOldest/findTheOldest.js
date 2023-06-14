const findTheOldest = function(people) {
    // sort the list oldest to youngest
    const olds = people.sort((personA, personB) =>{
        const birthA = personA.yearOfBirth;
        const deathA = (personA.yearOfDeath) ? personA.yearOfDeath : (new Date).getFullYear();

        const birthB = personB.yearOfBirth;
        const deathB = (personB.yearOfDeath) ? personB.yearOfDeath : (new Date).getFullYear();
        
        ageA = deathA - birthA;
        ageB = deathB - birthB;
        return (ageA > ageB) ? -1 : 1;
    })
    // return the first element of the sorted list (the oldest person)
    console.table(olds);
    return olds[0];
};

// Do not edit below this line
module.exports = findTheOldest;
