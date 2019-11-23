'use strict';

const basket = {
    max: 5,
    min: 0,
    current: 0,
    initial: 0,
    add: function () {
        if (this.current < this.max) {
            this.current += 1;
            // this.current=this.current +1;
        }
    },
    sub: function () {
        if (this.current > this.max) {
            this.current -= 1;
            // this.current=this.current -1;

        }

    },

    reset: function () {
        this.current = this.initial;
    },

    reset: () => {
        this.current = this.initial;
    },




};
debugger;
basket.add();
basket.add();
basket.add(); //me añade tres veces basket
basket.reset();
basket.add();
basket.add();

console.log('Valor actual: ', basket.current);