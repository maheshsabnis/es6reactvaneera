var msg;
msg = "JavaScript"; // the  string value
console.log(msg + typeof(msg));
msg = 100; // the numeric value
console.log(msg + typeof(msg));
msg = true; // the boolean value.
console.log(msg + typeof(msg));
msg = new Date(); // the date value
console.log(msg + typeof(msg));

function doWork(x) {
    if (x) {
        var i = 10;
        console.log('in if ' + i);
    }
    console.log('Out of if' + i);
}
doWork(true);
doWork(false);
for (i = 0; i < 5; i++) {
    console.log('inside loop i = ' + i);
}
console.log('outside loop i = ' + i);
i++;
console.log('outside increament i = ' + i);