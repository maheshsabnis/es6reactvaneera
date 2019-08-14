'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleClass = function () {
    function SimpleClass() {
        _classCallCheck(this, SimpleClass);
    }

    _createClass(SimpleClass, [{
        key: 'process',
        value: function process() {
            console.log('Process....');
        }
    }, {
        key: 'dataProcess',
        value: function dataProcess() {
            var sum = 0;

            for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
                values[_key] = arguments[_key];
            }

            if (values.length > 0) {
                values.forEach(function (v, i) {
                    if (typeof v === 'number') {
                        sum += v;
                    }
                });
            }
            return sum;
        }
    }, {
        key: 'print',
        value: function print(msg) {
            console.log('I am Simple Class ' + msg);
        }
    }, {
        key: 'calculate',
        value: function calculate(a, b) {
            var res = a * b;
            return res;
        }
    }]);

    return SimpleClass;
}();

var myObj = new SimpleClass();

console.log('2 parameters ' + myObj.dataProcess(2, 3));
console.log('3 parameters ' + myObj.dataProcess(2, 3, "4"));
console.log('4 parameters ' + myObj.dataProcess(2, 3, 4, "5"));
console.log('5 parameters ' + myObj.dataProcess(2, 3, 4, "5", 6));
