// This first version of the solution leaves the raw calculations in the top level
// function. One problem with this is that it causes the modulo logic to be repeated.
//
// The other problem is that this top level function should show the person reading the code
// what the game logic is without complicating it with the detail of the modulo operations


// This is the top level and only function in this module
const say = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz Buzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  }

  // This statement returns the String representation of the number that was passed into the function
  return String(number);
}

// This is a NodeJS statement that makes the 'say' functional available to other
// modules within our application. Our test code can use the say function by including
// it via the 'require' function
module.exports.say = say;
