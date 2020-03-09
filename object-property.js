const student = [
    { id: 12, name: "deepjol" },
    { id: 20, name: "shakib khan" },
    { id: 30, name: "dildar" },
    { id: 45, name: "moyoreee" }
];

const result = student.map(element => element.name);
console.log(result);

const ids = student.filter(s => s.id > 20);
console.log(ids);

const khujo = student.find(s => s.id > 30);
console.log(khujo);


// using for loop

const newArr = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const output = element.name;
    newArr.push(output);
}
console.log(newArr);
