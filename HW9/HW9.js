// example about set on JS 
// Create a new Set
const letters = new Set(["a","b","c"]);
letters.add("d");
letters.add("e");
letters.add("f");
// remove an element
letters.delete("f");
// Display set  
console.log(letters);

// Display typeof
console.log( "The type of the set is " + typeof letters) ;

// Create a new Map
const numbers = new Map([[1,"one"],[2,"two"],[3,"three"]]);
//add new elements
numbers.set(4,"four");
numbers.set(5,"five");
numbers.set(6,"six");
//Display map 
console.log(numbers);