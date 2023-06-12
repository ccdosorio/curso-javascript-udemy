const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: true,
    edad: 40,
    coords: {
        lat: 44.034,
        lng: -1128.2
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '24324 04305',
        ubicacion: 'California'
    },
    'ultima-pelicula': 'Iroman'
};

console.log(personaje);

console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Cors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);
console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Ultima pelicula:', personaje['ultima-pelicula']);

// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje); // Convertir las propiedades a un array de llave valor

console.log(entriesPares);

Object.freeze(personaje); // Congela el objeto y bloquea la creacion de nuevas propiedades y cambiarlas. PERO NO a los objetos que estan dentro

personaje.dinero = 10000000;

console.log(personaje);

personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); // Arreglo de las propiedades del Objeto
const valores = Object.values(personaje); // Arreglo de los valores del Objeto

console.log(propiedades);
console.log(valores);

console.log(Object.hasOwnProperty('name'));