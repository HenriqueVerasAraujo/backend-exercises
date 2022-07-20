"use strict";
var Color;
(function (Color) {
    Color["black"] = "black";
    Color["red"] = "red";
    Color["blue"] = "blue";
})(Color || (Color = {}));
;
var Door;
(function (Door) {
    Door["backdoor"] = "back doors";
    Door["frontdoor"] = "front doors";
})(Door || (Door = {}));
;
var Turn;
(function (Turn) {
    Turn["right"] = "The car has turned right";
    Turn["left"] = "The car has turned left";
})(Turn || (Turn = {}));
;
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    mySpecs() {
        return [this.brand, this.color, this.doors];
    }
    honk() {
        console.log('honk honk');
    }
    ;
    openTheDoor(door) {
        console.log(`The ${door} opened`);
    }
    ;
    closeTheDoor(door) {
        console.log(`The ${door} closed`);
    }
    ;
    turnOn() {
        return 'vrum vrum';
    }
    turn(command) {
        return console.log(command);
    }
}
const myCar = new Car('Fusca', Color.black, 4);
console.log(myCar.mySpecs());
myCar.turn(Turn.right);
myCar.openTheDoor(Door.backdoor);
