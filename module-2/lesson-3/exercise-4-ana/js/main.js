const yearDog = 5;

let yearHuman = 0;

if (yearDog > 0) {
    yearHuman = yearHuman + 15;
    if (yearDog > 1) {
        yearHuman = yearHuman + 9;
        if (yearDog > 2) {
            yearHuman = yearHuman + (yearDog - 2) * 5;
        }
    }
}





console.log(`Años de perro: ${yearDog}`)
console.log(`Años de humano: ${yearHuman}`);