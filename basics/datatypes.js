"use strict";

//alert("hello") //valid for browser not nodejs


console.log("=== JavaScript Data Types ===");

// 1. String
let name = "Amit";
console.log("String:", name);
console.log(typeof name); // string

// 2. Number
let age = 24;
let salary = 35000.50;
console.log("Number:", age, salary);
console.log(typeof age); // number

// 3. Boolean
let isStudent = true;
console.log("Boolean:", isStudent);
console.log(typeof isStudent); // boolean

// 4. Undefined
let address;
console.log("Undefined:", address);
console.log(typeof address); // undefined

// 5. Null
let manager = null;
console.log("Null:", manager);
console.log(typeof manager); // object (JavaScript quirk)

// 6. BigInt
let bigNumber = 12345678901234567890n;
console.log("BigInt:", bigNumber);
console.log(typeof bigNumber); // bigint

// 7. Symbol
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);
console.log(typeof uniqueId); // symbol

// 8. Object
let employee = {
    name: "Amit",
    age: 24,
    department: "IT"
};
console.log("Object:", employee);
console.log(typeof employee); // object

// 9. Array
let skills = ["Python", "JavaScript", "SQL"];
console.log("Array:", skills);
console.log(typeof skills); // object
console.log(Array.isArray(skills)); // true

// 10. Function
function add(a, b) {
    return a + b;
}
console.log("Function result:", add(10, 20));
console.log(typeof add); // function

