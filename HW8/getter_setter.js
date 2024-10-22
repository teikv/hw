class Circle {
    constractor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this.radius;
    }
    set radius(radius) {
        if (radius > 0) {
            this.radius = radius;
        }
        else {
            console.log('Radius must be positive');
        }
        
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

}
    let myCircle = new Circle(5);
    console.log("Ban kinh ban dau" +    myCircle.radius);
    myCircle.radius = 10;
    console.log("Ban kinh sau khi thay doi" + myCircle.radius);
    console.log("Dien tich hinh tron" + myCircle.calculateArea());
