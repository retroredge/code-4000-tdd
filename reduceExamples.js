const database = require('./data').database;

// Add up some numbers
const numbers = [1, 2, 3, 4, 5];
const adder = (total, number) => total = total + number;
console.log(
    numbers.reduce(adder, 0)
);

// Join a list of words
const words = ['The', 'quick', 'brown', 'fox'];
const wordAdder = (result, word) => result = result + ' ' + word;
console.log(
    words.reduce(wordAdder, '')
);

// Flatten an array of arrays
const arrays = [ ['Jack', 'Jill'], ['Vic', 'Bob'], ['Bob', 'Sue'] ];
const squasher = (result, name) => result.concat(name);
console.log(
    arrays.reduce(squasher, [])
);

// Flatten an array of objects
const objects = [ {x: 10, y: 5}, {x: 0, y: 16}, {x:2, y: 3} ];
const flattener = (result, coordinate) => result.concat(Object.values(coordinate));
console.log(
    objects.reduce(flattener, [])
);

// Find average age
const ages = [23, 42, 59, 18, 7];
const average = (total, age, index, array) => {
    total = total + age;
    if (index === array.length - 1) {
        return total / array.length
    } else {
        return total;
    }
};
console.log(
    ages.reduce(average, 0)
);

// Extract a unique list of colours from nested data
const animals = [
    {animal: 'bird', colour: ['blue','green']},
    {animal: 'fish', colour: ['green','black','orange','blue']},
    {animal: 'mammal', colour: ['green','red']}
];
const uniqueColours = (result, animal) => {
    animal.colour.forEach( colour => {
        if (result.indexOf(colour) === -1) {
            result.push(colour);
        }
    });
    return result;
};
console.log(
    animals.reduce(uniqueColours, [])
);

