"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function () {
    function Student() {
        _classCallCheck(this, Student);

        this.students = [{ Id: 1, Name: "A" }];
    }

    _createClass(Student, [{
        key: "addStudent",
        value: function addStudent(student) {
            this.students.push(student);
            return this.students;
        }
    }, {
        key: "getStudents",
        value: function getStudents() {
            return this.students;
        }
    }]);

    return Student;
}();
