class Persona {

    // Simulacion de sobrecarga de constructores
    static porObject({ name, surname, country }) {
        return new Persona(name, surname, country);
    }

    constructor(name, surname, country) {
        this.name = name;
        this.surname = surname;
        this.country = country;
    }

    // Esto daria un error, JS no lo soporta
    // constructor(obj) {

    // }

    getInfo() {
        console.log(`info: ${this.name}, ${this.surname}, ${this.country}`);
    }
}

const name1 = 'Christna',
    surname1 = 'Osorio',
    country1 = 'Guatemala';

const david = {
    name: 'David',
    surname: 'Osorio',
    country: 'Guate'
}

const persona1 = new Persona(name1, surname1, country1);
// const persona2 = new Persona(david.name, david.surname, david.country); // Para evitar esto
const persona2 = Persona.porObject(david);

persona1.getInfo();
persona2.getInfo();