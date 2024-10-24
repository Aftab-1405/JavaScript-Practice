// Closures occur when a function (in this case, innerFunc) retains access to variables from its outer scope (in this case, i in outerFunc), even after the outer function (outerFunc) has finished executing. A closure is created when an inner function is returned and executed outside its parent function, keeping the variables from the outer function "alive." 

// outerFunc() defines a variable i with an initial value of 0 and contains the function innerFunc(). innerFunc() contains a while loop that is supposed to run while i < 0. outerFunc() returns innerFunc, creating a closure because innerFunc can access the variable i even after outerFunc() has finished executing.

// In this case, the variable i is part of the lexical environment of innerFunc, and that function retains access to it when returned from outerFunc. This means we do have a closure.

function outerFunc(){
    let i = 0;

    function innerFunc() {
        while(i < 10){
            console.log(`Value is ${i}.`);
            i++;
        }
    }

    return innerFunc;
}

const call = outerFunc();

call();