// Settaggio dei for da 1 a 100

for (let i = 0; i <= 100; i++) {

    //primo if che separa i numeri divisibili per 3 e anche divisibili per 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");

    //nummero divisbile solo per 3    
    } else if (i % 3 === 0) {
        console.log("fizz");

    //nummero divisbile solo per 5
    } else if (i % 5 === 0) {
        console.log("buzz");

    //tutti i numeri restanti
    } else {
        console.log(i);
    }
}