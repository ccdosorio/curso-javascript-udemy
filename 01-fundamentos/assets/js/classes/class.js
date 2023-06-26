class Person {
    // 'use strict' viene implementado por defecto

    // En JS no es necesario
    // name;
    // code;
    // phrase;
    // food;

    // Los metodos static se acostumbran a declararse hasta arriba
    static _count = 0;

    static get count() {
        return Person._count + ' instancias';
    }

    static message() {
        console.log(this.name); // undefined
        console.log('Hola a todos soy un metodo estatico.');
    }

    // El constructor es el unico metodo que retorna una instancia de un objeto, no udefined
    constructor(name, code, phrase) {
        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person._count++;
        // return undefined;
    }

    // Setters and Getters

    set setFavoriteFood(food) {
        this.food = food.toUpperCase();
    }

    get getFavoriteFood() {
        return `La comida favorita de ${this.name} es: ${this.food}`;
    }

    whoIam() {
        console.log(`Soy ${this.name} y mi identidad es ${this.code}`);
    }

    myPhrase() {
        this.whoIam();
        console.log(`${this.code} dice: ${this.phrase}`);
    }
}

const spiderman = new Person('Spiderman', 'Spiderman', 'Un gran poder convella una gran responsabilidad.');
const iroman = new Person('Iroman', 'Tony Stark', 'Yo soy Iroman.');

// console.log(iroman);

spiderman.whoIam();
// iroman.myPhrase();

spiderman.setFavoriteFood = 'El pie de manzana de la tia May'; // Set
// console.log(spiderman);
// console.log(spiderman.getFavoriteFood); // Get
// Person._count = 2;
console.log('Conteno static:', Person.count);

Person.message();

// Se podria crear una propiedad fuera de la clase: NO recomendado
Person.propiedadExterna = 'Hola mundo';
console.log(Person.propiedadExterna);
console.log(Person);