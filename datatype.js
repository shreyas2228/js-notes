//data  types in js
/*
string = "hello", 'hello', `hello`
number == 1,2,3,4
boolean == true/false
bigint == 1234567890123456789012345678901234567890n
null == absence of value
undefined == value not assigned
symbol == unique identifier
object == {name: "john", age:30}
*/

/* 
let const and var
let and const are block scoped
var is function scoped

let example
let age = 25;

age = 30; // valid

const example
const name = "John";
name = "Doe"; // invalid, will throw error

var example
var city = "New York";
city = "Los Angeles"; // valid
*/


// operations in js
// arithmetic operators: +, -, *, /, %, ++, --, --
// assignment operators: =, +=, -=, *=, /=, %=
// comparison operators: ==, ===, !=, !==, >, <, >=, <=
// logical operators: &&, ||, !
// string operators: + (concatenation), += (concatenation assignment)
// type operators: typeof, instanceof
// bitwise operators: &, |, ^, ~, <<, >>, >>>
// conditional (ternary) operator: condition ? expr1 : expr2

/*
arithmetic example
let a = 10;
let b = 5;
let sum = a + b; // 15

assignment example
let x = 10;
x += 5; // x = x + 5, now x is 15

comparison example
let isEqual = (a == b); // false

logical example
let isAdult = true;
let hasID = false;
let canEnter = isAdult && hasID; // false

string example
let greeting = "Hello, " + "world!"; // "Hello, world!"

type example
let typeOfA = typeof a; // "number"
bitwise example
let bitwiseAnd = a & b; // 0

conditional example
let access = (age >= 18) ? "Allowed" : "Denied"; // "Allowed"   

*/

// operators precedence in js
/*
1. Parentheses ()
2. Exponents **
3. Multiplication *, Division /, Modulus %
4. Addition +, Subtraction -
5. Relational operators <, <=, >, >=
6. Equality operators ==, ===, !=, !==
7. Logical AND &&
8. Logical OR ||
9. Assignment operators =, +=, -=, *=, /=, %=
*/

// primitive vs non-primitive data types
/*
Primitive data types:
- Stored directly in the location that the variable accesses.
- Examples: string, number, boolean, null, undefined, symbol, bigint.
- Immutable (cannot be changed).

Non-primitive data types:
- Stored as references to the location in memory where the data is held.
- Examples: objects, arrays, functions.
- Mutable (can be changed).
*/

// example of primitive data type
/*
some primitive data types are
string
number
boolean
null
undefined
symbol
bigint

*/

// some non-primitive data types are
/*
object
array
function
*/

// example of primitive data type
let str = "Hello, World!"; // string
let num = 42; // number
let bool = true; // boolean
let n = null; // null
let undef; // undefined
let sym = Symbol("unique"); // symbol
let bigIntNum = 1234567890123456789012345678901234567890n; // bigint
console.log(typeof str); // "string"
console.log(typeof num);  // "number"
console.log(typeof bool); // "boolean"
console.log(typeof n); // "object" (this is a known quirk in JavaScript)
console.log(typeof undef); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigIntNum); // "bigint"


// example of non-primitive data type
let obj = { name: "John", age: 30 }; // object
let arr = [1, 2, 3, 4, 5]; // array
function greet() { // function
    return "Hello!";
}
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof greet); // "function"

