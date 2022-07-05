// Non-Primitive types or user defined data structure are "Reference Type"

// Primitive Type
const number1 = 1;
const number2 = number1;
const number3 = 1;

console.log(number1 === number2); // true
console.log(number3 === number1); //true

//Reference-type
const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

console.log(obj1 === obj2); //true
console.log(obj3 === obj1); //false *Since new memory space has been created.
