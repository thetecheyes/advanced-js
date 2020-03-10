// ! break: loop stops when if condition matches.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        break;
    }
    console.log(arr[i]);
}

console.log("\n"); // for new line

// ! continue: skip all the negetive values.
const arr1 = [-1, 2, -3, 4, -5, 6, -7, 8, -9];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
        continue;
    }
    console.log(arr1[i]);
}
