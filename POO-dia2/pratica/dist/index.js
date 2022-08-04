"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.Race = void 0;
class Race {
    constructor(raceName) {
        this._raceName = raceName;
        this, this._inventory = [];
    }
    get raceName() {
        return this._raceName;
    }
    get inventory() {
        return this._inventory;
    }
    pickUpItem(item) {
        this._inventory.push(item);
        return `the ${this._raceName} picked up the item: ${item.quantity}x ${item.itemName}`;
    }
}
exports.Race = Race;
;
class Character {
    constructor(name, race) {
        this._name = name;
        this._race = race;
    }
    pickUpItem(item) {
        return this._race.pickUpItem(item);
    }
}
exports.Character = Character;
const player = new Race('elf');
const rock = {
    itemName: 'rock',
    quantity: 1,
};
const newPlayer = new Character('legolas', new Race('elf'));
console.log(newPlayer._race.pickUpItem(rock));
console.log(newPlayer._race.inventory);
