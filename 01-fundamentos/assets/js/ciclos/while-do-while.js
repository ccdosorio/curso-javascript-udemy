const carros = ['Toyota', 'Mazda', 'Ford', 'Honda'];

let i = 0;

console.log(' ========= While ======');

// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

// Rompen el ciclo while
// undefined
// null
// false

while (carros[i]) {

    if (i === 1) {
        // break;
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

console.log(' ======= Do While ======');
// La diferencia es que se ejecuta por lo menos una vez
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);