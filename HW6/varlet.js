var a = 12;
var b = 20;

if (a > b) {
    let tmp = a + b;
    a = b;
    b= tmp;
}
console.log("a = " + a);
console.log("b = " + b);
var hello = (name,message) => 
    console.log(`Hello ${name}, ${message}`);

hello("Tuan","How are you?");
// console.log("tmp = " + tmp); // ReferenceError: tmp is not defined