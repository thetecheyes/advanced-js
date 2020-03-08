// ! Way 1: No value is assigned.

let num;
console.log(num);

// ! Way 2: Not using return keyword.

function addNum(a, b) {
    console.log(a + b);
}
const result = addNum(5, 3);
console.log(result);

// ! Way 3: One of any paramenter's value is not passed to a function.

function addNum(a, b) {
    console.log(a, b);
}
const result = addNum(5);
console.log(result);

// ! Way 4: Trying to access a property from an object which is not defined.

const student = {
    name: "Faisal",
    age: 27,
    country: "BD"
}
console.log(student.phone);

// ! Way 5: Set an "Undefined" value.

let fun = undefined;
console.log(fun);

// ! Way 6: Array value not found.

let ages = [1, 3, 3, 4];
console.log(ages[6]);


// ? NULL

// ? null is set by the developer. If there is neeed where, there is no value or nothing to get. 