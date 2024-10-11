// Method 01 to create an Array in JS:
let myFriends = ["Aftab", "Iklas", "Manisha"];
console.log(myFriends); // Output: ["Aftab", "Iklas", "Manisha"]
console.log(`Type of myFriends is: ${typeof myFriends}`); 
// Output: Type of myFriends is: object

// Method 02 to create an Array in JS:
let newArray = new Array(1, 2, 4, 5);
console.log(newArray); // Output: [1, 2, 4, 5]

// Built-in methods of Array

// 01. push() => Adds one or more elements to the end of an array
newArray.push(6);
console.log("Array after push operation: " + newArray); 
// Output: Array after push operation: 1,2,4,5,6

// 02. pop() => Removes the last element from an array and returns it
newArray.pop(); 
console.log("Array after pop operation: " + newArray); 
// Output: Array after pop operation: 1,2,4,5

// 03. unshift() => Adds one or more elements to the beginning of an array
newArray.unshift(100);
console.log("Array after unshift operation: " + newArray); 
// Output: Array after unshift operation: 100,1,2,4,5

// 04. shift() => Removes the first element from an array and returns it
newArray.shift();
console.log("Array after shift operation: " + newArray); 
// Output: Array after shift operation: 1,2,4,5

// 05. slice() => Returns a shallow copy of a portion of an array
// Note: It does NOT modify the original array
console.log("Performing slice operation on newArray: " + newArray.slice(1, 3)); 
// Output: Performing slice operation on newArray: 2,4

// 06. splice() => Changes the array by removing/replacing elements and returns the removed elements
console.log("Performing splice operation on newArray: " + newArray.splice(1, 3)); 
// Output: Performing splice operation on newArray: 2,4,5

console.log("After performing splice operation, the changes happen to newArray(original): " + newArray); 
// Output: After performing splice operation, the changes happen to newArray(original): 1
