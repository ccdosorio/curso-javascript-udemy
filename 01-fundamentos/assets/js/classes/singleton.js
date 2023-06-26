/**
 * Singleton: es una instancia unica de mi clase. Solo necesito una instancia global en toda mi APP
 * no importa si hago new muchas veces, siempre me regresa la misma instancia
 */

/**
 * const a = undefined;
 * console.log(a); // undefined 
 * console.log(!a); // true
 * console.log(!!a); // false
 */

class Singleton {
    static instance; // Unica instancia, undefined

    constructor(name) {

        if (!!Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;

        this.name = name;
    }
}

const instance1 = new Singleton('Iroman');
const instance2 = new Singleton('Spiderman');
const instance3 = new Singleton('BackPanter');

console.log(`Nombre en la instancia1 es: ${instance1.name}`); // Iroman
console.log(`Nombre en la instancia2 es: ${instance2.name}`);// Iroman
console.log(`Nombre en la instance3 es: ${instance3.name}`);// Iroman