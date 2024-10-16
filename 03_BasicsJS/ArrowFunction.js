// Method 01 : Normal way to create an Arrow function using explicit return statement.

const add = (a, b)=> {
    return a + b;
}

console.log(add(12, 10));

// Method 02 : Another way to create an Arrow function using implicit return statement.

const multiply = (a, b) => (a * b); // This statement will implicitly return the result, we don't need to have scope in this case.

console.log(multiply(12, 4));
