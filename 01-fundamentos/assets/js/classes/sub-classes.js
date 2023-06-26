class Person {
    static _count = 0;

    static get count() {
        return Person._count + ' instancias';
    }

    static message() {
        console.log('Hola a todos soy un metodo estatico.');
    }

    constructor(name, code, phrase) {
        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person._count++;
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

class Heroe extends Person {
    constructor(name, code, phrase) {
        super(name, code, phrase);
        this.clan = 'Avengers';
    }

    // Sobreescribiendo el metodo
    whoIam() {
        console.log(`Soy ${this.name}, ${this.clan}`);
        super.whoIam(); // Llamar al metodo de la clase padre si se necesita
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Un gran poder convella una gran responsabilidad.');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.whoIam();