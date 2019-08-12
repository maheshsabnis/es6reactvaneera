function printValue(x) {
    if (x) {
        let i = 10;
        console.log('In-side if  ' + i);
    }
    console.log('Out-side if  ' + i);
}

printValue(true);
printValue(false);