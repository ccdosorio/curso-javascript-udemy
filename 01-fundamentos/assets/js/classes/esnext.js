class Rectangulo {

    #area = 0; // se declara como private con #
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    calculateArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.area = 100; || Es no deberia poder hacerlo
// rectangulo.#area = 100; || Dara error porque es una propiedad privada
console.log(rectangulo);
rectangulo.calculateArea();