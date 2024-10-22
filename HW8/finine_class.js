class Shape {
    constructor(type,length,width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
    console.log(` this area ${this.length * this.width}`);
    }
    getPerimeter() {
    console.log(` this perimeter ${2*(this.length + this.width)}`);
    }

  }

const myShape1 = new Shape( 10, 5);
myShape1.getArea();
myShape1.getPerimeter();
// Output:
