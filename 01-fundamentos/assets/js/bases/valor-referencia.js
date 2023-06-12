// Enviando por valor, cuando se trabaja con primitivos en JS
// En JS todo es un objeto, exceptuando los primitivos

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Por referencia: en JS todos los objetos se pasan por Referencia

let david = { nombre: 'David' };
// let ana = david; Es mejor hacelor con el operador spread
let ana = { ...david }; // Rompe la referencia
ana.nombre = 'Ana';

console.log({ david, ana });

const cambiarNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

// Arreglos: aqui ambos arreglos tendrian los mismo
const frutas = ['Manzana', 'Pera', 'Pina'];
// const otrasFrutas = frutas;
// const otrasFrutas = [...frutas]; // Copiar el arreglo MEJOR


// El Spread lo hace mas rapido que el slice

console.time('slice');
const otrasFrutas = frutas.slice(); // Otra forma
console.timeEnd('slice');

otrasFrutas.push('Mango'); // Aqui se agregaria mango a ambos

console.table({ frutas, otrasFrutas });