class Bird {
  getType() {
    return "bird";
  }
};
class Parrot extends Bird {
  getType() {
    return "parrot";
  }
  classType() {
    return super.getType();
}
};
let myBird = new Parrot();
console.log(myBird.classType());