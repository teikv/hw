class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    fly() {
        console.log(`${this.name} is flying.`);
    }

    sing() {
        console.log(`${this.name} is singing.`);
    }
}

module.exports = Bird;