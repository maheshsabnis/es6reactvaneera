// 1. closed-type function
function myObject() {
    function xyz() {
        console.log('xyz');
    }
    return {
        // all these are public functions 
        fn1: function() {
            xyz();
            console.log('fn1');
        }
    };
}
var o = new myObject();
o.fn1();

// reference functions
var obj = function() {
    this.fn1 = function() {
            console.log('fn1');
        },
        this.fn2 = function() {
            console.log('fn2');
        }
};
var o1 = new obj();
o1.fn1();
o1.fn2();
obj.prototype.fn3 = function() {
    console.log('fn3');
};
o1.fn3();