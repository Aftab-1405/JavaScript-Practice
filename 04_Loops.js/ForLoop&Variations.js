for (let index = 0; index < 10; index++) {
  console.log(index); 
}

let actress = new Array("disha", "rashmika", "shriya", "kriti", "mahira", "sonam", "aishwarya", "tamanna");

// 01 : Traditional for loop syntax
console.log("Printing with normal for loop.");
for (let index = 0; index < actress.length; index++) {
    console.log(actress[index]);
}

// 02 : For-Of loop used to iterate over the arrays in js.
console.log("Printing with for-of loop");
for (const element of actress) {
    console.log(element);
}

let bolyActress = {
    1 : "disha",
    2 : "shriya",
    3 : "kriti",
    4 : "rashmika"
}

// 03 : For-In loop used to iterate over the objects in js.
for (const key in bolyActress) {
    console.log(bolyActress[key]);
}