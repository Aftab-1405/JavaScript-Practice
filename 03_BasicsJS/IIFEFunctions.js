// IIFE => Immediately invoked function expression

// This is the syntax of creating IIFE in js. This is named IIFE.
( 
    function value(params) {
        console.log(`My name is ${params}`);
    } 
)("Disha"); // Here we are passing arguments in the same way we do in normal function call.

// Note: Whenever interviewer ask to write two consecutive IIFE functions then make sure to add ";" at the end of each IIFE function.

(
    (userName)=>{
        console.log(`Hey I am ${userName} full-stack developer.`); 
    }
)("Shriya") // Here we are passing arguments in the same way we do in normal function call.