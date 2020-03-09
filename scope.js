var jackieChan = 100;

function myFunc() {
    var myName = "Faisal";

    // ? jackieChan is a global varialbe. So it can be called from anywhere.
    console.log(jackieChan);
    console.log(myName);
}
myFunc();

// ! myName variable is inside of a blcok scope hence called a local variable. So it can not be called outside of the block scope.
// console.log(myName);

