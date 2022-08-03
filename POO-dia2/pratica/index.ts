

type races = 'Human' | 'elf' | 'dwarf';
type item = {
    itemName: string,
    quantity: number,
}

export class Race {
    private _raceName: races;
    private _inventory: item[];

    constructor(raceName: races) {
        this._raceName = raceName;
        this,this._inventory = [];
    }

    public get raceName() {
        return this._raceName;
    }
    public get inventory() {
        return this._inventory;
    }

    public pickUpItem(item: item):string {
        this._inventory.push(item);
        return `the ${ this._raceName } picked up the item: ${item.quantity}x ${ item.itemName }`
    }
};

export class Character {
    private _name: string
    public _race: Race;
    constructor(name:string, race: Race) {
        this._name = name;
        this._race = race;
    }
    pickUpItem(item: item):string {
        return this._race.pickUpItem(item);
    }
}


const player = new Race('elf');
const rock: item = {
    itemName: 'rock',
    quantity: 1,

}

const newPlayer = new Character('legolas', new Race('elf'));

console.log(newPlayer._race.pickUpItem(rock));
console.log(newPlayer._race.inventory);