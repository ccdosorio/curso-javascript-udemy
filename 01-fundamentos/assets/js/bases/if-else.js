// Estructuras de control: nos permiten alteran como se ejecutara el codigo y nos permite tomar decisiones

let a = 10;

if (a >= 10) { // undefined, null, una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}


console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); // 0 domingo, 1 lunes, 2 martes

console.log({ dia });


// == doble igual: validar solo el valor
// === triple igual: validar valor y tipo
if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es nada');
}


// Si usar if else o switch, unicamente objetos

dia = 3;

const diasLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const diasLetrasObj = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};

// dia de la semana
console.log(diasLetras[dia]);
console.log(diasLetrasObj[dia] || 'Dia no valido');