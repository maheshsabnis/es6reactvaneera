var v1 = 1;
var v2 = "1";
console.log(v1 == v2); // true, value equality after parsing from left-to-right
console.log(v1 === v2); // false deep equality aka value + typeof both sides of expression