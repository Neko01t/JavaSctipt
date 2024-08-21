// variables are used to store data in it 
// different types of variables store data differently
var variableVAR = 1;
let variableLET = 2;
const constantCONST = 3;

// var is a gloable variable
if (true) {
    console.log(x);
    console.log(y); //error
    console.log(z); //error
}

// let is same as var its just but it works to its own scope only
//# decleration of let only works in its own scope or its parent scope
//# var is not recomended to use in code ( for colabrative work )

//cosnt is used to decleare constaants 
//None can reassign its value

constantCONST = 5 //error

// when u dose not specify any var ,let or const it take it as you specify it in var
variableVAR = 5 // its stored in var fromat

//you can't have same var name 
//variables store values in data
//###Data Types

//#Primitive

// Number: Represents both integer and floating-point numbers.
// String: Represents a sequence of characters (text).
// Boolean: Represents a logical value, either true or false.
// Undefined: Represents a variable that has been declared but not yet assigned a value.
// Null: Represents an intentional absence of any object value. It’s considered an object type, but it's used to denote a null or empty reference.
// Symbol: Represents a unique and immutable identifier, often used as object property keys.
// BigInt: Represents integers with arbitrary precision, allowing the representation of numbers larger than the Number type can handle.

//#Non-Primitive

// Object: A collection of key-value pairs. Objects can be used to store more complex data structures.
// Array: A special type of object used for storing ordered collections of elements. Arrays are index-based.
//  Function: A special type of object that is callable and can execute code. Functions are first-class objects in JavaScript.
// Date: A built-in object for working with dates and times.
// RegExp: A regular expression object used for pattern matching in strings.
// Map: A collection of keyed data items, similar to an object, but keys can be of any type.
// Set: A collection of unique values of any type.
// WeakMap: A variant of Map that holds "weak" references to keys, preventing them from preventing garbage collection.
// WeakSet: A variant of Set that holds "weak" references to values, allowing for garbage collection.
// Error: Objects that represent runtime errors.