const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.log(' ======= For ======');
for (let i = 0; i < heroes.length; i++) {

    console.log(heroes[i]);
}

console.log(' ======= For i ======');

for (const i in heroes) {
    console.log(heroes[i]);
}

console.log(' ======= For of ======');

for (const heroe of heroes) {
    console.log(heroe);
}