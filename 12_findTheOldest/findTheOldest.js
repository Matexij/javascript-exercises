const findTheOldest = function(people) {
    const now = (new Date).getFullYear()
    people.sort((a,b) => ((b.yearOfDeath === undefined ? now : b.yearOfDeath)-b.yearOfBirth) - ((a.yearOfDeath === undefined ? now : a.yearOfDeath)-a.yearOfBirth))
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
