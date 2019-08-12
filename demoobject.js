var obj = {
    x: 10
};
console.log('x from obj ' + obj.x);
var obj1 = obj; // deep Copy (Structure+Value)
console.log('x from obj1 ' + obj1.x);
obj1.x = 100; // this will also update obj
console.log('x from obj1 after modification' + obj1.x);
console.log('x from obj after modification' + obj.x);

console.log('Deep Copy  with value match' + obj == obj1);
console.log('Deep Copy  with strict Equality' + obj === obj1);


// using Object.assign() to create a new Blank clone of the object aka shallow
var obj2 = Object.assign({}, obj);
console.log('x from obj2 ' + obj2.x);
obj2.x = 200; // this will also update obj
console.log('x from obj after modification in obj2 ' + obj.x);
console.log('x from obj2 after modification ' + obj2.x);

console.log('Clone  with value match' + obj == obj2);
console.log('Clone  with strict Equality' + obj === obj2);