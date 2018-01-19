// This second version of the solution has 'factored out' the common modulo maths
// logic into functions that have descriptive names.

// This is a function that is 'private' to this module. It is not available for other files to include and use
// because it is not 'exported' by the statement at the bottom of this file.
const isDivisibleByThree = (number) => {
  return number % 3 === 0;
}

const isDivisibleByFive = (number) => {
  return number % 5 === 0;
}

// This is the top level function in this module. Because we 'factored out' the modulo maths parts
// into separate functions (see above) and gave the extracted functions readable, meaningful names,
// this function now reads like the game rules
const say = (number) => {

  if (isDivisibleByThree(number) && isDivisibleByFive(number)) {
    return 'Fizz Buzz';
  } else if (isDivisibleByThree(number))  {
    return 'Fizz';
  } else if (isDivisibleByFive(number))  {
    return 'Buzz';
  }

  // This statement returns the String representation of the number that was passed into the function
  return String(number);
}

// This is a NodeJS statement that makes the 'say' functional available to other
// modules within our application. Our test code can use the say function by including
// it via the 'require' function
module.exports.say = say;
