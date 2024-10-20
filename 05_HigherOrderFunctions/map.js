// The map() method is a higher-order function that creates a new array with the results
// of calling a provided function on every element in the calling array.
// Key characteristics:
// 1. It transforms each element in the original array.
// 2. It returns a new array of the same length as the original.
// 3. It does not modify the original array.
// Parameters:
// 1. Callback function: Called for each element in the array. It takes three arguments:
//    - currentValue: The current element being processed in the array.
//    - index (optional): The index of the current element being processed.
//    - array (optional): The array map() was called upon.
// 2. thisArg (optional): Value to use as 'this' when executing the callback.
// The callback function should return the new value for the current element.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num, index, array) => {
    console.log(`Processing element ${num} at index ${index}`);
    console.log(`Original array: [${array}]`);
    return num * num;
});

console.log("Original array:", numbers);
console.log("New array with squared numbers:", squaredNumbers);