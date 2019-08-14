"use strict";

var names = ["A", "B", "C"];
console.log('Standard for..loop');
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log();
console.log('Standard for..in loop');
for (var _i in names) {
    console.log(names[_i]);
}
console.log();
console.log('ES 6 Iterator using for..of loop');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        console.log(n);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log('Ends');
