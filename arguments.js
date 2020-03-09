// ? Agruments are object but like an array. So called array like object.

function addNum(num) {
    let total = 0;
    const arg = [...arguments];

    for (i = 0; i < arg.length; i++) {
        total += arg[i];
    }
    return total;
}

const result = addNum(3, 6, 10);
console.log(result);