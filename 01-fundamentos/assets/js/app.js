// alert('Hola desde app.js');

// console.log(miNuevoNombre);
// console.log(miNuevoNombre + ' David');

// console.log( console.log('Hola Mundo') );

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

const saludo =  c + d;

// console.log('%c Mis variables', 'color:blue; font-weight: bold');
// console.log({ a });
// console.log({ b });
// console.log({ c });

c = 'Hola de nuevo';

// console.table({a, b, c, d, x });

let miNuevoNombre = 'Christian Osorio';

/**
 * Problemas con var
 * 1. Me permite reemplazar propiedades y objetos prpios del objeto global window
 * Ej: window.outerHeight, var outerHeight = 1000 Estoy sobreescribiendo una propiedad global
 * 2. En js cualquier variable no definidad es undefined, puedo declarar arriba del archivo miNuevoNombre
 *      y la declaro hasta abajo con var, entonces javascript la va a encontrar
 */
