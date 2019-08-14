let names = ["A", "B", "C"];
console.log('Standard for..loop');
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log();
console.log('Standard for..in loop');
for (let i in names) {
    console.log(names[i]);
}
console.log();
console.log('ES 6 Iterator using for..of loop');
for (let n of names) {
    console.log(n);
}
console.log('Ends');