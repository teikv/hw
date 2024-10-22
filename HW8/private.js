class MyClass {
  a = 1;
  #b = 2;
  static #c = 3;

  incB() {
    this.#b++;
    console.log(this.#b);
  }
}

const m = new MyClass();
m.incB();