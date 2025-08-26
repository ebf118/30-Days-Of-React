let dog = {
    name: 'Bulgogi',
    legs: 4,
    color: 'brown',
    age: 4,
    bark: function() {
        return 'Woof Woof';
    }
};

console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
dog.breed = 'Shih Tzu';
dog.getDogInfo = function() {
    let info = `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
    return info;
};
console.log(dog.breed);
console.log(dog.getDogInfo());
