class SimpleClass {
    process() {
        console.log('Process....');
    }

    dataProcess(...values) {
        let sum = 0;
        if (values.length > 0) {
            values.forEach((v, i) => {
                if (typeof(v) === 'number') {
                    sum += v;
                }
            });
        }
        return sum;
    }

    print(msg) {
        console.log(`I am Simple Class ${msg}`);
    }

    calculate(a, b) {
        let res = a * b;
        return res;
    }
}
let myObj = new SimpleClass();

console.log(`2 parameters ${myObj.dataProcess(2,3)}`);
console.log(`3 parameters ${myObj.dataProcess(2,3,"4")}`);
console.log(`4 parameters ${myObj.dataProcess(2,3,4,"5")}`);
console.log(`5 parameters ${myObj.dataProcess(2,3,4,"5",6)}`);