// Examples of classes in Javascript

// Declare a class representing a rectangle
class Rectangle {
    // There can only be one special method with the name "constructor" in a class
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.height * this.width;
    }

    // Method
    shapeName() {
        return 'This is a Square'
    }
}

// Construct a new rectangle object
const rect = new Rectangle(3, 2);

console.log(rect);
// >>> Rectangle { height: 3, width: 2 }

console.log(rect.height);
// >>> 3

console.log(rect.area);
// >>> 6

console.log(rect.shapeName());
// >>> This is a Square

// Base class
class Animal {
    constructor(noise) {
        this.noise = noise;
    }

    speak() {
        return this.noise;
    }

    numberOfLegs() {
        return 4;
    }
}

class Dog extends Animal {
    constructor() {
        super('Woof');
    }

}

class Cat extends Animal {
    constructor() {
        super('Meow');
    }
}

const dog = new Dog();
const cat = new Cat();

console.log('Dog: ' + dog.speak());
// Dog: Woof

console.log('Cat: ' + cat.speak());
// Cat: Meow

console.log('Dog: ' + dog.numberOfLegs());
// Dog: 4

console.log('Cat: ' + cat.numberOfLegs());
// Cat: 4