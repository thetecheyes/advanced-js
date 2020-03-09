// ? map - Way 1:
const number = [8, 9, 4, 6, 7, 5];

const output = number.map(function (x) {
    return x * x;
})

console.log(output);

// ? map - Way 2: using arrrow function

const result = number.map(x => x * x);
console.log(result);


// ? filter

const number = [8, 9, 6, 8, 7, 5];

const output = number.filter(x => x <= 6);
console.log(output);

// ? find

const isThere = number.find(y => y < 6);
console.log(isThere);