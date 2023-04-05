let hour = 0;
while (hour < 24) {
    let minutes = 0;
    while (minutes < 60) {
        console.log(`${hour}:${minutes.toString().padStart(2, '0')}`);
        minutes++;
    }
    hour++;
}


const roll = () => {
    return Math.ceil(Math.random() * 6);
}

let counter = 1;
let rollNumber = roll();
while (rollNumber !== 6) {
	console.log(`Hodilo se cislo ${rollNumber}`);
	rollNumber = roll();
	counter++;
}

console.log(`Šestka se hodila na ${counter}. pokus`);


const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]


console.log('Všechna čísla');
numbers.forEach((n) => {
    console.log(n);
})


console.log('Druhá odmocnina všech čísel');
numbers.forEach((n) => {
    console.log(n * n);
})


console.log('Záporná čísla');
numbers.forEach((n) => {
    if (n < 0) {
        console.log(n);
    }
})


console.log('Absolutní hodnota všech čísel');
numbers.forEach((n) => {
    console.log(abs(n));
})


console.log('Sudá čísla');
numbers.forEach((n) => {
    if (n % 2 === 0) {
        console.log(n);
    }
})


console.log('Čísla, jejíchž absolutní hodnota je dělitená třemi');
numbers.forEach((n) => {
	if (Math.abs(n) % 3 === 0) {
		console.log(n);
	}
})

/*jak daleko je každé číslo v seznamu od čísla 5.*/
console.log('Jak daleko je každé číslo od čísla 5');

numbers.forEach((n) => {
	console.log('Číslo ' + numbers.indexOf(n) + ' je vzdáleno od čísla ' + numbers.indexOf(5) + ' : ' + (numbers.indexOf(5) - numbers.indexOf(n)) + ' pozice');
})

/*druhé mocniny vzdáleností všech čísel od čísla 5*/
console.log('Druhé mocniny vzdáleností všech čísel od čísla 5');

let index = 0;
numbers.forEach((n) => {
    if (n < 0) {
        index++;
    }
})
console.log('Počet záporných čísel: ' + index);

let soucet = 0;
numbers.forEach((n) => {
    soucet += n;
})
console.log('Součet čísel: ' + soucet);


let soucet = 0;
numbers.forEach((n) => {
    soucet += n;
})
console.log('Průměr čísel: ' + soucet / numbers.length);


let soucet = 0;
numbers.forEach((n) => {
    if (n % 2 === 0 & n > 0) {
        soucet += n;
    }
})
console.log('Součet kladných čísel: ' + soucet);