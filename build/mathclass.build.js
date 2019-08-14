'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MathClass = function () {
    function MathClass() {
        _classCallCheck(this, MathClass);
    }

    _createClass(MathClass, [{
        key: 'add',
        value: function add(a, b) {
            return a + b;
        }
    }, {
        key: 'mult',
        value: function mult(a, b) {
            return a * b;
        }
    }, {
        key: 'div',
        value: function div(a, b) {
            if (b == 0 || b < 0) throw new Error('denominator cannot be zero or -ve');
            return a / b;
        }
    }]);

    return MathClass;
}();
