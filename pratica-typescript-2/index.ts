// enum Color {
//     black = 'black',
//     red = 'red',
//     blue = 'blue'
// };

// enum Door {
//     backdoor = 'back doors',
//     frontdoor = 'front doors',
// };

// enum Turn {
//     right = 'The car has turned right',
//     left = 'The car has turned left'
// };

// interface Car {
//     brand: string,
//     color: Color,
//     doors: number,
//     honk(): void,
//     openTheDoor(door: Door): void,
//     closeTheDoor(door: Door): void,
//     turnOn(): string
//     turn(command: Turn): void,
//     mySpecs(): string[],
// }
// class Car {
//     constructor(brand: string, color: Color, doors: number) {
//         this.brand = brand;
//         this.color = color;
//         this.doors = doors;
//     }
//     mySpecs() {
//         return [this.brand, this.color, this.doors];
//     }
//     honk() {
//         console.log('honk honk');
//     } ;
//     openTheDoor(door: Door) {
//         console.log(`The ${door} opened`);
//     };
//     closeTheDoor(door: Door) {
//         console.log(`The ${door} closed`);
//     };
//     turnOn() {
//         return 'vrum vrum'
//     }
//     turn(command: Turn) {
//         return console.log(command);
//     }
// }

// const myCar = new Car('Fusca', Color.black, 4);

// console.log(myCar.mySpecs());
// myCar.turn(Turn.right);
// myCar.openTheDoor(Door.backdoor);
type Slices = 4 | 6 | 8;
type SlicesSweet = 4;

interface Pizza {
    flavor: string,
    slices: Slices,
};

class Pizza {
    constructor(flavor: string, slices: Slices) {
        this.flavor = flavor;
        this.slices = slices;
    };
    myPizza():void {
        console.log(`${this.flavor}, ${this.slices} fatias`);
    }
};

const pizza1 = new Pizza('Calabresa', 8);
const pizza2 = new Pizza('Marguerita', 6);
const pizza3 = new Pizza('Nutella', 4);

interface standardPizza extends Pizza {

}
pizza1.myPizza();