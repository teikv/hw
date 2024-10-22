class House {
    constructor() {
        this.address="1234 Elm St.";
    }
}
class Mansion extends House {
    constructor(address,room) {
        super(address);
        this.address = "5678 Oak";
    }   
    showAddress() {
        console.log("Dia chi: " + this.address);
    }
    showRoom() {
        console.log("So phong: " + this.room);
    }
}
let myHouse = new Mansion();
myHouse.showAddress();
myHouse.showRoom();
