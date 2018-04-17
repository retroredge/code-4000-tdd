// Iterative
const factorialV1  = function (x) {
    let total = x;
    while(x > 1) {
        total = total * (x - 1);
        x--;
    }
    return total;
};

// Recursive
const factorialV2 = function (x) {
    if (x === 1) {
        return 1
    }

    return x * factorialV2(x - 1);
};

console.log(factorialV1(1));
console.log(factorialV1(2));
console.log(factorialV1(3));
console.log(factorialV1(4));
console.log(factorialV1(5));


console.log(factorialV2(1));
console.log(factorialV2(2));
console.log(factorialV2(3));
console.log(factorialV2(4));
console.log(factorialV2(5));


const numbers = [1, 2, 3, 4, 5];

const doubleValues = function(aList, doubles) {
    if (aList.length === 0) {
        return doubles;
    }

    doubles.push(aList.pop() * 2);
    return doubleValues(aList, doubles)
};
console.log('doubleValues: ' + doubleValues(numbers, []));


const sumOfNumbersUpTo = (x) => {
    if (x === 0) {
        return 0;
    }

    return x + sumOfNumbersUpTo(x - 1);
};
console.log('sumOfNumbersUpTo 5: ' + sumOfNumbersUpTo(5));


const concatLetters = (aList) => {
    if (aList.length === 0) {
        return '';
    }

    return aList.shift() + concatLetters(aList);
};
console.log('concatLetters: ' + concatLetters(['d', 'o', 'g']));