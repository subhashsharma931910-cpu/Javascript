// ==================== Primitive Data Types ====================
// Primitive: directly value store karte hain (Stack memory mein)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100          // Number
const scoreValue = 100.3   // Number (decimal bhi number hi hai)

const isLoggedIn = false   // Boolean
const outsideTemp = null   // null: jaanbujhkar khaali value
let userEmail;             // undefined: declare kiya par value nahi di

// Symbol: unique identifier, same value dene par bhi dono alag hote hain
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false - dono alag hain chahe value same ho

// const bigNumber = 3456543576654356754n // BigInt: n lagao number ke end mein


// ==================== Reference (Non-Primitive) Types ====================
// Reference: memory address store karte hain (Heap memory mein)
// Array, Objects, Functions

// Array: ek saath kai values store karna (index se access hoti hain)
const heros = ["shaktiman", "naagraj", "doga"];

// Object: key-value pairs mein data store karna
let myObj = {
    name: "hitesh",
    age: 22,
}

// Function: ek kaam ko baar baar karne ke liye code block
const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId); // "symbol" print karega

// typeof reference: https://262.ecma-international.org/5.1/#sec-11.4.3


// ==================== Stack vs Heap ====================

// Stack (Primitive): copy milti hai, original safe rehta hai
let myName = "subhash"
let anotherName = myName   // myName ki COPY ban gayi
anotherName = "sunny"      // sirf copy badli, original nahi

console.log(myName);      // "subhash" - original unchanged
console.log(anotherName); // "sunny"   - copy changed
