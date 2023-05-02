
// scrivi un programma che stampi i numeri da 1 a 100;
for ( let i =1; i<= 100; i++) {
// con i multipli di 3 e 5 stampare "FizzBuzz"
    if ( i%3 === 0 && i%5 === 0 ){
        console.log("FizzBuzz");
    }
    // con i multipli di 3 stampare "Fizz"
    else if ( i%3 === 0) {
        console.log("Fizz");
    }
    // con i multipli di 5 stampare "Buzz"
    else if( i%5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i)
    }

}


