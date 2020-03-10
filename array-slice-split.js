// ! slice:
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//const slice = nums.slice(1, 4); // 1 = staring index number, 4 = ending index number. 

// console.log(nums);
// console.log(slice);

// ! splice:
const nums1 = [0, 1, 2, 3, 4, 5];
const part = nums1.splice(0, 4, 55, 22); // 0 = staring index, 4 = items to be deleted.

// console.log(part);
// console.log(nums1);

const together = nums1.join(" k ");
console.log(together);