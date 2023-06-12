// Son un objeto parecido a una lista de informacion, que contien un grupo de elementos

// const arr = new Array(10);
// const arr = [];

let videoJuegos = ['Mario 3', 'Megaman', 'Zelda'];

console.log({ videoJuegos });

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Christian',
    1 + 2,
    function () { },
    () => { },
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Woodman',
        'Willy'
    ]]
];

console.log({ arregloCosas });
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);

const a = 967;
const b = 265;

console.log(a - b);
console.log(a.localCompare(b));