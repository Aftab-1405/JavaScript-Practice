// In javascript there are two types of scope exist.
// 1. Block scope
// 2. Global scope

if(true){
    let a = 10;  // Here 'a' is belongs to only this block of scope, outside of it can't be accessible.
    const b = 20;  // Here 'b' is belongs to only this block of scope, outside of it can't be accessible.
    var c = 30; // The main problem we are having with this 'c' variable initilized with 'var', which doesn't have any specific scope.
}

console.table(a, b, c); 