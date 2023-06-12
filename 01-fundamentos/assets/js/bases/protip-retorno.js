const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Christian', 'Osorio');
// console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

const imrprimeArgumentos2 = (edad, ...args) => { // Despues del parametro ...args, no puede venir nada mas
    // console.log(arguments); // Error
    // console.log({ edad, args });

    return args;
}

// imprimeArgumentos(10, 'Hola', true, 'Christian');
const [casado, vivo, nombre, saludo] = imrprimeArgumentos2(10, 'Hola', true, 'Christian', 'Hola');
// console.log({ casado, vivo, nombre, saludo });

// const { apellido } = crearPersona('Christian', ' Osorio');
const { apellido: nuevoApellido } = crearPersona('Christian', ' Osorio');
// console.log(nuevoApellido);

// Desestructuracion de argumentos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: true,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedades = (personaje) => {
//     console.log('Nomhre: ', personaje.nombre);
//     console.log('codeName: ', personaje.codeName);
//     console.log('Vivo: ', personaje.vivo);
//     console.log('Edad: ', personaje.edad);
//     console.log('Trajes: ', personaje.trajes);
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);
