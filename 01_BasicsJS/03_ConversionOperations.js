// 01. Number to string => Have to use specific classes in which we have to convert a given value, It is same like wrapper classes in Java but here it used differently.

let age = 30;
console.log("The type is: " + typeof(age));

let convertedAge = String(age);
console.log("Now the type of age is: " + typeof(convertedAge));

// 02. String to number => In js we can convert the string value to a number if it is able to convert in number otherwise in this kind of string "164abc" it will show "NaN" as a result which stands for "Not a Number".

let myHeight = "164abc";
console.log("Type of myHeight is : " + typeof(myHeight))

let convertedHeight = Number(myHeight);
console.log("Now the type of converted myHeight is: " + typeof convertedHeight)
console.log(convertedHeight);

// 03. Boolean to number => Yes in js we can convert boolean values in numbers, if value is true -> 1 and is value is false -> 0. The edge case here is that if we convert an empty string to boolean then it would be considered as *"false"* and if we convert a string into boolean then result would be *"true"*.

let isSignedIn = true;
console.log(isSignedIn);
let convertedSignedInValue = Number(isSignedIn);
console.log(convertedSignedInValue);
console.log("Now the type of convertedSignedInValue is: " + typeof(convertedSignedInValue))
