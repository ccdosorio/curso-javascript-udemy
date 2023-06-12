// Funcion vs metodo: Un metodo es una funcion que se encuentra dentro de un objeto

function saludar(name) {
    console.log(arguments);
    console.log('Hola Mundo: ' + name);

    return 1;

    // Esto nunca se ejecutara
    console.log('Soy un codigo que esta despues del return');
}

// Funcion anonima: Lambda Function
const saludar2 = (nombre) => {
    console.log('HOLA!: ' + nombre);
}


// const retornoDeSaludar = saludar('David', 40, true, 'Costa Rica'); // 1
// console.log(retornoDeSaludar);
// saludar2('Christian');

// const sumar = (a, b) => {
//     return a + b;
// }

const sumar = (a, b) => a + b;

const getAleatorio = () => Math.random();

console.log(sumar(1, 2));

console.log(getAleatorio());