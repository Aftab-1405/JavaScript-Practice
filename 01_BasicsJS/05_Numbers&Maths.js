let anyNumber = 129; // This is the one way where we can deffine a number.
console.log(anyNumber);

let newNum = new Number(527);
console.log(newNum);

console.log("+++++++++++++ Exploring built in functions for numbers ++++++++++++++");
// ++++++++++++++++++++++ Built In Methods for Numbers +++++++++++++++++++
console.log(newNum.toLocaleString('en-IN')); // Present the large numbers in indian standards.
console.log(newNum.toFixed(2)); // Here we are specifying the digits we want after decimal point.
console.log(typeof (newNum.toString())); // Convert number into string, once we do this we can use all the methods of string on this converted number as well.


// Math methods
console.log("+++++++++++++ Exploring Math Library ++++++++++++++");

// ++++++++++++++++++++++ Built In Methods of Math +++++++++++++++++++
console.log(`The max value is ${Math.max(1,2,3,4,5)}`);
console.log(`The min value is ${Math.min(1,2,3,4,5)}`);
console.log(Math.floor(12.56));
console.log(Math.ceil(12.56));
console.log(Math.floor((Math.random() * 10) + 1));
 






