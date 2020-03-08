// Truthy vs Falsy

// ! Falsy
// 0
// ""
// undefined
// null
// NaN

// ? Truthy
// +-n where n != 0;
// " "
// []


// const num = 0;
let num = null;
console.log(num);
if (num) {
    console.log("true");
} else {
    console.log("false");
}