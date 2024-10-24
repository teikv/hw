function greet(name, callback) {
  console.log('Hello!');

  callback(name);
}  
function sayGoodbye() {
    console.log('Goodbye!');
}
greet('John', sayGoodbye);
