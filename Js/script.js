

// Write a program that stamp all number from 1 to 100;
for ( let i =1; i<= 100; i++) {    
let num;

const squareContainer = document.getElementById("container");
let square = document.createElement('div');
square.classList.add("square");
squareContainer.append(square);



    // IF multiple of 3 and 5 stamp "FizzBuzz"
    if ( i%3 === 0 && i%5 === 0 ){
        num = "FizzBuzz";
        square.classList.add("fizzbuzz");
    }

    // Else multiple of 3 stamp "Fizz"
    else if ( i%3 === 0) {
        num = "Fizz";
        square.classList.add("fizz");
    }

    // Else multiple of 3 stamp "Buzz"
    else if( i%5 === 0) {
       num = "Buzz";
       square.classList.add("buzz");
    }
    else {
        num = i;
    }

    square.append(num);
    console.log(num);
}


