// The filter() method is a higher-order function that creates a new array with all elements
// that pass the test implemented by the provided callback function.
// Key characteristics:
// 1. It tests each element in the original array against a condition.
// 2. It returns a new array containing only the elements that satisfy the condition.
// 3. It does not modify the original array.
// Parameters:
// 1. Callback function: Called for each element in the array. It takes three arguments:
//    - element: The current element being processed in the array.
//    - index (optional): The index of the current element being processed.
//    - array (optional): The array filter() was called upon.
// 2. thisArg (optional): Value to use as 'this' when executing the callback.
// The callback function should return true to keep the element, or false otherwise.

const testArray = [1, 2, 3, 4, 5];

const filteredResult = testArray.filter((value, index, array) => {
    console.log(`Testing element ${value} at index ${index}`);
    return value > 2;
});

console.log("Original array:", testArray);
console.log("Filtered array (values greater than 2):", filteredResult);