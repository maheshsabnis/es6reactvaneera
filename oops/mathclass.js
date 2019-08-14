class MathClass {
    add(a, b) {
        return a + b;
    }
    mult(a, b) {
        return a * b;
    }

    div(a, b) {
        if (b == 0 || b < 0) throw new Error('denominator cannot be zero or -ve');
        return a / b;
    }

}