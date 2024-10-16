// ** What is hoisting? Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations. The behavior of hoisting varies depending on how variables and functions are declared. Note : Only the declarations are hoisted, not the initializations.

console.log(age);

var age = 10;

console.log(name());

function name(){
    return "Aftab is here.";
}

// +++++++++++++++++++++++++++ EDGE CASE OF HOISTING +++++++++++++++++++++++++

// In case of arrow functions hoisting doesn't work in the same way it works for normal function becuase JS will treats them as variables not functions.

console.log(add(12, 10));
var add = (a, b)=> {
    return a + b;
}

console.log(multiply(12, 4));

var multiply = (a, b) => (a * b);
