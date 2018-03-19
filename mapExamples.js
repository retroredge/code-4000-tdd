const database = require('./data').database;

// People older than 19
console.log(
    database.filter(person => person.age >= 20)
);

// Peoples names
console.log(
    database.map(person => person.name)
);

// Names of all females from Leeds
console.log(
    database
        .filter(person => person.gender === 'female')
        .filter(person => person.homeTown === 'Leeds')
        .map(person => person.name)
);

// Calculate the total number of years in education
console.log(
    database
        .map(person => {
            return {
                name: person.name,
                totalYearsInEduction: person.yearsInSecondaryEducation +
                person.yearsInHigherEducation
            }})
        .sort((person1, person2) => {
            return person1.totalYearsInEduction - person2.totalYearsInEduction;
        })
);



