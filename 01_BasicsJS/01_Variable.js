const accountID = 100; // This sysntax is preferable to declare and initialize constants in javascript.
let userName = "Aftab1405"; // This is used to declare and initialize varibales who can change their valued during the execution of program.
var passowrdUser = "Abn@1405"; // This is the older way of defining variable in js, but not recommended becuase it has scope problem in code.
cityOfLiving = "Hyderabad"; // This is another way, same like we do in python but not recommended.
let currentAddress; // If any variable is not initialized in js then its default value is "undefined".

/*
    Note : Now-a-days only two way of variable creation is recommended in js - let and const.
*/

console.log(accountID); // Used to print single value.
console.table([
  accountID,
  userName,
  passowrdUser,
  cityOfLiving,
  currentAddress,
]);
