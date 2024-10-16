// This is the way where we can create a singleton object using constructor.
let myObject = new Object();
myObject.id = "Aftab";
myObject.name = "Nadaf";

console.log(myObject);

let pincode = Symbol(); // Create a unique symbol for pincode

// This is the literal way to create an object in javascript.
let employeeDetails = {
    name: "Aftab Nadaf",
    companyName: "Quality Kiosk",
    contact: 7757875327,
    payPackage: 350000,
    [pincode]: 416418 // Use the symbol as a key
};

console.log(employeeDetails["name"]);     // Aftab Nadaf
console.log(employeeDetails["pincode"]);  // undefined (string key doesn't exist)
console.log(employeeDetails[pincode]);    // 416418 (access via symbol key)

// Freezing the object
Object.freeze(employeeDetails);

// Attempt to modify a property
employeeDetails.name = "John Doe"; // This will not change the value

// Attempt to add a new property
employeeDetails.pincode = 416418; // This will not add the property

// Attempt to delete a property
delete employeeDetails.contact; // This will not delete the property

console.log(employeeDetails);
// Output: { name: "Aftab Nadaf", companyName: "Quality Kiosk", contact: 7757875327, payPackage: 350000 }

// Merging two objects using the spread operator
let object1 = {
    id: "Aftab",
    role: "Software Engineer"
};

let object2 = {
    companyName: "Quality Kiosk",
    contact: 7757875327
};

// Merging object1 and object2 using spread operator
let mergedObject = {
    ...object1,
    ...object2
};

console.log(mergedObject);
// Output: { id: "Aftab", role: "Software Engineer", companyName: "Quality Kiosk", contact: 7757875327 }

const {companyName: company} = mergedObject;
console.log("This is the result of object de-structuring: " + company); // Outputs the value of "companyName" from mergedObject