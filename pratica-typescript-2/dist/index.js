"use strict";
// enum Color {
//     black = 'black',
//     red = 'red',
//     blue = 'blue'
// };
;
class Pizza {
    constructor(flavor, slices) {
        this.flavor = flavor;
        this.slices = slices;
    }
    ;
    myPizza() {
        console.log(`${this.flavor}, ${this.slices} fatias`);
    }
}
;
const pizza1 = new Pizza('Calabresa', 4);
pizza1.myPizza();
