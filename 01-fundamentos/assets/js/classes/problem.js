const david = {
    name: 'David',
    age: 23,
    print() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    }
};

const christian = {
    name: 'Christian',
    age: 15,
    print() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    }
};

const hilary = {
    name: 'Hilaryy',
    age: 35,
    print() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    }
};

// david.print();
// christian.print();
// hilary.print();

// Se asemeja a una clase
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.print = function () {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`);
    }
}

const maria = new Person('Maria', 17);
const juan = new Person('Juan', 45);
// console.log(maria);
maria.print();
juan.print();