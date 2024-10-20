// The reduce() method is a higher-order function that executes a reducer function
// on each element of the array, resulting in a single output value.
// Parameters:
// 1. Callback function (reducer): Takes two main arguments:
//    - Accumulator (acc): Accumulates the callback's return values.
//    - Current value (item): The current element being processed in the array.
// 2. Initial value (optional): If provided, it's used as the initial accumulator value
//    in the first call to the callback function. If omitted, the first element
//    of the array is used as the initial accumulator value.
// The reducer function's return value is assigned to the accumulator, whose value
// is remembered across each iteration and ultimately becomes the final, single result.

const testReduce = [1, 2, 3, 4, 5];

const newTestResult = testReduce.reduce(
    (acc, item) => {
        console.log(`Value of acc is: ${acc} and item: ${item}`);
        return acc + item;
    },
    0  // Initial value
);

console.log(newTestResult);