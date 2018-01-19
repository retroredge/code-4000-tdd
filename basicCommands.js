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

// Arrays and the map function
const animals = ['Dog', 'Cat', 'Mouse'];
console.log(animals);

animals.map(function (animal) {
  console.log(animal);
});

// Or using ES6 'arrow functions'
animals.map((animal) => {
  console.log(animal);
});

// Conditions
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

// Objects
const person = {
  firstName: 'John',
  lastName: 'Smith'
};
console.log('First name is ' + person.firstName);
console.log('Last name is ' + person.lastName);
