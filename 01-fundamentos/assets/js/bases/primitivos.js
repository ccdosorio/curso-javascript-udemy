// En javascript todo es un Objecto, exceptuando los primitivos

let nombre = 'Christian Osorio';
console.log(nombre);

nombre = 'David';

console.log(nombre);

console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

let isMarvel = true;
console.log(isMarvel);
console.log(typeof isMarvel);

let edad = 23;
console.log(edad);
edad = 20.0;

let superPoder;

console.log(superPoder); // udefined, no se ha inicializado

let soyNull = null;
console.log(soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);

console.log(symbol1 === symbol2); // false