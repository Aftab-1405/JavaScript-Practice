// The forEach() method is a higher-order function that executes a provided function 
// once for each array element.
// Key characteristics:
// 1. It iterates over all elements in an array.
// 2. It doesn't create a new array or return any value (always returns undefined).
// 3. It's used primarily for its side effects (like logging, modifying external variables).
// Parameters:
// 1. Callback function: Called for each element in the array. It takes three arguments:
//    - element: The current element being processed in the array.
//    - index (optional): The index of the current element being processed.
//    - array (optional): The array forEach() was called upon.
// 2. thisArg (optional): Value to use as 'this' when executing the callback.
// Note: forEach() is not chainable and cannot be stopped or broken out of.

const fruits = ['apple', 'banana', 'cherry'];

console.log("Iterating over fruits:");
fruits.forEach((fruit, index, array) => {
    console.log(`${index}: ${fruit}`);
    console.log(`Array being processed: [${array}]`);
});

console.log("\nDemonstrating that forEach returns undefined:");
const result = fruits.forEach(fruit => console.log(fruit));
console.log("Result of forEach:", result);