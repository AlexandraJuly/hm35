class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
    console.log (`Name: ${this.name}, Age: ${this.age}`)
}
};

class Car {
    constructor (brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner instanceof Person && owner.age > 18) {
            this.owner = owner;
        } else {
            console.log("The owner must be over 18 years old.");
        }
    }

    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.displayInfo();
            }  else {
                console.log("This car does not yet have an owner.");
        };
    };
};

const person1 = new Person("Anna", 43);
const person2 = new Person("Vlad", 30);
const person3 = new Person("isa", 50);

const car1 = new Car('Lanos', 'Daewoo', 2007, 'BC8553CI');
const car2 = new Car('Mazda', 'CX-5', 2023, 'KA3078KO');
const car3 = new Car('Volvo', '30', 2012, 'BK4902HX');

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();