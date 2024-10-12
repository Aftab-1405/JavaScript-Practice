let pincode = Symbol(); // Create a unique symbol for pincode

let employeeDetails = {
    name: "Aftab Nadaf",
    companyName: "Quality Kiosk",
    contact: 7757875327,
    payPackage: 350000,
    [pincode]: 416418 // Use the symbol as a key
}

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