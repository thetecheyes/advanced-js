function stopwatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const clock1 = stopwatch();
console.log("value of clock 1 ", clock1());
console.log("value of clock 1 ", clock1());
console.log("value of clock 1 ", clock1());
console.log("value of clock 1 ", clock1());
console.log("value of clock 1 ", clock1(), "\n");

const clock2 = stopwatch();
console.log("value of clock 2 ", clock2());
console.log("value of clock 2 ", clock2());
console.log("value of clock 2 ", clock2(), "\n");
console.log("value of clock 1 ", clock1());
console.log("value of clock 1 ", clock1(), "\n");
console.log("value of clock 2 ", clock2());
