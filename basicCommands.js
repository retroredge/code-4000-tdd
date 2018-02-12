// Some basic commands to help newbies get going
// Execute this script with `node basicCommands.js`

console.log('Hello World');

// Variables and types
let x = 2;
x = x * 2;
console.log('The value of x is: ' + x);
console.log(`The value of x add 2 is: ${x + 2}`);

const name = 'Molly';
console.log('Hello ' + name);

const isItDaytime = true;
console.log('Is it daytime? ' + isItDaytime);

// Loops
let text = '';
for (let i = 0; i < 5; i++) {
    text += `Number: ${i}\n`;
}
console.log(text);

// Functions
function doubleIt(x) {
    return x * 2;
}

console.log('Five times two is: ' + doubleIt(5));

// =======
// Arrays
// =======
const animals = ['Dog', 'Cat', 'Mouse'];
console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals.length);

// Iterate over an array
animals.forEach(function (animal) {
    console.log(animal);
});

// Or using ES6 'arrow functions'
animals.forEach(animal => {
    console.log(animal);
});

// Append to the end of the array
animals.push('Horse');
console.log(animals);

// Remove last element from the array
const removedAnimal = animals.pop();
console.log(animals);
console.log('We removed a ' + removedAnimal);

// Modify an element of the array
animals[0] = 'Wolf';
console.log(animals);

// ===========
// Conditions
// ===========
const man = 'John';
if (man === 'John') {
    console.log('The name was John');
} else {
    console.log('We won`t see this in the log');
}

if (man === 'Jim') {
    console.log('We won`t see this in the log');
} else {
    console.log('The name was NOT Jim');
}

// ========
// Objects
// ========
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 42,
    address: {
        street: 'High st',
        town: 'Sheffield'
    }

};
console.log(person);
console.log('First name is ' + person.firstName);
console.log('Last name is ' + person.lastName);
console.log('Age is ' + person.age);
console.log('Town is ' + person.address.town);

// Modify a property
person.age = 29;
console.log('Age is ' + person.age);

// Adding properties
person.mobileNumber = '01234 56789';
console.log('Mobile number is ' + person.mobileNumber);

person.oldMobileNumber = ['01234 888777', '0987 654321'];
console.log('Mobile numbers are ' + person.mobileNumber);

// Get the keys
console.log("Keys: " + Object.keys(person));

// Arrays of objects
const people = [
    {
        firstName: 'John',
        lastName: 'Smith',
        age: 42
    },
    {
        firstName: 'Joe',
        lastName: 'Bloggs',
        age: 29
    }
];

people.forEach((person) => {
    console.log("Person " + JSON.stringify(person))
});

// Classes
class Foo {
    double(x) {
        return 2 * x;
    }
}

const aFoo = new Foo();
console.log(aFoo.double(5));