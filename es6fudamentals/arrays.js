let actors = [];
actors.push("Sean Connary");
actors.push("Roger Moore");
actors.push("George Luznaby");
actors.push("Trimothy Dalton");
actors.push("Pierce Brosnon");
actors.push("Danial Craig");

// Iteration methods forEach()/map()
// passing parintActor as callback function
// actors.forEach(printActor);
// function
// function printActor(v, i) {
//     console.log(`Actor at index ${i} is ${v}`);
// }
// console.log();
// // direct callback functio body
// actors.forEach(function(v, i) {
//     console.log(`Actor at index ${i} is ${v}`);
// });
console.log();
// using Arrow Operator aka =>

// actors.forEach((v, i) => {
//     console.log(`Actor at index ${i} is ${v}`);
// });

// actors.map((v, i) => {
//     console.log(`Actor at index ${i} is ${v}`);
// });

// actors.map((v, i) => {
//     if (v.length >= 14) {
//         console.log(`Actor at index ${i} is ${v}`);
//     }
// });
// using Filter method

let res = actors.filter((v, i) => {
    return v.startsWith('S');
    // return v.length >= 14;
});
res.forEach((v, i) => {
    console.log(`Actor at index ${i} is ${v}`);
});