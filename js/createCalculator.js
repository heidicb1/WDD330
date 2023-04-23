let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
    
    divide() {
        return this.a / this.b;
    },

    sub() {
        return this.a - this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read ();
alert( calculator.sum());
alert( calculator.mul());
alert( calculator.divide());
alert( calculator.sub());