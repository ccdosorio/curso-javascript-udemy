const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true); // true
console.log(!true); // false
console.log(!regresaFalse()); // true

console.warn('And');
console.log(true && true); //true
console.log(true && false); // false
console.log(true && !false); // true

console.log('===========');
console.log(regresaFalse() && regresaTrue()); // false: Regresa falso. Como es falso, ignora el resto
console.log(regresaTrue() && regresaFalse()); // false: Ejecuta ambas instrucciones

console.log('==== && ====');
regresaFalse() && regresaTrue();

console.log('4 condiciones: ', true && true && true && false); // false

console.warn('OR');
console.log(true || false); // true: evalua y si alguien lo cumple, retorna true
console.log(regresaTrue() || regresaFalse()); // true: Regresa true

console.log('4 condiciones: ', true || true || true || false); // true

console.log('============  PRO TIP: Asignaciones ============');

const soyUndefined = undefined;
const soyNull = null;
const soyFlase = false;

const a1 = true && 'Hola Mundo'; // Hola Mundo
const a2 = 'Hola' && 'Mundo'; // Mundo
const a3 = 'Hola' && 'Mundo' && soyFlase && true; // false

const a4 = soyFlase || 'Ya no soy falso';
const a5 = soyFlase || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Ya no soy falso de nuevo: No llega al TRUE
const a6 = soyFlase || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // true

console.log({ a1, a2, a3, a4, a5, a6 });