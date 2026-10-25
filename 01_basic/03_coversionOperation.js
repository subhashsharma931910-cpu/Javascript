// ==================== Type Conversion ====================

let score = "33" // abhi yeh string hai

let valueInNumber = Number(score) // String ko Number mein convert karta hai
// "33"    => 33      (valid number string)
// "33abc" => NaN     (invalid string, NaN = Not a Number)
// true    => 1       (boolean to number)
// false   => 0

let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn) // Number ko Boolean mein convert karta hai
console.log(booleanIsLoggedIn);

// Boolean conversion rules:
// 1        => true
// 0        => false
// "subhash" => true  (koi bhi non-empty string true hoti hai)
// ""       => false  (empty string false hoti hai)


// ==================== Operations ====================

// console.log(2+2);  // jod
// console.log(2-2);  // ghataav
// console.log(2*2);  // gunakar
// console.log(2**2); // power (2 ki power 2 = 4)
// console.log(2/2);  // bhaag
// console.log(2%2);  // remainder (modulus)

let str1 = "subhash"
let str2 = " sharma"
let fullName = str1 + str2 // string concatenation: dono strings jod deta hai
console.log(fullName);

// String + Number ke tricky cases:
console.log("1" + 2);       // "12"  (number string mein convert ho jaata hai)
console.log(1 + "2");       // "12"
console.log("1" + 2 + 2);   // "122" (left se right, pehle "1"+2="12", phir "12"+2="122")
console.log(1 + 2 + "2");   // "32"  (pehle 1+2=3, phir 3+"2"="32")

console.log((3 + 2) * 5 % 3); // pehle bracket, phir *, phir % (BODMAS rule)

console.log(true)   // true print karega
console.log(+"");   // empty string ko number mein convert karta hai => 0

// Ek saath multiple variables ko same value assign karna
let num1, num2, num3 = 2 + 2;
num1 = num2 = num3 = 2 + 2; // teeno ko 4 assign ho jaayega

let gameCounter = 100
gameCounter++; // increment operator: value 1 se badha deta hai (100 => 101)
console.log(gameCounter);
